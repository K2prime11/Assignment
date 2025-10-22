import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import {
  Box,
  Divider,
  InputAdornment,
  MenuItem,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const SearchBarSection = ({ onFiltersChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState([50, 80]);

  const handleSalaryChange = (event, newValue) => {
    setSalaryRange(newValue);
    onFiltersChange({ searchTerm, location, jobType, salaryRange: newValue }); 
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFiltersChange({ searchTerm: value, location, jobType });
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    onFiltersChange({ searchTerm, location: value, jobType });
  };

  const handleJobTypeChange = (e) => {
    const value = e.target.value;
    setJobType(value);
    onFiltersChange({ searchTerm, location, jobType: value });
  };

  
  return (
    <Box
      sx={{
        width: "100vw", 
        bgcolor: "white",
        boxShadow: "0px 0px 14px rgba(197, 191, 191, 0.25)",
        py: 2,
        px: 7, 
        position: "relative",
        left: 0,
      }}
    >
      <Stack
        direction="row"
        spacing={0}
        alignItems="center"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: 48, alignSelf: "center" }}
          />
        }
      >
        {/* Search Bar */}
        <Box sx={{ flex: 1, px: 2 }}>
          <TextField
            fullWidth
            placeholder="Search By Job Title, Role"
            variant="standard"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#686868" }} />
                </InputAdornment>
              ),
              sx: {
                fontFamily: "Satoshi Variable, Helvetica",
                fontWeight: 500,
                color: "#686868",
                fontSize: "16px",
              },
            }}
          />
        </Box>

        {/* Location */}
        <Box sx={{ flex: 1, px: 2 }}>
          <Select
            fullWidth
            value={location}
            onChange={handleLocationChange}
            displayEmpty
            variant="standard"
            disableUnderline
            startAdornment={
              <InputAdornment position="start">
                <LocationOnOutlinedIcon sx={{ color: "#686868", mr: 1 }} />
              </InputAdornment>
            }
            sx={{
              fontFamily: "Satoshi Variable, Helvetica",
              fontWeight: 500,
              color: "#686868",
              fontSize: "16px",
              "& .MuiSelect-select": {
                paddingLeft: 0,
              },
            }}
          >
            <MenuItem value="">Preferred Location</MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
            <MenuItem value="Coimbatore">Coimbatore</MenuItem>
            <MenuItem value="Bangalore">Bangalore</MenuItem>
          </Select>
        </Box>

        {/* Job Type */}
        <Box sx={{ flex: 1, px: 2 }}>
          <Select
            fullWidth
            value={jobType}
            onChange={handleJobTypeChange}
            displayEmpty
            variant="standard"
            disableUnderline
            startAdornment={
              <InputAdornment position="start">
                <RecordVoiceOverOutlinedIcon sx={{ color: "#686868", mr: 1 }} />
              </InputAdornment>
            }
            sx={{
              fontFamily: "Satoshi Variable, Helvetica",
              fontWeight: 500,
              color: "#686868",
              fontSize: "16px",
              "& .MuiSelect-select": {
                paddingLeft: 0,
              },
            }}
          >
            <MenuItem value="">Job Type</MenuItem>
            <MenuItem value="Full Time">Full Time</MenuItem>
            <MenuItem value="Part Time">Part Time</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
          </Select>
        </Box>

        {/* Salary Range (unchanged) */}
        <Box sx={{ flex: 1.2, px: 3 }}>
          <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography
                sx={{
                  fontFamily: "Satoshi Variable, Helvetica",
                  fontWeight: 700,
                  color: "#222222",
                  fontSize: "16px",
                }}
              >
                Salary Per Month
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Satoshi Variable, Helvetica",
                  fontWeight: 700,
                  color: "#222222",
                  fontSize: "16px",
                }}
              >
                ₹{salaryRange[0]}k - ₹{salaryRange[1]}k
              </Typography>
            </Stack>
            <Slider
              value={salaryRange}
              onChange={handleSalaryChange}
              min={50}
              max={90}
              sx={{
                color: "#000000",
                "& .MuiSlider-thumb": {
                  width: 15,
                  height: 15,
                  backgroundColor: "white",
                  border: "5px solid #000000",
                },
                "& .MuiSlider-track": { height: 2, backgroundColor: "#000000" },
                "& .MuiSlider-rail": { height: 2, backgroundColor: "#000000" },
              }}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
