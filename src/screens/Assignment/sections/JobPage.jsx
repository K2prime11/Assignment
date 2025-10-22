import React, { useState } from "react";
import { Box } from "@mui/material";
import { SearchBarSection } from "./SearchBarSection";
import { JobListingsSection } from "./JobListingsSection";

const JobPage = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    location: "",
    jobType: "",
  });

  const handleFiltersChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh" }}>
      <SearchBarSection onFiltersChange={handleFiltersChange} />
      <JobListingsSection filters={filters} />
    </Box>
  );
};

// ✅ Add this line for default export
export default JobPage;
