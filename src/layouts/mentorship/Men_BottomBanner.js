import React, { useEffect } from 'react';
import { IoHandLeftOutline } from 'react-icons/io5';
import { makeStyles } from '@mui/styles';
import { Button, Link, Typography } from '@mui/material';

const useStyles = makeStyles(() => ({

    sectionContainer: {
        backgroundColor: '#6E07F3',
        height: '200px',
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
        marginRight: '60px',
        marginLeft: '60px',
        height: '176px',
        borderRadius: '12px',
        marginTop: '-5rem',
        width: '1644px',
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
    Box: {
        padding: '3.5rem 1.25rem',
    },
    threeCol: {
        display: 'flex',
        color: 'white',
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
        width: '493px',
        height: '60px',
        textAlign: 'center',
        display: 'block',
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
    oneTitle: {
        fontFamily: '"eurostile", sans-serif',
        fontWeight: '800',
        fontSize: '2rem',
    },
    coltwoContainer: {
        fontFamily: '"europa", sans-serif',
        fontSize: '20px',
        marginBottom: '0',
        width: '493px',
        height: '78px',
        padding: '12px',
        textAlignLast: 'center',
        textAlign: 'justify',
        display: 'block',
        lineHeight: '1.8',
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
        width: '413px',
        height: '82px',
        padding: '12px',
        display: 'block',
        flexGrow: '1',
        textAlign: 'center',
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
            marginLeft: '5px',
        },
    },
    buttonSty: {
        transition: 'background-color 1s',
        width: '255px',
        borderRadius: '50px',
        height: '55px',
        outline: '2px solid #5BE9B9',
        textDecoration: 'none',
        padding: '1.25em 2em',
        borderWidth: '2px',
        backgroundColor: 'transparent',
        borderColor: '#5BE9B9',
        fontSize: '1.25rem',
        position: 'relative',
        '&:hover': {
            backgroundColor: '#5BE9B9',
            color: 'black',
            '& $iconContainer, & $textContainer': {
                color: 'black',
            },
        },
        '@media screen and (max-width:1504px)': {
            width: '255px',
            height: '53px',
        },
        '@media screen and (max-width:915px)': {
            width: '260px',
            height: '48px',
        },
        '@media screen and (max-width:470px)': {
            marginLeft: '5px',
        },
        '@media screen and (max-width:405px)': {
            marginLeft: '5px',
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
        height: '30px',
        width: '25px',
    },
    textContainer: {
        color: 'white',
        fontWeight: '550px',
        fontSize: '18px',
        // transition: 'color 1s',
        width: '260px',
        height: '30px',
        textDecorationLine: 'none',
        '&:hover': {
            color: 'black',
        },
    },
    text: {
        textTransform: 'lowercase',
        '&:first-letter': {
            textTransform: 'uppercase',
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
                <div className={classes.Box}>
                    <div className={classes.threeCol}>
                        <div className={classes.coloneContainer}>
                            <Typography variant="h1" className={classes.oneTitle}>Book a consult</Typography>
                        </div>
                        <div className={classes.coltwoContainer}><p className={classes.secondPara}>Thinking about mentorship? Let's talk about it. The first call is on me.</p></div>
                        <div className={classes.colthreeContainer}>
                            <Link legacyBehaviour href="/introduce_yourself">
                                <Button className={classes.buttonSty}>
                                    <span className={classes.iconContainer}><IoHandLeftOutline className={classes.iconStyle} /></span>
                                    <span className={classes.textContainer}>
                                        <span className={classes.text}>Introduce yourself</span>
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BottomBanner;