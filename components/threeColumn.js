import React from 'react';
import {TbHandRock} from "react-icons/tb";
import { makeStyles } from "@material-ui/core";
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    sectionContainer:{
        backgroundColor:'#6E07F3',
        marginTop: '150px',
        height: '500px',
        paddingTop: '5px',
        '@media screen and (max-width:1504px)':{            
        height: '300px',
        width:'auto',                   
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
        marginTop: '-5rem',
        width:'1444px',               
        '@media screen and (max-width:1504px)': {                
        height: '166px',            
        width:'auto',                
        marginLeft:'30px',
        marginRight:'30px',                
        },
        '@media screen and (max-width:915px)':{
        marginLeft:'80px',
        marginRight:'20px',
        height:'300px',
        width:'720px',               
        },
                    
    },

    threeCol:{
        display: 'flex',
        color: 'white',
        padding:'56px 20px',
        letterSpacing: '1px',
        height:'78px',
        width:'1328',
        '@media screen and (max-width:1504px)':{
        height:'78px',
        width:'1328',
        margin:'-12px',
        },
        '@media screen and (max-width:915px)':{
        flexDirection:'column', 
        alignItems:'center',
        paddingTop:'20px',
        height:'250px',
        width:'780px',
        padding:'0px',                    
        },
    },

    coloneContainer :{
        padding: '12px',
        fontSize: '32px',
        fontFamily: '"eurostile", sans-serif',
        whiteSpace: 'normal',
        width:'443px',
        height:'60px',                      
        '@media screen and (max-width:1504px)':{                
        whiteSpace: 'pre',
        fontSize:'28px',
        width:'463px',
        height:'60px',
        '@media screen and (max-width:915px)':{
        marginBottom:'10px',
        width:'463px',
        height:'60px',
        },                
        },
    },

    coltwoContainer:{
        fontFamily: '"europa", sans-serif',
        fontSize: '18px',
        marginBottom: '0',
        verticalAlign: 'baseline',
        width:'443px',
        height:'78px',
        padding:'12px',
        '@media screen and (max-width:1504px)':{
        fontSize:'15px',               
        whiteSpace: 'normal',              
        },
        '@media screen and (max-width:915px)':{                   
        marginBottom:'10px',
        width:'683px',
        height:'60px',
        whiteSpace: 'normal',
        },
    },
    colthreeContainer : {
        width:'443px',
        height:'77px',
        padding:'12px',
        '@media screen and (max-width:915px)':{                   
        marginBottom:'10px',
        width:'443px',
        height:'60px',                    
        },
    }, 
    buttonSty:{
        transition: 'background-color 1s',
        width: '255px',
        borderRadius: '50px',
        height: '50px',
        outline: '2px solid #5BE9B9',
        display: 'flex',
        marginLeft:'80px',
        '&:hover': {
        backgroundColor: '#5BE9B9',
        },
        '@media screen and (max-width:1504px)':{
        width: '212px',
        height: '53px',
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
    iconStyle:{
        height:'30px',  width:'25px'
    },

    textContainer : {
        color: 'white',
        fontWeight: '550px',
        fontSize: '18px',
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
                        <Typography variant='h4' style={{fontFamily:'"eurostile", sans-serif',paddingLeft:'60px',}}>Start a project</Typography> </div>
                    <div className={classes.coltwoContainer}><p style={{height:'55px'}}>Interested in working together? We should  queue up a time to chat. Ill buy the coffee.</p></div>
                    <div className={classes.colthreeContainer}>
                        {/* <a style={{ */}
                        <Button  className={classes.buttonSty}href="https://mattfarley.ca/project-planner" > 
                        <span className={classes.iconContainer}><TbHandRock  className={classes.iconStyle}/></span>
                        <span className={classes.textContainer}>Let's do this</span></Button></div>
                </div>
            </div>
        </div> 
    )
}
export default Column;