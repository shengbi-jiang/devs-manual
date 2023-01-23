import React, { useContext, createContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabControlContextValue {
  openedTabId: number | null;
  handleTabClick: (tabId: number) => void;
}

export const TabControlContext = createContext<TabControlContextValue>({
  openedTabId: null,
  handleTabClick: () => {},
});

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabControlProps {
  tabLabels: string[];
}

const TabControl = ({ tabLabels }: TabControlProps) => {
  const { openedTabId, handleTabClick } = useContext(TabControlContext);

  const handleChange = (event: React.SyntheticEvent, tabId: number) => {
    handleTabClick(tabId);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={openedTabId} onChange={handleChange} aria-label="basic tabs example">
        {tabLabels.map((label, index) => (
          <Tab key={label} label={label} {...a11yProps(index)} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabControl;
