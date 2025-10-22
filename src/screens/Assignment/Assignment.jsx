import React from "react";
import { Box } from "@mui/material";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import JobPage from "./sections/JobPage";

export const Assignment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fbfbff",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center", 
        alignItems: "flex-start", 
      }}
    >
     
      <Box
        sx={{
          transform: "scale(0.93)",
          transformOrigin: "top center",
          width: "112%",
          height: "112%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexShrink: 0 }}>
          <NavigationBarSection />
        </Box>

        <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
          <JobPage />
        </Box>
      </Box>
    </Box>
  );
};
