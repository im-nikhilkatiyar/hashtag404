import React from "react";
import Head from "next/head";
import Link from "next/link";
// import BiMessageDetail from '@mui/icons-material/Message';
import { makeStyles } from "@mui/styles";
import { BiMessageDetail } from "react-icons/bi";

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
    '& Svg': {
      // width: '160px',
      // textAlign: "center",
      // alignItems: "center",
      // height: "2px",
      // margin: "-9px",
      margin: "-4px 5px",
    }
  },
  start_btn: {
    color: "#6e07f3",
    border: "2px solid #6e07f3",
    borderRadius: "35px",
    maxWidth: "280px",
    height: "55px",
    padding: "16px",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#6e07f3",
      color: "white",
    },
  },
});

function Bottomstyle() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.interest}>
        <h2>Interested in collaborating with me?</h2>
        <p>I’m always open to discussing product design work or partnership opportunities.</p>
        <div className={classes.start_btn}>
          <div><BiMessageDetail />Start a conversation</div>
          {/* <div id='icon'>
            <Link href="/start">
              <BiMessageDetail />
            </Link>
          </div> */}
        </div>
      </div></div>
  );
}

export default Bottomstyle;
