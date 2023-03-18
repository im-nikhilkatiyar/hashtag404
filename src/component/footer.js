import React from "react";
import Logo1 from '../../assets/Logo.jpg';
// import  "./Footer.css";
// import twitter1 from "./twitter.png";
import {FaGlobe} from 'react-icons/fa';
import { TfiLinkedin} from "react-icons/tfi";
import {TfiTwitter} from "react-icons/tfi";
import {TfiDribbble} from "react-icons/tfi";
import {TbBrandProducthunt} from "react-icons/tb";
import {SlEnvolope} from  "react-icons/sl";
import {BsFillBadgeHdFill} from "react-icons/bs";
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import bulma from '../../assets/made-with-bulma.png';
import Image from 'next/image';
import {TbHandRock} from "react-icons/tb";

import { IconButton, Typography,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FaBeer } from "react-icons/fa";

// import { MdDribbble } from 'react-icons/md';
// import { Link } from "react-router-dom";
import Link from 'next/link'
// import pas1 from "./pascal1.png";
// import pas2 from "./pascal2.png";
// import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#6E07F3",
        height: "650px",
        paddingLeft: "550px",
      },
      logo: {
        height: "80px",
        width: "70px",
        marginTop: "20px",
        marginLeft: "350px",
        fontSize: "4em",
      },
      title: {
        height: "150px",
        paddingLeft: "180px",
        paddingTop: "12px",
        paddingBottom: "12px",
        paddingRight: "12px",
        fontWeight: "normal",
        fontStyle: "normal",
        color: "antiquewhite",
        justifyContent: "center",
        opacity: "0.8",
      },
      socialContainer: {
        display: "flex",
        backgroundColor: "#6E07F3",
        height: "100px",
        paddingLeft: "160px",
      },
      socialLink: {
        marginTop: "20px",
        height: "60px",
        borderRadius: "80%",
        paddingLeft: "10px",
        paddingRight: "10px",
        outline: "1px solid antiquewhite",
        transition: "backgroundColor 1s",
        backgroundColor: "#6E07F3",
        "&:hover": {
          backgroundColor: "white",
        },
      },
      socialIcon: {
        height: "70px",
        width: "50px",
        marginTop: "15px",
        borderRadius: "60%",
        transition: "color 0.5s",
        color: "white",
      },

    }
);




function Footer (){

    const classes = useStyles();
    return(
        <div>
            
            
            
            <footer>
                {/* <div style={{backgroundColor:'#6E07F3',height: '650px', paddingLeft: '550px'}}>
                {/* <div className={classes.root}> */}
                    {/* <Image src={Logo1} alt="Logo-hashtag" style ={{height:'80px', width: '100px', marginTop: '20px', marginLeft: '350px',fontSize: '4em'}} />
                    <div Style={{height:'150px', paddingLeft: '180px',paddingTop: '12px', paddingBottom: '12px', paddingRight: '12px'}}>
                        <h1 Style={{fontWeight: 'normal',fontStyle: 'normal',color: 'antiquewhite',justifyContent: 'center',opacity: '0.8'}}>Living, learning, & leveling up <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; one day at a time.</h1>
                    </div>
                    <br/>
                    <div Style={{display: 'flex', backgroundColor: '#6E07F3',height: '100px', paddingLeft: '160px'}}>  */} 

<div className={classes.root}>
          <Image
            src={Logo1}
            alt="Logo-hashtag"
            className={classes.logo}
          />
          <div className={classes.header}>
            <Typography variant="h2">
              Living, learning, & leveling up <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; one day at a time.
              </Typography>
          </div>
          <br />
          <div className={classes.footerLinks}>
            {/* <Link
              className={classes.footerLinkButton}
              href="https://twitter.com/"
              target="_blank"
            > */}

          <Button variant="contained" color="primary" startIcon={<FaBeer className={classes.socialLink} />} href="https://twitter.com/" target="_blank"></Button>
              <span>
                <TfiTwitter className={classes.footerLinkIcon} />
              </span>
            
            &nbsp; &nbsp;
                        {/* <a  */}
                        {/* // Style={{ marginTop: '20px', height: '60px', borderRadius: '60', paddingLeft: '10px', paddingRight: '10px', */}
                        {/* // outline: '1px solid antiquewhite', transition: 'backgroundColor 1s', 
                        // backgroundColor: '#6E07F3'}} hover={{backgroundColor:'white'}}
                        // className={classes.footerLinkButton}
                        // href="https://twitter.com/" target="_blank" >
                        // <span >
                        
                        // <TfiTwitter className={classes.footerLinkIcon} /> 
                        //     </span></a> &nbsp; &nbsp; */}

                        {/* <a className="anchor_button_style" href="https://twitter.com/" target="_blank" >
                        <span className="span_image_style"><TfiDribbble className="twitter_style"/></span></a>&nbsp; &nbsp; */}
                        {/* <IconButton */}
{/* //   className="anchor_button_style"
//   href="https://twitter.com/"
//   target="_blank"
//   style={{ */}
{/* //     marginTop: "20px",
//     height: "60px",
//     borderRadius: "60",
//     paddingLeft: "10px",
//     paddingRight: "10px",
//     outline: "1px solid antiquewhite",
//     transition: "backgroundColor 1s",
//     backgroundColor: "#6E07F3"
//   }}
// >
//   <MdDribbble */}
{/* //     style={{ */}
{/* //       height: "30px",
//       width: "50px",
//       marginTop: "15px",
//       borderRadius: "60%",
//       transition: "color 0.5s",
//       color: "white"
//     }}
//     className="twitter_style"
//   />
// </IconButton> */}
                        
                        
                        <a className="anchor_button_style" href="https://twitter.com/" target="_blank" >
                        <span className="span_image_style"><TfiLinkedin className="twitter_style"/></span></a>&nbsp; &nbsp;
                         <a className="anchor_button_style" href="https://twitter.com/" target="_blank" >
                        <span className="span_image_style"><BsFillBadgeHdFill className="twitter_style"/></span></a> &nbsp; &nbsp;
                        <a className="anchor_button_style" href="https://twitter.com/" target="_blank" >
                        <span className="span_image_style"><TbBrandProducthunt className="twitter_style"/></span></a> &nbsp; &nbsp;
                        <a className="anchor_button_style" href="https://twitter.com/" target="_blank" >
                        <span className="span_image_style"><SlEnvolope className="twitter_style"/></span></a> &nbsp; &nbsp;
                    </div>
                    <br/>
                    <br/>

                    <div className="copyright">
                        Handcrafted by me
                        <AiOutlineCopyrightCircle  className="copyright_style"/>
                        twentytwentythree
                    </div>
                    <br/>
                  
                    <div className="bulma_container">
                    <a href="https://bulma.io/" >
                        <img src={bulma}  className="bulma_style"alt="made with bulma" />
                    </a>
                    </div>
                    
                </div>
            </footer>
        </div>
    )
}
export default Footer; 