import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import ReusebaleCard from "../Assets/Component/ReusebaleCard";
import { Data } from "../Assets/Data/Data";
import TrackMap from "../Components/TrackMap";
const Dashboard = () => {
  return (
    <>
      <Box className="container">
        <Box style={{ marginTop: 15 }}>
          <Typography style={{ fontWeight: "bold" }}>Dashboard</Typography>
          <Box
            style={{
              marginTop: 18,
              display: "flex",
              marginLeft: -5,
              flexWrap: "wrap",
            }}
          >
            {Data.map((elem) => {
              return (
                <ReusebaleCard
                  id={elem.id}
                  title={elem.title}
                  percentage={elem.percentage}
                  count={elem.count}
                  icon={elem.icon}
                  color={elem.color}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box style={{marginTop: 30}}>
        <TrackMap />
      </Box>
    </>
  );
};

export default Dashboard;
