import React from "react";
import moment from "moment";
import {
  Avatar,
  Box,
  Card,
  Container,
  Typography,
  Link,
  Chip,
  //   Divider,
} from "@mui/material";

const Dashboard = ({
  avatar,
  name,
  html_url,
  owner,
  description,
  starCount,
  open_issues_count,
  created_at,
}) => {
  return (
    <Card
      sx={{ p: 2, display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Avatar src={avatar} sx={{ width: 200, height: 200 }} />
      <Box sx={{ ml: 2, flex: 1, p: 4, gap: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          <Link href={html_url} target="_blank" rel="noopener noreferrer">
            {name}
          </Link>
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Chip
          label={` Stars: ${starCount} `}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Chip
          label={` Issues: ${open_issues_count} `}
          variant="outlined"
          sx={{ mb: 2, ml: 1 }}
        />
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Submitted {moment(created_at).fromNow()} By {owner}
        </Typography>
      </Box>
    </Card>
  );
};

export default Dashboard;
