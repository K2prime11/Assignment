import { Box } from "@mui/material";
import React from "react";
import { JobFilterSection } from "./sections/JobFilterSection";
import { JobListingsSection } from "./sections/JobListingsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { SearchBarSection } from "./sections/SearchBarSection";

export const Assignment = () => {
  console.log("Assignment rendered!");
  return (
    <Box
      sx={{
        backgroundColor: "#fbfbff",
        width: "100%",
        minWidth: "1440px",
        minHeight: "1024px",
        
      }}
    >
        <NavigationBarSection />
         <SearchBarSection />
      
      {/* <JobFilterSection /> */}
       <JobListingsSection />
    </Box>
  );
};
