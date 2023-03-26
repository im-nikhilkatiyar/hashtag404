import { Button, Typography } from '@material-ui/core';
import React from 'react';
import {TbHandRock} from "react-icons/tb";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({


        sectionContainer:{
            backgroundColor:'#6E07F3',
            marginTop: '150px',
            height: '500px',
            paddingTop: '5px',
                '@media screen and (max-width:1400px)':{
            
            height: '300px',
            width:'auto',
            // flexDirection :'column',
                
            },

            '@media screen and (max-width:950px)':{
                height:'400px',
            },
        },

        projectContainer:{
                backgroundColor: '#141c3a',
                marginRight: '100px',
                marginLeft: '200px',
                height: '166px',
                borderRadius: '12px',
                // paddingTop: '40px',
                marginTop: '-5rem',
                width:'1444px',
                    // paddingLeft: '150px',
                '@media screen and (max-width:1400px)': {
                
                height: '166px',
                width:'1344px',
                // paddingTop:'40px',
                marginLeft:'10px',
                marginRight:'9px',
                
                },

                '@media screen and (max-width:915px)':{
                marginLeft:'30px',
                marginRight:'30px',
                height:'330px',
                paddingLeft:'10px',       
                },
                    
        },

        threeCol:{

                display: 'flex',
                color: 'white',
                // paddingLeft: '180px',
                // paddingRight: '100px',
                // paddingTop: '10px',
                padding:'56px 20px',
                letterSpacing: '1px',
                height:'78px',
                width:'1328',
                '@media screen and (max-width:1782px)':{
                // [theme.breakpoints.down( "sm", "md", "lg")]: {
                       
                // display:'none',
                // paddingTop:'70px',
                // paddingRight:'2px',
                padding:'56px 20px',
                // paddingRight:'2px',
                // marginLeft:'1px',
                
                },
                '@media screen and (max-width:915px)':{
                flexDirection:'column', 
                alignItems:'center',
                    
                },
         },

        coloneContainer :{
                padding: '12px',
                fontSize: '32px',
                fontFamily: '"eurostile", sans-serif',
                whiteSpace: 'normal',
                width:'443px',
                height:'60px',
                // justifyContent:'center',

                        
                '@media screen and (max-width:1782px)':{
                fontSize:'10px',
                paddingLeft:'6px',
                whiteSpace: 'pre',
                
                },
        },

        coltwoContainer:{
                        
                // marginLeft: '150px',
                /* font-weight: 600; */
                fontFamily: '"europa", sans-serif',
                fontSize: '18px',
                marginBottom: '0',
                verticalAlign: 'baseline',
                width:'443px',
                height:'78px',
                padding:'12px',

                '@media screen and (max-width:1110px)':{
                fontSize:'15px',
                paddingLeft:'4px',
                whiteSpace: 'normal',
                marginLeft:'40px',
                // paddingLeft:'20px'                
                },

                '@media screen and (max-width:915px)':{
                    marginTop:'25px',
                    whiteSpace: 'normal',
                },
        },
        colthreeContainer : {
                // borderRadius: '50px',
                
                width:'443px',
                height:'77px',
                padding:'12px',
               
                // marginLeft: '150px',
                // marginTop: '20px',
                
                // padding: '18px 30px',

                '@media screen and (max-width:1112px)':{
                    paddingLeft:'3px',
                    marginLeft:'70px',
                    width:'200px'
                },

                '@media screen and (max-width:915px)':{
                    marginTop:'40px',
                },
        }, 

        buttonSty:{
                transition: 'background-color 1s',
                width: '255px',
                borderRadius: '50px',
                height: '50px',
                outline: '2px solid #5BE9B9',
                display: 'flex',
                // paddingBottom:'80px',
                marginLeft:'80px',

                '&:hover': {
                backgroundColor: '#5BE9B9',
                
                
                },
        },
        iconContainer:{
                color: 'white',
                height: '30px',
                width: '30px',
                transition: 'color 1s',
                verticalAlign: '-0.125em',
                margin:'0px 8px 0px -11px',

                '&:hover': {
                    color: 'black',
                    
                    
                    },
        },

        textContainer : {
                color: 'white',
                fontWeight: '550px',
                fontSize: '18px',
                // paddingLeft: '10px',
                transition: 'color 1s',
                width:'150px',
                height:'30px',
                textDecorationLine: 'underline',

                '&:hover':{
                color:'black'
                },
        },


}));


function Column (){

    const classes = useStyles();
    
    return (

        <div className={classes.sectionContainer}>
            <div className={classes.projectContainer}>
                <div className={classes.threeCol}>
                    <div className={classes.coloneContainer}>
                        <Typography variant='h4' style={{fontFamily:'"eurostile", sans-serif',paddingLeft:'80px'}}>Start a project</Typography> </div>
                    <div className={classes.coltwoContainer}><p style={{height:'55px'}}>Interested in working together? We should  queue up a time to chat. Ill buy the coffee.</p></div>
                    <div className={classes.colthreeContainer}>
                        {/* <a style={{ */}
                        <Button  className={classes.buttonSty}href="https://mattfarley.ca/project-planner" > 
                        <span className={classes.iconContainer}><TbHandRock  style={{ height:'30px',  width:'25px'}}/></span>
                        <span className={classes.textContainer}>Let's do this</span></Button></div>
                </div>

            </div>
        </div> 
    )
}

export default Column;