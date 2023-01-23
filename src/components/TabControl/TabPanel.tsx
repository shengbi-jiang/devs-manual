import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { TabControlContext } from './TabControl';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
}

const TabPanel = ({ children, index, ...other }: TabPanelProps) => {
  const { openedTabId } = useContext(TabControlContext);
  return (
    <div
      role="tabpanel"
      hidden={openedTabId !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {openedTabId === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
