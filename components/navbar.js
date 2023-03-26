import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hashtag from "../assets/hashtag.jpg";
import "../styles/404.css";
import mf_avatar from "../assets/mf_avatar.jpg";
import computer from "../assets/computer.JPG";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import MessageTwoTone from "@mui/icons-material/MessageTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
// import CgDetailsMore from re
import {CgDetailsMore} from "react-icons/cg";

const useStyles = makeStyles({

  hashtag_navbar: {
    maxWidth: "1440px",
    margin: "auto",
    display: "flex",
    justifyContent: "flex-start",
    padding:"20px",

    // "@media screen and (max-width: 1600px)": {
    //   // flexDirection: 'column',
    //   // alignItems: 'start',
    //   // padding: '0%',
    //   marginRight: "5%",
    // },
    // "@media screen and (max-width: 1400px)": {
    //   // flexDirection: 'column',
    //   // alignItems: 'start',
    //   // padding: '0%',
    //   marginRight: "10%",
    // },
    // "@media screen and (max-width: 1250px)": {
    //   // flexDirection: 'column',
    //   // alignItems: 'start',
    //   // padding: '0%',
    //   marginRight: "15%",
    // },
    "@media screen and (max-width: 1080px)": {
      // flexDirection: 'column',
      // alignItems: 'start',
      // padding: '0%',
      display: "flex",
      // marginRight:"20%",

      "& #icon": {
        display: "none",
        "@media screen and (max-width: 680px)": {
          display: "block",
        },
        "& .MuiSvgIcon-root": {
          width: "50px",
        },
      },
    },

    "& > div:nth-child(1)": {
      // left:"0px",
      width: "70px",
      // height: "0px",
      marginLeft: "5%",
    },
    "& a": {
      textDecoration: "none",
    },
    // >>>>>   nav list    >>>>>>>>

    "& > div:nth-child(2)": {
      // left:"0px",
      width: "70px",
      // height: "0px",
      marginRight: "65%",
    },
  },
  space: {
    // maxWidth: "100%",
    // maxHeight: "100%",
    // position: "absolute",
    // top: "100px",
    // left: "25rem",
  },
  Dot_dot: {
    display:"none",
    "@media screen and (max-width: 1080px)": {
      textAlign:"center",
      display:"block",
      marginLeft:"90%",
      // margin:"-5%",
      position:"absolute",
      top:"3%",
      
    },
    '& #icon': {
      display: 'none',
      '@media screen and (max-width: 680px)': {
          display: 'block',
      },
      '& .MuiSvgIcon-root': {
          width: '50px'
      }
  }
  },

  div3: {
    maxWidth: "1440px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    "@media screen and (max-width: 1080px)": {
      display:"none",
      // position:"relative",
      // right:"250px",
      // top:"40px",
      // placeItems: "center",
    },

    "& > div:nth-child(1)": {
      marginRight: "auto",
      maxWidth: "1440px",
      width: "90px",
      height: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      margin: "10px",
      backgroundColor: "white",
      fontSize: "2ch",
      textDecoration: "none",
      listStyle: "none",
      padding: "0px 15px",
      "& a": {
        color: "black",
      },
      "& a:hover": {
        color: "#6E07F3", // set text color to #6E07F3 on hover
      },
      
    },

    // >>>>>>>> nav list1     >>>>>>>>>>>>

    "& > div:nth-child(2)": {
      marginRight: "auto",
      maxWidth: "1440px",
      backgroundColor: "white",
      border: "2px solid #6E07F3",
      borderRadius: "30px",
      width: "90px",
      height: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "15px",
      // position: "absolute",
      // transform: "translateY(0%)",
      // right: "7%",
      textDecoration: "none", // set text decoration to none
      "& a": {
        color: "#6e07f3",
      },

      "&:hover": {
        backgroundColor: "#6e07f3",
        "& a": {
          color: "white",
        },
      },
    },
  },

  // nav_list:{
  //           maxWidth:"1440px",
  //           display:"flex",
  //           margin:"auto",
  //           "& a": {
  //             textDecoration: "none",
  //           },
  //   },
});

function Div3() {
  const classes = 
  // useStyles();
  {
    div3: "my-div-3",
    nav_list: "my-nav-list",
    nav_item: "my-nav-item",
    nav_list1: "my-nav-list-1",
    nav_item1: "my-nav-item-1"
  }
  ;

  return (
    <div className={classes.div3}>
      <div className={classes.nav_list}>
        <div className={classes.nav_item}>
          <Link legacyBehavior href="/Mentorship">
            <a> Mentorship</a>
          </Link>
        </div>
      </div>
      <div className={classes.nav_list1}>
        <div className={classes.nav_item1}>
          <Link legacyBehavior href="/Hello">
            <a> Say Hello</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const classes = useStyles();

  const [showdiv3, setShowdiv3] = useState(
    false
  //   typeof window !== 'undefined' ? window.innerWidth >= 1080 : false
  // );
  
  // useEffect(() => {
  //   function handleResize() {
  //     setShowdiv3(window.innerWidth >= 1080);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []
  
  );
  const [toggle, setToggle] = useState(false);
  // const handleClick = () => {
  //   setShowdiv3(!showdiv3); // toggle the value of showdiv3
  // };
  const handleClick=()=> {
    setToggle()
  };

  // useEffect(() => {
  //   if (showdiv3) {
  //     // myFunction();
  //   }
  // }, [showdiv3]);

  return (
    <div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta
          name="description"
          content="Meta description for the Home page THIS IS AS HOME PAGE"
        />
        <meta name="keywords" content="test1, test2, ssr, nextjs" />
      </Head>

      {/* >>>>>>>>>>>>   Navbar    >>>>>>>>>>>>>>>> */}

      <nav>
        <div className={classes.hash_navbar}>
          <div className={classes.hashtag_navbar}>
            <div className={classes.img404}>
              <Link href="/">
                <Image src={hashtag} width={80} height={40} />
              </Link>
            </div>
            <div></div>
            {/* {showdiv3 ? ( */}
            <div className={classes.space}>
 <div className={classes.div3}>
              <div className={classes.nav_list}>
                <div className={classes.nav_item}>
                  <Link legacyBehavior href="/Mentorship">
                    <a> Mentorship</a>
                  </Link>
                </div>
              </div>
              <div className={classes.nav_list1}>
                <div className={classes.nav_item1}>
                  <Link legacyBehavior href="/Hello">
                    <a> Say Hello</a>
                  </Link>
                </div>
              </div>
</div>
            </div>
            {/* ) : (
              <button style={{
                width:"fit-content",
                height:"20px",
                alignSelf:"center",
              }} onClick={() => setShowdiv3(true)}>|||</button>
            )} */}
          </div>
        </div>
      </nav>
{/* >>>>>>>>>>>>>   Dot_dot   >>>>>>>>>>> */}
     
    
      <div className={classes.Dot_dot}>
      <button onClick={handleClick}><CgDetailsMore style={{
        width:"11px",
        height:"13px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}/></button>
            {/* {showdiv3 && <Div3 />} */}
      </div>
     
{/* >>>>>>>>>>>>     Images     >>>>>>>>>>>>>>>>>>> */}
    </div>
  );
}

export default Navbar;
