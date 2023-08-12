export const customStyle = {
  '& .MuiSvgIcon-root': {
    fill: 'white',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'inherit',
    border: '2px',
  },
  '& .MuiSelect-select': {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '16px',
    lineHeight: '24px',
  },
}

export const customSelectStyle = {
  '& .MuiSvgIcon-root': {
    fill: 'white',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '2px Solid ',
  },
  '& .MuiSelect-select': {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '14px',
    lineHeight: '24px',
    border: '1px Solid grey',
  },
}
export const customPaginationStyle = {
  '& .MuiSvgIcon-root': {
    fill: 'white',
  },

  '& .MuiPaginationItem-root': {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '14px',

    '&.Mui-selected': {
      backgroundColor: 'white',
      color: 'black',
      '&:hover': { backgroundColor: 'rgba(245, 245, 245, 0.6)' },
    },
  },
}
