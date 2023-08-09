import { SyntheticEvent, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { tabsData } from '@/modules/usersList/helpers/data/tabsData'
import { TabPanel } from '@/modules/usersList/components/topPanel/TabPanel'

export const TopPanel = () => {
  const [value, setValue] = useState(0)

  const tabList = tabsData.map((tab) => (
    <Tab
      key={tab.id}
      label={tab.label}
      sx={{
        color: '#4C4C4C',
        textTransform: 'capitalize ',
      }}
    />
  ))

  const tabPanelList = tabsData.map((tab) => {
    return (
      <TabPanel key={tab.id} value={value} index={tab.id}>
        {tab.component}
      </TabPanel>
    )
  })
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabList}
        </Tabs>
      </Box>
      {tabPanelList}
    </Box>
  )
}
