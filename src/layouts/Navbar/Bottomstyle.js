import React from "react";
import Head from "next/head";
import Link from "next/link";
import MessageIcon from '@mui/icons-material/Message';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  //  Interested 

  interest: {
    backgroundColor: "white",
    textAlign: "center",
    height: "30%",
    paddingTop: "122px",
    paddingBottom: "122px",
    textAlign: "-webkit-center",

    '& p': {
      fontSize: "20px",
      margin: "40px",
    },
    '& .MuiSvgIcon-root': {
      width: '60px',
      textAlign: "center",
      alignItems: "center",
      height: "25px",
      margin: "-9px",
    }
  },
  start_btn: {
    color: "#6e07f3",
    border: "2px solid #6e07f3",
    borderRadius: "35px",
    maxWidth: "250px",
    height: "40px",
    padding: "10px",
    "&:hover": {
      backgroundColor: "#6e07f3",
      color: "white",
    },
  },
});

function Bottomstyle() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className={classes.interest}>
        <h2>Interested in collaborating with me?</h2>
        <p>I’m always open to discussing product design work or partnership opportunities.</p>
        <div className={classes.start_btn}>
          <div id='icon'><Link href="/start">
            <span>
              <MessageIcon />
              Start a conversation
            </span>
          </Link>
          </div>
        </div>
      </div></div>
  );
}

export default Bottomstyle;
