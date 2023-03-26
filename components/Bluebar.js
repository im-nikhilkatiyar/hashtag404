import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import hashtag from "../assets/hashtag.jpg";
import "../styles/404.css";
import mf_avatar from "../assets/mf_avatar.jpg";
import computer from "../assets/computer.JPG";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import MessageTwoTone from "@mui/icons-material/MessageTwoTone";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    
// >>>>>>>>>>>>>>>>>>    Blue bar      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


blue_bar:{
    backgroundColor: "#6e07f3",
    height: "650px",
    position: "absolute",
    top: "140%",
    left: "0%",
    right: "0%",
},

// >>>>>>>>>>>>>>>>>>      blue_bar_content        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



blue_bar_content:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  '& h1': {
    color: "white",
    fontSize: "200%",  },
  '& p': {
      color: "white",
      textAlign: "center",
      width: "62%",
      /* font-family:Georgia, 'Times New Roman', Times, serif; */
      fontSize: "21px",
    },
    '@media screen and (max-width: 454px)': {
      // flexDirection: 'column',
      // alignItems: 'start',
      // padding: '0%',
      '& h1':{
        textAlign:"center",
      },
  },
  },   


});


export default function Home() {

    const classes = useStyles();

  return (
// {/* >>>>>>>>>>>>    Blue bar         >>>>>>>>>>>>>>>>>>>>>>> */}

<div className={classes.blue_bar}>
        <div className={classes.blue_bar_content} 
        >
          <h1 >Hi, I’m Matt. Nice to meet you.</h1>
          <p>
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies, consulted for startups,
            and collaborated with talented people to create digital products
            for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops
            one design problem at a time.
          </p>
        </div>
      </div>
  );
}