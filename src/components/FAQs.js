import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Stack,
    Typography,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import React from "react";
  
  const  FAQs = () => {
    return (
      <Box
        sx={{
          width: "100%",
          paddingTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ backgroundColor: "#FDF4FE", width: "100%" }}>
          {/* Header Section */}
          <Box sx={{ width: "90%", margin: "auto" }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "25px",
                fontWeight: "500",
                fontFamily: "sans-serif",
                padding: "20px 0",
              }}
            >
              FAQs
            </Typography>
            {/* Topic Buttons */}
            <Box sx={{ padding: "20px 0" }}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#6C4675",
                    color: "white",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "#5a365e" },
                  }}
                >
                  Topic 1
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#6C4675",
                    color: "#6C4675",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#F9EAFB",
                      borderColor: "#6C4675",
                    },
                  }}
                >
                  Topic 2
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#6C4675",
                    color: "#6C4675",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#F9EAFB",
                      borderColor: "#6C4675",
                    },
                  }}
                >
                  Topic 3
                </Button>
              </Stack>
            </Box>
          </Box>
          {/* FAQ Section */}
          <Box
            sx={{
              width: "90%",
              margin: "auto",
              paddingBottom: "50px",
            }}
          >
            {/* Accordion 1 */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#6C4675" }} />}
                aria-controls="faq1-content"
                id="faq1-header"
              >
                <Typography sx={{ fontWeight: "500", color: "#6C4675" }}>
                  How do I directly get connected with customer connect?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "14px", lineHeight: "1.6" }}>
                  For additional information, you can connect with us on our
                  LupiConnect number: **7070300400**. You can also visit our
                  website at{" "}
                  <a
                    href="https://www.lupindiagonstics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#6C4675", textDecoration: "none" }}
                  >
                    www.lupindiagonstics.com
                  </a>{" "}
                  for more details.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Accordion 2 */}
            <Accordion sx={{ marginTop: "20px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#6C4675" }} />}
                aria-controls="faq2-content"
                id="faq2-header"
              >
                <Typography sx={{ fontWeight: "500", color: "#6C4675" }}>
                  What all services do we offer?
                </Typography>
              </AccordionSummary>
            </Accordion>
            {/* Accordion 3 */}
            <Accordion sx={{ marginTop: "20px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#6C4675" }} />}
                aria-controls="faq3-content"
                id="faq3-header"
              >
                <Typography sx={{ fontWeight: "500", color: "#6C4675" }}>
                  When will I get my report? How will I know it's ready?
                </Typography>
              </AccordionSummary>
            </Accordion>
            {/* Accordion 4 */}
            <Accordion sx={{ marginTop: "20px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#6C4675" }} />}
                aria-controls="faq4-content"
                id="faq4-header"
              >
                <Typography sx={{ fontWeight: "500", color: "#6C4675" }}>
                  Can I add my family members to my registered mobile number for
                  availing diagnostic services?
                </Typography>
              </AccordionSummary>
            </Accordion>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default FAQs;
  