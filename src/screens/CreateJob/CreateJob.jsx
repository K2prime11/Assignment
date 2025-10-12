import { Box, Button, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    experience: "",
    salary: "",
    description: "",
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = () => {
    console.log("Job Posted:", formData);
    navigate("/");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fbfbff",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          bgcolor: "white",
          borderRadius: "20px",
          boxShadow: "0px 0px 20px rgba(127, 127, 127, 0.15)",
          p: 5,
        }}
      >
        <Stack spacing={3}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              sx={{
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 700,
                fontSize: "32px",
                color: "#000000",
                mb: 1,
              }}
            >
              Create Job Opening
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 500,
                fontSize: "16px",
                color: "#686868",
              }}
            >
              Fill in the details to post a new job opportunity
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 700,
                fontSize: "16px",
                color: "#222222",
                mb: 1,
              }}
            >
              Job Title *
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g. Full Stack Developer"
              value={formData.jobTitle}
              onChange={handleChange("jobTitle")}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: 500,
                  fontSize: "16px",
                },
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 700,
                fontSize: "16px",
                color: "#222222",
                mb: 1,
              }}
            >
              Company Name *
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g. Tech Solutions Inc."
              value={formData.companyName}
              onChange={handleChange("companyName")}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: 500,
                  fontSize: "16px",
                },
              }}
            />
          </Box>

          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#222222",
                  mb: 1,
                }}
              >
                Location *
              </Typography>
              <Select
                fullWidth
                value={formData.location}
                onChange={handleChange("location")}
                displayEmpty
                sx={{
                  borderRadius: "10px",
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                <MenuItem value="" disabled>
                  Select Location
                </MenuItem>
                <MenuItem value="onsite">Onsite</MenuItem>
                <MenuItem value="remote">Remote</MenuItem>
                <MenuItem value="hybrid">Hybrid</MenuItem>
              </Select>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#222222",
                  mb: 1,
                }}
              >
                Job Type *
              </Typography>
              <Select
                fullWidth
                value={formData.jobType}
                onChange={handleChange("jobType")}
                displayEmpty
                sx={{
                  borderRadius: "10px",
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                <MenuItem value="" disabled>
                  Select Job Type
                </MenuItem>
                <MenuItem value="internship">Internship</MenuItem>
                <MenuItem value="fulltime">Full Time</MenuItem>
                <MenuItem value="parttime">Part Time</MenuItem>
                <MenuItem value="contract">Contract</MenuItem>
              </Select>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#222222",
                  mb: 1,
                }}
              >
                Experience Required *
              </Typography>
              <Select
                fullWidth
                value={formData.experience}
                onChange={handleChange("experience")}
                displayEmpty
                sx={{
                  borderRadius: "10px",
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                <MenuItem value="" disabled>
                  Select Experience
                </MenuItem>
                <MenuItem value="0-1">0-1 yr Exp</MenuItem>
                <MenuItem value="1-3">1-3 yr Exp</MenuItem>
                <MenuItem value="3-5">3-5 yr Exp</MenuItem>
                <MenuItem value="5+">5+ yr Exp</MenuItem>
              </Select>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#222222",
                  mb: 1,
                }}
              >
                Salary (LPA) *
              </Typography>
              <TextField
                fullWidth
                placeholder="e.g. 12"
                value={formData.salary}
                onChange={handleChange("salary")}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    fontFamily: "'Satoshi Variable', Helvetica",
                    fontWeight: 500,
                    fontSize: "16px",
                  },
                }}
              />
            </Box>
          </Stack>

          <Box>
            <Typography
              sx={{
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 700,
                fontSize: "16px",
                color: "#222222",
                mb: 1,
              }}
            >
              Job Description *
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              placeholder="Describe the role, responsibilities, and requirements..."
              value={formData.description}
              onChange={handleChange("description")}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  fontFamily: "'Satoshi Variable', Helvetica",
                  fontWeight: 500,
                  fontSize: "16px",
                },
              }}
            />
          </Box>

          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate("/")}
              sx={{
                py: 1.5,
                borderRadius: "10px",
                borderColor: "#00aaff",
                color: "#00aaff",
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#0099ee",
                  bgcolor: "rgba(0, 170, 255, 0.05)",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{
                py: 1.5,
                borderRadius: "10px",
                background:
                  "linear-gradient(180deg, rgba(161, 40, 255, 1) 0%, rgba(97, 0, 173, 1) 100%)",
                color: "white",
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "none",
                boxShadow: "0px 0px 14px rgba(92, 92, 92, 0.15)",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, rgba(141, 20, 235, 1) 0%, rgba(77, 0, 153, 1) 100%)",
                },
              }}
            >
              Post Job
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
