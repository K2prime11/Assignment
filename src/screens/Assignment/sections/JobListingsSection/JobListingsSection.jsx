import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

// ✅ store salary as an array [min, max]
const jobListings = [
  {
    id: 1,
    title: "Full Stack Developer",
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-77-2.png",
    location: "Chennai",
    jobType: "Full Time",
    salary: [50, 60],
  },
  {
    id: 5,
    title: "Node Js Developer",
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-79-2.png",
    location: "Coimbatore",
    jobType: "Part Time",
    salary: [50, 60],
  },
  {
    id: 8,
    title: "UX/UI Designer",
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-78-1.png",
    location: "Bangalore",
    jobType: "Contract",
    salary: [50, 60],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-77-2.png",
    location: "Coimbatore",
    jobType: "Part Time",
    salary: [60, 80],
  },
  {
    id: 4,
    title: "Node Js Developer",
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-79-1.png",
    location: "Chennai",
    jobType: "Full Time",
    salary: [60, 80],
  },
  {
    id: 7,
    title: "UX/UI Designer",
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-78-1.png",
    location: "Chennai",
    jobType: "Full Time",
    salary: [60, 80],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-77-2.png",
    location: "Bangalore",
    jobType: "Contract",
    salary: [80, 90],
  },
  {
    id: 6,
    title: "Node Js Developer",
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-79-1.png",
    location: "Bangalore",
    jobType: "Contract",
    salary: [80, 90],
  },
];

export const JobListingsSection = ({ filters }) => {
  const {
    searchTerm = "",
    location = "",
    jobType = "",
    salaryRange = [50, 90], 
  } = filters || {};

  const [visibleJobs, setVisibleJobs] = useState(jobListings);

  useEffect(() => {
    const filtered = jobListings.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesLocation = location ? job.location === location : true;
      const matchesJobType = jobType ? job.jobType === jobType : true;

      // ✅ salary comparison
      const matchesSalary =
        job.salary[0] >= salaryRange[0] && job.salary[1] <= salaryRange[1];

      return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
    });

    setVisibleJobs(filtered);
  }, [searchTerm, location, jobType, salaryRange]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: "1850px",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 5,
          px: { xs: 2, sm: 0 },
        }}
      >
        {visibleJobs.map((job) => (
          <Box
            key={job.id}
            sx={{
              bgcolor: "white",
              borderRadius: 3,
              boxShadow: "0px 0px 14px rgba(211, 211, 211, 0.15)",
              width: 370,
              height: 347,
              position: "relative",
              p: 2.5,
            }}
          >
            <Box
              sx={{
                width: 75,
                height: 70,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "13px",
                background:
                  "linear-gradient(180deg, rgba(254,254,253,1) 0%, rgba(241,241,241,1) 100%)",
                boxShadow: "0px 0px 10px rgba(148, 148, 148, 0.25)",
                mb: 1.5,
              }}
            >
              <img
                src={job.logo}
                alt={job.title}
                style={{ width: 45, height: 45, objectFit: "contain" }}
              />
            </Box>

            <Chip
              label="24h Ago"
              sx={{
                position: "absolute",
                top: 18,
                right: 20,
                bgcolor: "#afd8ff",
                color: "black",
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 500,
                fontSize: 14,
                height: 30,
                borderRadius: "10px",
              }}
            />

            <Typography
              sx={{
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 700,
                fontSize: 20,
                color: "black",
                mb: 2,
              }}
            >
              {job.title}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Box
                  component="img"
                  src="https://c.animaapp.com/mglzl09gSzk8BX/img/frame-48102935.svg"
                  alt="Experience"
                  sx={{ width: 18, height: 18 }}
                />
                <Typography sx={{ fontSize: 15, color: "#5a5a5a" }}>
                  1–3 yr Exp
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Box
                  component="img"
                  src="https://c.animaapp.com/mglzl09gSzk8BX/img/frame-48102937.svg"
                  alt="Location"
                  sx={{ width: 18, height: 18 }}
                />
                <Typography sx={{ fontSize: 15, color: "#5a5a5a" }}>
                  {job.location}
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Box
                  component="img"
                  src="https://c.animaapp.com/mglzl09gSzk8BX/img/frame-48102939.svg"
                  alt="Salary"
                  sx={{ width: 18, height: 18 }}
                />
                <Typography sx={{ fontSize: 14, color: "#5a5a5a" }}>
                  ₹{job.salary[0]}k - ₹{job.salary[1]}k
                </Typography>
              </Stack>
            </Stack>

            <Box
              component="ul"
              sx={{
                fontFamily: "'Satoshi Variable', Helvetica",
                fontWeight: 500,
                fontSize: 15,
                color: "#555555",
                pl: 2,
                mb: 3,
                lineHeight: 1.5,
                listStyleType: "disc",
              }}
            >
              <li>
                A user-friendly interface lets you browse stunning photos and
                videos
              </li>
              <li>
                Filter destinations based on interests and travel style, and
                create personalized
              </li>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#00aaff",
                color: "white",
                fontWeight: 700,
                fontSize: 16,
                textTransform: "none",
                borderRadius: "10px",
                py: 0.8,
                transform: "translateY(-11px)",
                "&:hover": { bgcolor: "#0099ee" },
              }}
            >
              Apply Now
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
