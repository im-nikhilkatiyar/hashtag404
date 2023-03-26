import React from "react";
import Logo1 from '../assets/Logo.jpg';
import bulma from '../assets/made-with-bulma.png';
import {Typography,Button} from "@material-ui/core";
import Image from 'next/image';
import { makeStyles } from "@material-ui/core";
import {TfiTwitterAlt} from "react-icons/tfi";
import {TfiDribbble} from "react-icons/tfi";
import { TfiLinkedin} from "react-icons/tfi";
import {TbBrandProducthunt} from "react-icons/tb";
import {SlEnvolope} from  "react-icons/sl";
import {BsFillBadgeHdFill} from "react-icons/bs";
import {AiOutlineCopyrightCircle} from "react-icons/ai";

const useStyles = makeStyles((theme) =>({
  footerContainer:{
    maxWidth:'1895px',
    width:'100%',
    height:'595px',
    padding:'64px 24px',
    backgroundColor:'#6E07F3',
    textAlign: 'center !important',
    '@media screen and (max-width:1504px)':{
    width:'auto',
    },
    '@media screen and (max-width:615px)':{
      height:'auto',  
    },
    '@media screen and (max-width:414px)':{
      padding: '32px 16px',
    },
  },

  container:{
    backgroundColor:'#6E07F3',
    height: '460px',  
    marginLeft:'68px',
    marginRight:'68px',
    maxWidth:'1700px', 
    width:'100%',
    position: 'relative',  
    '@media screen and (max-width:1504px)':{
    width:'auto',
    }, 
    '@media screen and (max-width:615px)':{
    height:'auto',
    }, 
    '@media screen and (max-width:414px)':{
      padding: '0px 16px',
      height:'auto',
    },
    '@media screen and (max-width: 375px)':{
      height:'auto',
      marginLeft:'16px',
      marginRight:'16px',
    },
  }, 

  logo:{
    height:'72px',
    width: '90px', 
    marginTop: '20px', 
    fontSize: '4em',
    '@media screen and (max-width:615px)':{
    marginTop:'15px',
    },
    '@media screen and (max-width: 414px)':{
      height:'36px',
      width:'45px',
      marginTop:'8px',
      fontSize: '2em',
    },
  },
  
  headingContainer:{
    height:'146px', 
    margin:'-12px -12px 12px',
    maxWidth:'1768px',
    width:'100%',
    justifyContent: 'center',
    display:'flex',
    '@media screen and (max-width:1504px)':{
    width:'auto',
    },
    '@media screen and (max-width:724px)':{
    width:'auto',
    display:'inline-block',
    height:'auto',},
    '@media screen and (max-width:414px)':{
      flexDirection: 'column',
      height: 'auto',
      margin: '0px',
    },
    '@media screen and (max-width: 375px)':{
      height:'auto',
      margin:'0px',
    },
  },

  headingPart:{
    width:'490px',
    height:'146px',
    padding:'12px', 
    '@media screen and (max-width:724px)':{
    width:'auto',
    },
    '@media screen and (max-width:526px)':{
    width:'500',
    },
    '@media screen and (max-width:414px)':{
      width: '100%',
      padding: '0px',
    },  
  },
  heading: {    
    fontSize:'25.6px', 
    fontFamily: ' "eurostile", sans-serif',
    color: 'antiquewhite', 
    opacity: '0.9',
    width:'435px',
    height:'57px',
    padding:'32px 56px',
    textAlign: 'center !important',
    '@media screen and (max-width:724px)':{
    width:'auto',        },
    '@media screen and (max-width:582px)':{
    fontSize:'20.6px',
    width:'auto',
    padding:'32px 0px',
    },
    '@media screen and (max-width:414px)':{
      width: '100%',
      padding: '18px 0px',
      fontSize: '20px',
      lineHeight: '1.3em',
    },
    '@media screen and (max-width: 375px)':{
      fontSize:'20px',
      padding:'18px 0px',
    },     
  },

  socialContainer:{
    backgroundColor: '#6E07F3',
    height: '67px', 
    width:'1700px',
    marginBottom: '56px',
    '@media screen and (max-width:1504px)':{
    width:'auto',
    },
    '@media screen and (max-width:724px)':{
    width:'auto',
    display:'inline-block',  
    height:'76px',
    },
    '@media screen and (max-width:414px)':{
      height: 'auto',
      marginBottom: '30px',
      flexWrap: 'wrap',
    },
    '@media screen and (max-width: 375px)':{
      height: 'auto',
      marginBottom: '24px',
    },
  },
  
  roundButton : {    
    margin: " 0px 13px",
    height: "55px",
    width: "55px",
    borderRadius: "100%",
    paddingLeft: "15px",
    paddingRight: "8px",
    outline: "2px solid antiquewhite",
    backgroundColor: "#6E07F3",
    "&:hover": {
    backgroundColor: "white",
    },
    '@media screen and (max-width:724px)':{
    margin:'2px 3.2px',
    minWidth:'15px',
    width:'50px',
    height:'50px',
    padding:'14.4px 12.8px',
    display:'inline-block',
    },
    '@media screen and (max-width:414px)':{
      margin:'2px 1.6px',
      minWidth:'15px',
      width:'40px',
      height:'40px',
      padding:'10.4px 9.6px',
    },
    '@media screen and (max-width: 375px)':{
      margin:'2px 1.6px',
      minWidth:'15px',
      width:'30px',
      height:'30px',
      padding:'8.4px 7.2px',
    },
  }, 

    socialIcon : {
    height: '30px', 
    width: '50px', 
    borderRadius: '70%',
    color: 'white',
    "&:hover": {
    color: "#6E07F3",
    },
    '@media screen and (max-width:724px)':{
    width:'35px',
    height:'20px',
    },
    '@media screen and (max-width:414px)':{
      width:'25px',
      height:'15px',
    },
    '@media screen and (max-width: 375px)': {
      width: '20px',
      height: '12px',
    },
  },

    copyrightContainer:{
    fontSize:'23px',
    color: 'antiquewhite',
    opacity: '0.9',
    fontWeight: '500',
    letterSpacing: '1.5px',
    width:'1700px',
    height:'27px',
    '@media screen and (max-width:1504px)':{
    width:'auto',
    },
    '@media screen and (max-width:560px)':{
    fontSize:'18px',
    },
    '@media screen and (max-width:414px)':{
      fontSize:'14px',
      height:'20px',
    },
    '@media screen and (max-width: 375px)': {
      fontSize: '12px',
      height: '15px',
    },
  },

    bulmaContainer :{
    padding:'11px',
    width:'1700px',
    height:'37px',
    '@media screen and (max-width:1504px)':{
    width:'auto',
    },
    '@media screen and (max-width:414px)':{
      height:'30px',
      padding:'8px',
    },
    '@media screen and (max-width: 375px)': {
      height: '25px',
      padding: '6px',
    },
  },
  }
  ));

function Footer (){
  const classes = useStyles();
  return(
      <footer className={classes.footerContainer}>
        <div className={classes.container}>
          <Image src={Logo1} alt="Logo-hashtag" className={classes.logo}/>
        <div className={classes.headingContainer}>
        <div className={classes.headingPart}>
          <Typography variant="h1"className={classes.heading}>
            Living, learning, & leveling up one day at a time. 
          </Typography>
        </div>
        </div>
        <div className={classes.socialContainer}>
          <Button variant="contained" color="primary" 
              className={classes.roundButton }
              href="https://twitter.com/" target="_blank" 
              startIcon={<TfiTwitterAlt
              className={classes.socialIcon}/> } >
          </Button> 
          <Button variant="contained" color="primary"  className={classes.roundButton }href="https://twitter.com/" target="_blank" startIcon={<TfiDribbble className={classes.socialIcon}/> } >
          </Button>
          <Button variant="contained" color="primary" className={classes.roundButton } href="https://dribbble.com/mattfarley" target="_blank" startIcon={<TfiLinkedin className={classes.socialIcon}   /> } >
          </Button>
          <Button variant="contained" color="primary" className={classes.roundButton } href="https://www.linkedin.com/in/matthew-farley-32526014/" target="_blank" startIcon={<BsFillBadgeHdFill className={classes.socialIcon}/> } > 
          </Button> 
          <Button variant="contained" color="primary" className={classes.roundButton } href="https://www.indiehackers.com/mattfarley/history" target="_blank" startIcon={<TbBrandProducthunt className={classes.socialIcon} /> } >
          </Button> 
          <Button variant="contained" color="primary" className={classes.roundButton } href="https://www.producthunt.com/@farleymatters" target="_blank" startIcon={<SlEnvolope className={classes.socialIcon}/> } >
          </Button> 
          </div>
          <div className={classes.copyrightContainer}>Handcrafted by me <AiOutlineCopyrightCircle  
                  style={{ verticalAlign: '-0.125em', width: '30px',}}/> twentytwentythree </div>
                  <br/>
              <div className={classes.bulmaContainer}>
                  <a href="https://bulma.io/" >
                    <Image src={bulma}  style={{height: '31px',width:'200px',textAlign: 'center',paddingLeft: '20px',}}alt="made with bulma" />
                  </a> 
              </div>
        </div>
        </footer>
  )
}

export default Footer;