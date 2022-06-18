import { Box } from "@mui/system";
import { Typography } from "@material-ui/core";
import React from "react";

const TrackMap = () => {
  return (
    <>
      <Box className="container">
        <Box style={{ marginTop: 15, flexWrap: "wrap" }}>
          <Typography style={{ fontWeight: "bold" }}>Track On Map</Typography>
          <Box
            style={{
              maxWidth: "100%",
              width: 1250,
              height: 500,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d24805.56269916946!2d33.395899329127516!3d35.1540919051121!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1653942843214!5m2!1sen!2sin"
              width="1250"
              height="500"
              style={{borderRadius:8}}
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TrackMap;
