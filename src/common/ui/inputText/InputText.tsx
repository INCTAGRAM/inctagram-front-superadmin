import React, { ChangeEvent, DetailedHTMLProps, forwardRef, InputHTMLAttributes, KeyboardEvent, ReactNode } from 'react'
import style from './InputText.module.scss'

// Пропсы стандартного инпута
type DefaultInputTextPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputTextPropsType = DefaultInputTextPropsType & {
  fieldName?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
  children?: ReactNode
  type?: string
  autoFocus: boolean
}

type Ref = HTMLInputElement

export const InputText = forwardRef<Ref, InputTextPropsType>(
  (
    {
      type = 'text',
      fieldName,
      onChange,
      onChangeText,
      onKeyDown,
      onEnter,
      error,
      className,
      spanClassName,
      children,
      ...restProps
    },
    ref
  ) => {
    InputText.displayName = 'InputText'

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e)
      onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown && onKeyDown(e)
      onEnter && e.key === 'Enter' && onEnter()
    }
    const finalSpanClassName = `${style.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${style.inputText} ${error && style.errorInput} ${className}`
    return (
      <label className={`${style.inputContainer} ${finalInputClassName}`}>
        {children}
        {fieldName && <span className={style.fieldName}>{fieldName}</span>}
        <input ref={ref} type={type} onChange={onChangeHandler} onKeyDown={onKeyPressHandler} {...restProps} />
        {error && <span className={finalSpanClassName}>{error}</span>}
      </label>
    )
  }
)
