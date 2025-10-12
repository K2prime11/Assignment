import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";

const jobsData = [
  {
    id: 1,
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-77-2.png",
    logoStyle: { width: "65.89px", height: "65.89px", objectFit: "cover" },
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 2,
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-79.png",
    logoStyle: { width: "45.07px", height: "45.07px" },
    logoWrapper: {
      backgroundColor: "white",
      borderRadius: "102.5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "65.89px",
      height: "65.89px",
    },
    title: "Node Js Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 3,
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-78.png",
    logoStyle: { width: "51.41px", height: "51.41px" },
    logoWrapper: {
      backgroundColor: "#f7881f",
      borderRadius: "93.33px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "60px",
      height: "60px",
    },
    title: "UX/UI Designer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 4,
    logo: "https://c.animaapp.com/mglzl09gSzk8BX/img/image-77-2.png",
    logoStyle: { width: "65.89px", height: "65.89px", objectFit: "cover" },
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
];

export const JobFilterSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          overflowX: "auto",
          maxWidth: "1328px",
        }}
      >
      {jobsData.map((job, index) => (
        <Box
          key={job.id}
          className="translate-y-[-1rem] animate-fade-in opacity-0"
          style={{ "--animation-delay": `${index * 200}ms` }}
          sx={{
            minWidth: "316px",
            height: "360px",
            bgcolor: "white",
            borderRadius: "12px",
            boxShadow: "0px 0px 14px rgba(211, 211, 211, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "32px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "83px",
              height: "82px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "13.18px",
              border: "1px solid white",
              boxShadow: "0px 0px 10.25px rgba(148, 148, 148, 0.25)",
              background:
                "linear-gradient(180deg, rgba(254, 254, 253, 1) 0%, rgba(241, 241, 241, 1) 100%)",
            }}
          >
            {job.logoWrapper ? (
              <Box sx={job.logoWrapper}>
                <img src={job.logo} alt="Company Logo" style={job.logoStyle} />
              </Box>
            ) : (
              <img src={job.logo} alt="Company Logo" style={job.logoStyle} />
            )}
          </Box>

          <Chip
            label={job.postedTime}
            sx={{
              position: "absolute",
              top: "16px",
              right: "16px",
              bgcolor: "#afd8ff",
              color: "black",
              fontWeight: 500,
              fontSize: "14px",
              height: "auto",
              py: "7px",
              px: "10px",
              borderRadius: "10px",
              "& .MuiChip-label": {
                px: 0,
              },
            }}
          />

          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "117px",
              left: "16px",
              fontWeight: 700,
              fontSize: "20px",
              color: "black",
            }}
          >
            {job.title}
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              position: "absolute",
              top: "160px",
              left: "16px",
            }}
          >
            <Stack direction="row" spacing={0.5} alignItems="center">
              <WorkOutlineIcon sx={{ fontSize: "20px", color: "#5a5a5a" }} />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#5a5a5a",
                }}
              >
                {job.experience}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <LocationOnOutlinedIcon
                sx={{ fontSize: "20px", color: "#5a5a5a" }}
              />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#5a5a5a",
                }}
              >
                {job.location}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <AttachMoneyOutlinedIcon
                sx={{ fontSize: "20px", color: "#5a5a5a" }}
              />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#5a5a5a",
                }}
              >
                {job.salary}
              </Typography>
            </Stack>
          </Stack>

          <Typography
            sx={{
              position: "absolute",
              top: "202px",
              left: "9px",
              width: "300px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#555555",
              whiteSpace: "pre-line",
            }}
          >
            {job.description}
          </Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "284px",
              bgcolor: "#00aaff",
              color: "white",
              fontWeight: 700,
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "10px",
              py: "12px",
              boxShadow: "0px 0px 14px rgba(92, 92, 92, 0.15)",
              "&:hover": {
                bgcolor: "#0099e6",
              },
            }}
          >
            Apply Now
          </Button>
        </Box>
      ))}
      </Stack>
    </Box>
  );
};
