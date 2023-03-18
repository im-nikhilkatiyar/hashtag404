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
        // '@media screen and (max-width:1782px)':{
            // '@media (maxWidth:1782px)': {
                [theme.breakpoints.down( "sm", "md", "lg")]:{
                height: '300px',
                width:'auto',
                
            },
    },

    projectContainer:{
        backgroundColor: '#141c3a',
                    marginRight: '20px',
                    marginLeft: '20px',
                    height: '240px',
                    borderRadius: '12px',
                    paddingTop: '80px',
                    marginTop: '-5rem',
                    // paddingLeft: '150px',

                    [theme.breakpoints.down( "sm", "md", "lg")]: {
                        height: '200px',
                        width:'auto',
                        paddingTop:'2px',
                        margin:'2px',
                        
                    },
                    
    },

    threeCol:{

        display: 'flex',
                    color: 'white',
                    paddingLeft: '180px',
                    paddingRight: '100px',
                    paddingTop: '10px',
                    letterSpacing: '1px',


                    [theme.breakpoints.down( "sm", "md", "lg")]: {
                       
                        // display:'none',
                        paddingTop:'2px',
                        paddingRight:'2px',
                        paddingLeft:'4px'
                        
                    },
    },
}));


function Column (){

    const classes = useStyles();
    const temp= {
        paddingLeft: '80px',
        
        fontSize: '32px',
        fontFamily: '"eurostile", sans-serif',
        
    '@media (maxWidth:1782px)': {
            fontSize:'10px',
            paddingLeft:'5px',
            whiteSpace: 'pre'
            
        }
        }
    return (

        <div className={classes.sectionContainer}
        // style={{
        //     backgroundColor:'#6E07F3',
        //     marginTop: '150px',
        //     height: '250px',
        //     paddingTop: '20px',

        //     '@media (maxWidth:1782px)': {
        //         height: 'auto',
        //         width:'auto'
                
        //     }
        // }}
        >
                <div className={classes.projectContainer}
                // style={{
                    // backgroundColor: '#141c3a',
                    // marginRight: '20px',
                    // marginLeft: '20px',
                    // height: '150px',
                    // borderRadius: '12px',
                    // paddingTop: '10px',
                    // marginTop: '-5rem',
                    // paddingLeft: '150px'
                // }}
                >
                <div className={classes.threeCol}
                // style={{
                //     display: 'flex',
                //     color: 'white',
                //     paddingLeft: '180px',
                //     paddingRight: '100px',
                //     paddingTop: '10px',
                //     letterSpacing: '1px',


                //     '@media (maxWidth:1782px)': {
                        
                //         paddingLeft:'10px',
                //         paddingRight: '10px',
                        
                //     }
                // }}
                >
                    <div style={{
                        paddingLeft: '80px',
                        
                        fontSize: '32px',
                        fontFamily: '"eurostile", sans-serif',
                        
                    '@media (maxWidth:1782px)': {
                            fontSize:'10px',
                            paddingLeft:'5px',
                            whiteSpace: 'pre'
                            
                        }
                        }}>
                        <Typography variant='h4'>Start a project</Typography>
                        
                    </div>
                    <div style={{
                        marginLeft: '150px',
                        /* font-weight: 600; */
                        fontFamily: '"europa", sans-serif',
                        fontSize: '18px',
                        marginBottom: '0',
                        verticalAlign: 'baseline',

                        '@media (maxWidth:1782px)': {
                            fontSize:'10px',
                            // paddingLeft:'20px'
                            
                        }
                    }}><p>Interested in working together? We should  queue up <br/> &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; a time to chat. Ill buy the coffee.</p></div>
                    <div style={{
                        borderRadius: '50px',
                        outline: '2px solid #5BE9B9',
                        width: '250px',
                        height: '50px',
                        marginLeft: '150px',
                        marginTop: '20px',
                        display: 'flex',
                        padding: '18px 30px'
                    }}>
                        {/* <a style={{ */}
                        <Button style={{
                             transition: 'background-color 1s',
                             width: '450px',
                             borderRadius: '50px',
                             height: '50px',
                             paddingBottom:'80px',

                             "&:hover": {
                                backgroundColor: '#5BE9B9'
                             },
                        }}
                        href="https://mattfarley.ca/project-planner" > 
                        <span style={{
                            color: 'white',
                            height: '40px',
                            width: '40px',
                            paddingRight: '20px',
                            transition: 'color 1s',
                            verticalAlign: '-0.125em'
                        }}
                        ><TbHandRock 
                        style={{
                            height:'40px',
                            width:'30px'
                        }}/></span>
                        <span style={{
                            color: 'white',
                            fontWeight: '550px',
                            fontSize: '15px',
                            paddingLeft: '10px',
                            transition: 'color 1s',

                            '&:hover':{
                                color:'black'
                            }
                        }}>Let's do this</span></Button></div>


                </div>

                </div>
            </div> 
    )
}

export default Column;