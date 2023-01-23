import React, { createContext, useContext, PropsWithChildren } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionContextValue {
  expandedAccordionId: string | null;
  handleChange: (accordionId: string) => void;
}

export const AccordionContext = createContext<AccordionContextValue>({
  expandedAccordionId: null,
  handleChange: () => {},
});

interface Props {
  id: string;
  title: string;
}

const ControlledAccordion = ({ id, title, children }: PropsWithChildren<Props>) => {
  const { expandedAccordionId, handleChange } = useContext(AccordionContext);

  return (
    <Accordion expanded={expandedAccordionId === id} onChange={() => handleChange(id)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={id} id={id}>
        <Typography fontWeight="bold">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default ControlledAccordion;
