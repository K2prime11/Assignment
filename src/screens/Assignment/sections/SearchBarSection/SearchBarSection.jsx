import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
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

export const SearchBarSection = () => {
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState([50, 80]);

  const handleSalaryChange = (event, newValue) => {
    setSalaryRange(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        boxShadow: "0px 0px 14px rgba(197, 191, 191, 0.25)",
        py: 2,
        px: 4,
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
        <Box sx={{ flex: 1, px: 2 }}>
          <TextField
            fullWidth
            placeholder="Search By Job Title, Role"
            variant="standard"
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

        <Box sx={{ flex: 1, px: 2 }}>
          <Select
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
            <MenuItem value="" disabled>
              Preferred Location
            </MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
            <MenuItem value="Coimbatore">Coimbatore</MenuItem>
            <MenuItem value="Bangalore">Bangalore</MenuItem>
          </Select>
        </Box>

        <Box sx={{ flex: 1, px: 2 }}>
          <Select
            fullWidth
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            displayEmpty
            variant="standard"
            disableUnderline
            startAdornment={
              <InputAdornment position="start">
                <WorkOutlineIcon sx={{ color: "#686868", mr: 1 }} />
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
            <MenuItem value="" disabled>
              Job type
            </MenuItem>
            <MenuItem value="fulltime">Full Time</MenuItem>
            <MenuItem value="parttime">Part Time</MenuItem>
            <MenuItem value="contract">Contract</MenuItem>
          </Select>
        </Box>

        <Box sx={{ flex: 1.2, px: 3 }}>
          <Stack spacing={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
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
              min={0}
              max={200}
              sx={{
                color: "#000000",
                "& .MuiSlider-thumb": {
                  width: 15,
                  height: 15,
                  backgroundColor: "white",
                  border: "5px solid #000000",
                },
                "& .MuiSlider-track": {
                  height: 2,
                  backgroundColor: "#000000",
                },
                "& .MuiSlider-rail": {
                  height: 2,
                  backgroundColor: "#000000",
                },
              }}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
