import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const faqData = [
    {
      id: "panel1",
      question: "What is Superior Buildcon?",
      answer:
        "Superior Buildcon is a construction company established in 2002 in Mumbai. The company focuses on various construction fields such as Residential, Commercial, Industrial, and Infra Projects.",
    },
    {
      id: "panel2",
      question: "Who leads Superior Buildcon?",
      answer:
        "The company is led by its founder, Mr. Krishna Jetta, along with a management team comprising experienced professionals responsible for operations, client servicing, logistics, and compliance.",
    },
    {
      id: "panel3",
      question: "What is the mission of Superior Buildcon?",
      answer:
        "Superior Buildcon's mission includes adopting the latest technologies, ensuring safety and quality, encouraging innovation, and generating employment.",
    },
    {
      id: "panel4",
      question:
        "What are the quality and safety policies of Superior Buildcon?",
      answer:
        "Quality and safety are key components of Superior Buildcon's policies, with specific measures in place to ensure high standards in all their projects.",
    },
  ];

  return (
    <>
      <div className="lg:px-14 px-4 py-10">
        <h1 className="sm:text-3xl text-2xl font-medium mx-auto title-font sm:mb-14 mb-8 text-gray-900 text-center">
          Frequently Asked Questions
        </h1>
        {faqData.map((faq) => {
          return (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
            >
              <AccordionSummary
                aria-controls={`${faq.id}d-content`}
                id={`${faq.id}d-header`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default FAQ;
