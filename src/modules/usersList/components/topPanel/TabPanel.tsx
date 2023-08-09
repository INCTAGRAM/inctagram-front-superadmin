import { PropsWithChildren } from 'react'

interface ITabPanelProps {
  value: number
  index: number
}

export const TabPanel = ({ children, value, index, ...other }: PropsWithChildren<ITabPanelProps>) => (
  <div
    style={{ marginTop: '25px' }}
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && children}
  </div>
)
