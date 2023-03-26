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

    '@media screen and (max-width:1504px)':{
      height:'auto',
    },

  },

  container:{
    backgroundColor:'#6E07F3',
    height: '460px', 
    // paddingLeft: '500px', 
    // paddingRight:'250px',
    // marginTop:'30px', 
    marginLeft:'68px',
    marginRight:'68px',
    maxWidth:'1700px', 
    width:'100%',
    position: 'relative',
    
    '@media screen and (max-width:1504px)':{
      width:'auto',


      '@media screen and (max-width:615px)':{
        // margin:'0px',
        height:'auto',
  },

},
 
  }, 


  logo:{
    height:'72px',
     width: '90px', 
     marginTop: '20px', 
    //  marginLeft: '350px',
     fontSize: '4em',

     '@media screen and (max-width:615px)':{
      marginTop:'15px',
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
      height:'auto',
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
        width:'auto',
        
      },
      '@media screen and (max-width:582px)':{
      fontSize:'20.6px',
      width:'auto',
      },
      // },
      
  },

  socialContainer:{
     backgroundColor: '#6E07F3',height: '67px', 
    width:'1700px',
    marginBottom: '56px',
    // display: 'flex',
    // justifyContent:'center',

    '@media screen and (max-width:1504px)':{
      width:'auto',
},


'@media screen and (max-width:724px)':{

  width:'auto',
  display:'inline-block',
  
  height:'76px',
},
  },
  
  roundButton : {
    
      margin: " 0px 13px",
      height: "55px",
      width: "55px",
      borderRadius: "100%",
      paddingLeft: "15px",
      paddingRight: "8px",
      // padding:'18.44px 19px',
      outline: "2px solid antiquewhite",
      // transition: "backgroundColor 0.5s",
      backgroundColor: "#6E07F3",
      "&:hover": {
        backgroundColor: "white",
      },

        '@media screen and (max-width:724px)':{
          margin:'2px 3.2px',
          minWidth:'15px',
          width:'52px',
          height:'52px',
          padding:'14.4px 12.8px',
      //     paddingLeft: "10px",
      // paddingRight: "5px",
          display:'inline-block',
    },
}, 

// MuiButtonStartIcon :{
//   marginRight:'0px',
// },

socialIcon : {
        height: '30px', 
        width: '50px',
        // margin: '10px', 
        borderRadius: '70%',
        color: 'white',
        // transition: 'color 0.5s',
        // backgroundColor :'#6E07F3',
        
        "&:hover": {
          color: "#6E07F3",
          // backgroundColor: "white",
    },

    '@media screen and (max-width:724px)':{
      width:'35px',
      height:'20px',
},
},





copyrightContainer:{
  // paddingLeft: '230px',
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
},

bulmaContainer :
{
  padding:'11px',
  width:'1700px',
  height:'37px',

  '@media screen and (max-width:1504px)':{
    width:'auto',
},
},

}
));



function Footer (){

  const classes = useStyles();

  return(
    // <div>
      <footer className={classes.footerContainer}>
      <div className={classes.container}
      >
      <Image
            src={Logo1}
            alt="Logo-hashtag"
            className={classes.logo}
            />
     

      <div className={classes.headingContainer}
      >
      <div className={classes.headingPart}>
      <Typography variant="h1"
      className={classes.heading}>
              Living, learning, & leveling up one day at a time. 
      </Typography>
      </div>
      </div>

    <div className={classes.socialContainer}
    >
    <Button variant="contained" color="primary" 

    className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<TfiTwitterAlt
      className={classes.socialIcon}

      // style={{ fill: '#6E07F3' }}
      /> } >
          </Button> 
      

    <Button variant="contained" color="primary"  className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<TfiDribbble

      className={classes.socialIcon}
      /> } >
    </Button>
    <Button variant="contained" color="primary" 

    className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<TfiLinkedin 

      className={classes.socialIcon}
      /> } >
    </Button>

    <Button variant="contained" color="primary" 

    className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<BsFillBadgeHdFill

      className={classes.socialIcon}/> } > </Button> 

    <Button variant="contained" color="primary" 

    className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<TbBrandProducthunt

      className={classes.socialIcon}
      /> } >
    </Button> 
    <Button variant="contained" color="primary" 

    className={classes.roundButton }
    href="https://twitter.com/" target="_blank" 
    startIcon={<SlEnvolope

      className={classes.socialIcon}
      /> } >
    </Button> 
          </div>

          <div className={classes.copyrightContainer}>
                       {/* <Typography variant="h6" >  */}
                       Handcrafted by me
                        <AiOutlineCopyrightCircle  
                        style={{ verticalAlign: '-0.125em',
                          width: '30px',}}/>
                        twentytwentythree 
                        {/* </Typography> */}
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
      // </div>

  )
}

export default Footer;