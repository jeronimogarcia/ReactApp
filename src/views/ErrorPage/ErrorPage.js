import * as React from "react";
import Stack from "@mui/material/Stack";
import pageNotFound from "../../images/pageNotFound.jpg";
import "../../App.css";

const ErrorPage = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <div className="pageNotFound">
        <img src={pageNotFound} alt="logo" width="600px" />
      </div>
    </Stack>
  );
};

export default ErrorPage;
