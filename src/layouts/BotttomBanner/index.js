/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react';
import { TbHandRock } from 'react-icons/tb';
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';

const useStyles = makeStyles(() => ({

    sectionContainer: {
        backgroundColor: '#6E07F3',
        height: '230px',
        paddingTop: '5px',
        '@media screen and (max-width:1504px)': {
            height: '200px',
            width: 'auto',
        },
        '@media screen and (max-width:950px)': {
            height: '270px',
        },
    },
    projectContainer: {
        backgroundColor: '#141c3a',
        marginRight: '100px',
        marginLeft: '200px',
        height: '166px',
        borderRadius: '12px',
        marginTop: '-5rem',
        width: '1444px',
        '@media screen and (max-width:1810px)': {
            width: 'auto',
        },
        '@media screen and (max-width:1504px)': {
            height: '166px',
            width: 'auto',
            marginLeft: '30px',
            marginRight: '30px',
        },
        '@media screen and (max-width:915px)': {
            marginLeft: '80px',
            marginRight: '38px',
            height: '300px',
            width: 'auto',
        },
        '@media screen and (max-width:570px)': {
            marginLeft: '5px',
            marginRight: '5px',
        },
    },
    threeCol: {
        display: 'flex',
        color: 'white',
        padding: '56px 20px',
        height: '78px',
        width: '1328',
        '@media screen and (max-width:1504px)': {
            height: '78px',
            width: '1328',
        },
        '@media screen and (max-width:915px)': {
            flexDirection: 'column',
            height: '250px',
            width: 'auto',
            paddingTop: '20px',
            display: 'block',
            textAlign: 'center !important',
        },
    },
    coloneContainer: {
        padding: '12px',
        fontSize: '32px',
        fontFamily: '"eurostile", sans-serif',
        whiteSpace: 'normal',
        width: '443px',
        height: '60px',
        '@media screen and (max-width:1504px)': {
            whiteSpace: 'pre',
            fontSize: '28px',
            width: '463px',
            height: '60px',
        },
        '@media screen and (max-width:915px)': {
            marginBottom: '10px',
            height: '60px',
            width: 'auto',
            textAlign: 'center',
        },
        '@media screen and (max-width:570px)': {
            width: 'auto',
            padding: '0px',
        },
    },
    coltwoContainer: {
        fontFamily: '"europa", sans-serif',
        fontSize: '18px',
        marginBottom: '0',
        verticalAlign: 'baseline',
        width: '443px',
        height: '78px',
        padding: '12px',
        textAlignLast: 'center',
        textAlign: 'justify',
        '@media screen and (max-width:1504px)': {
            fontSize: '15px',
            whiteSpace: 'normal',
        },
        '@media screen and (max-width:915px)': {
            marginBottom: '10px',
            width: 'auto',
            height: '50px',
            whiteSpace: 'normal',
            textAlign: 'center',
        },
        '@media screen and (max-width:570px)': {
            marginBottom: '30px',
        },
    },
    secondPara: {
        height: '55px',
    },
    colthreeContainer: {
        width: '443px',
        height: '77px',
        padding: '12px',
        '@media screen and (max-width:915px)': {
            marginBottom: '10px',
            width: 'auto',
            height: '78px',
            textAlign: 'cenetr',
            marginLeft: '110px',
        },
        '@media screen and (max-width:800px)': {
            marginLeft: '90px',
        },
        '@media screen and (max-width:700px)': {
            marginLeft: '40px',
        },
        '@media screen and (max-width:630px)': {
            marginLeft: '30px',
        },
    },
    buttonSty: {
        transition: 'background-color 1s',
        width: '255px',
        borderRadius: '50px',
        height: '50px',
        outline: '2px solid #5BE9B9',
        display: 'flex',
        marginLeft: '140px',
        '&:hover': {
            backgroundColor: '#5BE9B9',
        },
        '@media screen and (max-width:1504px)': {
            width: '212px',
            height: '53px',
        },
        '@media screen and (max-width:915px)': {
            width: '210px',
            height: '48px',
        },
        '@media screen and (max-width:470px)': {
            marginLeft: '105px',
        },
        '@media screen and (max-width:405px)': {
            marginLeft: '55px',
        },
    },
    iconContainer: {
        color: 'white',
        height: '30px',
        width: '30px',
        transition: 'color 1s',
        verticalAlign: '-0.125em',
        margin: '0px 8px 0px -11px',
        '&:hover': {
            color: 'black',
        },
    },
    iconStyle: {
        height: '30px', width: '25px',
    },
    textContainer: {
        color: 'white',
        fontWeight: '550px',
        fontSize: '18px',
        transition: 'color 1s',
        width: '150px',
        height: '30px',
        textDecorationLine: 'underline',
        '&:hover': {
            color: 'black',
        },
    },
}));

function BottomBanner() {
    const classes = useStyles();

    useEffect(() => {
        document.body?.classList.add('whiteBg');
    }, []);

    return (
        <div className={classes.sectionContainer}>
            <div className={classes.projectContainer}>
                <div className={classes.threeCol}>
                    <div className={classes.coloneContainer}>
                        <Typography variant="h4" style={{ fontFamily: '"eurostile", sans-serif', paddingLeft: '60px' }}>Start a project</Typography>
                    </div>
                    <div className={classes.coltwoContainer}><p calssName={classes.secondPara}>Interested in working together? We should  queue up a time to chat. Ill buy the coffee.</p></div>
                    <div className={classes.colthreeContainer}>
                        <Button className={classes.buttonSty} href="https://mattfarley.ca/project-planner">
                            <span className={classes.iconContainer}><TbHandRock className={classes.iconStyle} /></span>
                            <span className={classes.textContainer}>Let's do this</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BottomBanner;
