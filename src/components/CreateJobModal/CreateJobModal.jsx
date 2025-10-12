import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import {
  Box,
  Button,
  Dialog,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";

export const CreateJobModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    applicationDeadline: "",
    description: "",
  });

  const handleChange = (field) => (event) =>
    setFormData({ ...formData, [field]: event.target.value });

    const handlePublish = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, status: "published" }),
        });
    
        const data = await response.json();
        console.log("Job Published:", data);
        onClose();
      } catch (error) {
        console.error("Error publishing job:", error);
      }
    };
    
    const handleSaveDraft = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, status: "draft" }),
        });
    
        const data = await response.json();
        console.log("Draft Saved:", data);
        onClose();
      } catch (error) {
        console.error("Error saving draft:", error);
      }
    };
    
    

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "20px",
          maxWidth: "860px",
          p: 5,
          boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Stack spacing={3}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            sx={{
              fontFamily: "'Satoshi Variable', Helvetica",
              fontWeight: 700,
              fontSize: "24px",
              color: "#000000",
            }}
          >
            Create Job Opening
          </Typography>
        </Box>

     
        <Stack direction="row" spacing={3}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>Job Title</Typography>
            <TextField
              fullWidth
              placeholder="Full Stack Developer"
              value={formData.jobTitle}
              onChange={handleChange("jobTitle")}
              sx={inputStyle}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>Company Name</Typography>
            <TextField
              fullWidth
              placeholder="Amazon, Microsoft, Swiggy"
              value={formData.companyName}
              onChange={handleChange("companyName")}
              sx={inputStyle}
            />
          </Box>
        </Stack>

     
        <Stack direction="row" spacing={3}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>Location</Typography>
            <Select
              fullWidth
              value={formData.location}
              onChange={handleChange("location")}
              displayEmpty
              sx={selectStyle}
            >
              <MenuItem value="" disabled>
                Choose Preferred Location
              </MenuItem>
              <MenuItem value="onsite">Chennai</MenuItem>
              <MenuItem value="remote">Coimbatore</MenuItem>
              <MenuItem value="hybrid">Bangalore</MenuItem>
            </Select>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>Job Type</Typography>
            <Select
              fullWidth
              value={formData.jobType}
              onChange={handleChange("jobType")}
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <span style={{ color: "#aaa" }}>Fulltime</span>;
                }
                return selected.charAt(0).toUpperCase() + selected.slice(1);
              }}
              sx={selectStyle}
            >
              <MenuItem value="" disabled>
               
              </MenuItem>
              <MenuItem value="internship">Internship</MenuItem>
              <MenuItem value="fulltime">Full Time</MenuItem>
              <MenuItem value="parttime">Part Time</MenuItem>
              <MenuItem value="contract">Contract</MenuItem>
            </Select>
          </Box>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>Salary Range</Typography>
            <Stack direction="row" spacing={1.5}>
              <TextField
                fullWidth
                placeholder="0"
                value={formData.salaryMin}
                onChange={handleChange("salaryMin")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    fontFamily: "'Satoshi Variable', Helvetica",
                    fontSize: "15px",
                    bgcolor: "#f9f9f9",
                  },
                }}
              />
              <TextField
                fullWidth
                placeholder=" 12,00,000"
                value={formData.salaryMax}
                onChange={handleChange("salaryMax")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    fontFamily: "'Satoshi Variable', Helvetica",
                    fontSize: "15px",
                    bgcolor: "#f9f9f9",
                  },
                }}
              />
            </Stack>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>Application Deadline</Typography>
            <TextField
              fullWidth
              type="date"
              value={formData.applicationDeadline}
              onChange={handleChange("applicationDeadline")}
              sx={{
                ...inputStyle,
                "& input::-webkit-datetime-edit": {
                  color: formData.applicationDeadline
                    ? "inherit"
                    : "transparent",
                },
                "& input:focus::-webkit-datetime-edit": {
                  color: "inherit",
                },
              }}
            />
          </Box>
        </Stack>

        <Box>
          <Typography sx={labelStyle}>Job Description</Typography>
          <TextField
            fullWidth
            multiline
            rows={5}
            placeholder="Please share a description to let the candidate know more about the job role"
            value={formData.description}
            onChange={handleChange("description")}
            sx={inputStyle}
          />
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={35}
          sx={{ mt: 2 }}
        >
          <Button
            variant="outlined"
            onClick={handleSaveDraft}
            sx={{
              width: "250px",
              height: "60px",
              borderRadius: "12px",
              borderColor: "#000000ff",
              borderWidth: "2px",
              color: "#000000",
              fontFamily: "'Satoshi Variable', Helvetica",
              fontWeight: 700,
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                borderColor: "#b0b0b0",
                bgcolor: "#f5f5f5",
              },
            }}
          >
            Save Draft{" "}
            <FontAwesomeIcon
              icon={faAnglesDown}
              style={{ fontSize: "15px", marginLeft: "5px" }}
            />
          </Button>

          <Button
            variant="contained"
            onClick={handlePublish}
            sx={{
              width: "250px",
              height: "60px",
              borderRadius: "12px",
              bgcolor: "#00B8FF",
              color: "#ffffff",
              fontFamily: "'Satoshi Variable', Helvetica",
              fontWeight: 700,
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#00A3E6",
              },
            }}
          >
            Publish{" "}
            <FontAwesomeIcon
              icon={faAnglesRight}
              style={{ fontSize: "15px", marginLeft: "6px" }}
            />
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};


const labelStyle = {
  fontFamily: "'Satoshi Variable', Helvetica",
  fontWeight: 600,
  fontSize: "15px",
  color: "#000000",
  mb: 1,
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontFamily: "'Satoshi Variable', Helvetica",
    fontSize: "15px",
    bgcolor: "#f9f9f9",
  },
};

const selectStyle = {
  borderRadius: "10px",
  fontFamily: "'Satoshi Variable', Helvetica",
  fontSize: "15px",
  bgcolor: "#f9f9f9",
};
