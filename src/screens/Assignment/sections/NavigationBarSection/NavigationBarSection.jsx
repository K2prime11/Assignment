import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { CreateJobModal } from "../../../../components/CreateJobModal";

const navigationItems = [
  { label: "Home", value: "home" },
  { label: "Find Jobs", value: "find-jobs" },
  { label: "Find Talents", value: "find-talents" },
  { label: "About us", value: "about-us" },
  { label: "Testimonials", value: "testimonials" },
];

export const NavigationBarSection = () => {
  const [activeItem, setActiveItem] = useState("find-jobs");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 3,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#fbfbff",
      }}
    >
      
      <Box
        sx={{
          width: "890px", 
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#ffffff",
          borderRadius: "122px",
          border: "1px solid #fcfcfc",
          boxShadow: "0px 0px 20px rgba(127, 127, 127, 0.15)",
          px: 4,
          flexWrap: "nowrap",
          whiteSpace: "nowrap",
        }}
      >
   
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Box
            component="img"
            src="https://c.animaapp.com/mglzl09gSzk8BX/img/frame-54.svg"
            alt="Logo"
            sx={{
              width: 44,
              height: 45,
            }}
          />
        </Box>

        
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          sx={{
            flexGrow: 1,
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {navigationItems.map((item) => (
            <Box
              key={item.value}
              onClick={() => setActiveItem(item.value)}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pb: activeItem === item.value ? "3px" : "0px",
                transition: "border-color 0.3s",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: activeItem === item.value ? 700 : 500,
                  color: activeItem === item.value ? "#000000" : "#5a5a5a",
                  fontSize: "16px",
                  transition: "color 0.3s",
                  "&:hover": { color: "#000000" },
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>

        
        <Box
          sx={{
            width: "131px", 
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => setIsModalOpen(true)}
            sx={{
              px: 3,
              py: 1,
              borderRadius: "30px",
              background:
                "linear-gradient(180deg, rgba(161, 40, 255, 1) 0%, rgba(97, 0, 173, 1) 100%)",
              textTransform: "none",
              minWidth: "131px",
              height: "48px",
              flexShrink: 0,
              boxShadow: "0px 0px 14px rgba(92, 92, 92, 0.15)",
              "&:hover": {
                background:
                  "linear-gradient(180deg, rgba(141, 20, 235, 1) 0%, rgba(77, 0, 153, 1) 100%)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 700,
                color: "white",
                fontSize: "16px",
              }}
            >
              Create Jobs
            </Typography>
          </Button>
        </Box>
      </Box>

       {/* Modal */}
      <CreateJobModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};
