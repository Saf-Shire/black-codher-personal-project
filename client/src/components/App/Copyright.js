import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright = () => {
  function Copyright() {
    return (
      <div className="copyright">
        <Typography variant="body2" color="inherit" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://techiton.herokuapp.com/">
            TechitOn
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    );
  }

  return <Copyright />;
};
export default Copyright;
