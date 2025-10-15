import { Box } from "@mui/material";
import React from "react";
import { JobListingsSection } from "./sections/JobListingsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { SearchBarSection } from "./sections/SearchBarSection";

export const Assignment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fbfbff",
        width: "100vw",
        height:"100vh",
        transform: "scale(0.9)", 
        transformOrigin: "top center",
      }}
    >
      <NavigationBarSection />
      <SearchBarSection />
      <JobListingsSection />
    </Box>
  );
};
