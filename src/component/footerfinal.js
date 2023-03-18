import React from "react";
import Logo1 from '../../assets/Logo.jpg';
import bulma from '../../assets/made-with-bulma.png';
import { IconButton, Typography,Button} from "@material-ui/core";
import Image from 'next/image';


import { makeStyles } from "@material-ui/core";
import {TfiTwitterAlt} from "react-icons/tfi";
import {TfiDribbble} from "react-icons/tfi";
import { TfiLinkedin} from "react-icons/tfi";
import {TbBrandProducthunt} from "react-icons/tb";
import {SlEnvolope} from  "react-icons/sl";
import {BsFillBadgeHdFill} from "react-icons/bs";
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import { margin } from "@mui/system";


const useStyles = makeStyles((theme) =>({
  container:{
    backgroundColor:'#6E07F3',height: '850px', paddingLeft: '500px', paddingRight:'250px',marginTop:'30px',
    
    [theme.breakpoints.down("sm", "md")]: {
      height :'1000px',
      paddingLeft:'5px',
      paddingRight:'5px',
      
      alignItems: 'center',
    },
  }, 


  logo:{
    height:'80px', width: '100px', marginTop: '50px', marginLeft: '350px',fontSize: '4em',
    [theme.breakpoints.down( "sm", "md")]: {
      // height :'auto',
      marginLeft:'200px',
      marginTop:'60px',
      // paddingRight:'5px',
      // marginLeft:'200px',
      
    },
  },
  
  headingContainer:{
    height:'180px', paddingLeft: '180px',paddingTop: '12px', paddingBottom: '12px', paddingRight: '12px',

    [theme.breakpoints.down("sm", "md")]: {
      height :'auto',
      paddingLeft:'50px',
      paddingRight:'5px',
      marginTop:'30px',
    },
  },

  socialContainer:{
    display: 'flex', backgroundColor: '#6E07F3',height: '100px', paddingLeft: '160px',

    [theme.breakpoints.down("sm", "md")]: {
      paddingLeft: '5px',
      paddingRight: '5px',
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:'30px',
    },
  },
  
  roundButton : {
    
      marginTop: "20px",
      height: "60px",
      width: "60px",
      borderRadius: "100%",
      paddingLeft: "20px",
      paddingRight: "10px",
      outline: "1px solid antiquewhite",
      // transition: "backgroundColor 0.5s",
      backgroundColor: "#6E07F3",
      "&:hover": {
        backgroundColor: "white",
  },
  

}, 

socialIcon : {
        height: '30px', 
        width: '50px',
        margin: '10px', 
        borderRadius: '70%',
        color: 'white',
        // transition: 'color 0.5s',
        // backgroundColor :'#6E07F3',
        
        "&:hover": {
          color: "#6E07F3",
          // backgroundColor: "white",
    },
},

heading: {
  fontWeight: 'normal',
    fontStyle: 'normal',
    color: 'antiquewhite',
    justifyContent: 'center',
    opacity: '0.9',
    
    paddingTop:'30px',
},

copyrightContainer:{
  paddingLeft: '230px',fontSize:'large',color: 'antiquewhite',opacity: '0.8',fontWeight: '500',letterSpacing: '1.5px',

  [theme.breakpoints.down("sm")]: {
  paddingLeft:'80px',
  paddingRight:'10px',
  height:'auto',
  justifyContent: 'center',
      alignItems: 'center',
  },
},

bulmaContainer :
{
  paddingLeft:'300px',
  [theme.breakpoints.down("sm", "md")]: {
    paddingLeft:'150px'
  },
},

}
));





function Footer (){

  const classes = useStyles();

  return(
    <div>
      <footer>
      <div className={classes.container}
      // style={{backgroundColor:'#6E07F3',height: '850px', paddingLeft: '350px', paddingRight:'350px',}}
      >
      <Image
            src={Logo1}
            alt="Logo-hashtag"
            // style ={{height:'80px', width: '100px', marginTop: '20px', marginLeft: '350px',fontSize: '4em'}}
            className={classes.logo}
            />
     

      <div className={classes.headingContainer}
      // style={{height:'180px', paddingLeft: '180px',paddingTop: '12px', paddingBottom: '12px', paddingRight: '12px'}}
      >
      <Typography variant="h4"
      className={classes.heading}>
              Living, learning, & leveling up <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; one day at a time. 
      </Typography>
      </div>

    <div className={classes.socialContainer}
    // style={{display: 'flex', backgroundColor: '#6E07F3',height: '100px', paddingLeft: '160px'}}
    >
    <Button variant="contained" color="primary" 
    // style={{backgroundColor:'#6E07F3', marginTop: '20px', height: '60px',
    // borderRadius: '90%', paddingLeft: '10px', paddingRight: '10px',
    // outline:' 1px solid antiquewhite', 
    // transition: 'background-color 1s'}} 

    className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<TfiTwitterAlt
      // style={{
      //   height: '30px', width: '50px',
      //   marginTop: '15px', 
      //   borderRadius: '60%',
      //   color: 'white',
      //   transition: 'color 0.5s'}}

      className={classes.socialIcon}

      // style={{ fill: '#6E07F3' }}
      /> } >
          </Button> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      

    <Button variant="contained" color="primary"  className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<TfiDribbble

      className={classes.socialIcon}
      /> } >
    </Button> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

    <Button variant="contained" color="primary" 

    className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<TfiLinkedin 

      className={classes.socialIcon}
      /> } >
    </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


    <Button variant="contained" color="primary" 

    className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<BsFillBadgeHdFill

      className={classes.socialIcon}
      /> } >
    </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <Button variant="contained" color="primary" 

    className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<TbBrandProducthunt

      className={classes.socialIcon}
      /> } >
    </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


    <Button variant="contained" color="primary" 

    className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<SlEnvolope

      className={classes.socialIcon}
      /> } >
    </Button> 
          </div>
      

          <br/>
          <br/>

          <div className={classes.copyrightContainer}
          // style={{paddingLeft: '230',fontSize: 'large',color: 'antiquewhite',opacity: '0.8',fontWeight: '500',letterSpacing: '1.5px',}}
          >
                       <Typography variant="h6" > Handcrafted by me
                        <AiOutlineCopyrightCircle  
                        style={{ verticalAlign: '-0.125em',
                          width: '30px',}}/>
                        twentytwentythree </Typography>
                    </div>
                    <br/>
                  
                    <div className={classes.bulmaContainer}
                    // style={{paddingLeft: '300px'}}
                    >
                    <a href="https://bulma.io/" >
                        <Image src={bulma}  
                        style={{height: '31px',
                          width:'200px',
                          textAlign: 'center',
                          paddingLeft: '20px',}}
                          alt="made with bulma" />
                    </a> 

    
      
      </div>
      </div>
      </footer>
      </div>

  )
}

export default Footer;