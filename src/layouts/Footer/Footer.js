import React from 'react';
import Image from 'next/image';
import { TfiTwitterAlt, TfiDribbble, TfiLinkedin } from 'react-icons/tfi';

// icons import from react library
import { TbBrandProducthunt } from 'react-icons/tb';
import { SlEnvolope } from 'react-icons/sl';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { CgIndieHackers } from 'react-icons/cg';
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';

// images
import Logo1 from '../../../assets/Logo.jpg';
import bulma from '../../../assets/made-with-bulma.png';

const useStyles = makeStyles(() => ({
    footerContainer: {
        maxWidth: '1900px',
        width: '100%',
        height: '635px',
        padding: '4rem 1.5rem 4rem',
        backgroundColor: '#6E07F3',
        textAlign: 'center !important',
        '@media screen and (max-width:1504px)': {
            width: 'auto',
        },
        '@media screen and (max-width:615px)': {
            height: '435px',
        },
        '@media screen and (max-width:414px)': {
            padding: '32px 16px',
        },
    },
    container: {
        backgroundColor: '#6E07F3',
        height: '460px',
        marginLeft: '68px',
        marginRight: '68px',
        maxWidth: '1700px',
        width: '100%',
        position: 'relative',
        '@media screen and (max-width:1704px)': {
            width: 'auto',
        },
        '@media screen and (max-width:615px)': {
            height: 'auto',
        },
        '@media screen and (max-width:414px)': {
            height: 'auto',
        },
        '@media screen and (max-width: 375px)': {
            height: 'auto',
            marginLeft: '16px',
            marginRight: '16px',
        },
    },
    img_container: {
        maxWidth: '100%',
        width: '8%',
        marginLeft: '45%',
        '@media screen and (max-width: 900px)': {
            maxWidth: '100%',
            width: '58%',
            marginLeft: '20%',
            transform: 'scale(0.8)',
            fontSize: '2vw',
        },
    },
    logo: {
        height: '50%',
        width: 'auto',
        display: 'block',
        margin: '0 auto',
        '@media screen and (max-width:900px)': {
            height: '50%',
            transform: 'scale(0.5)',
        },
    },
    headingContainer: {
        height: '176px',
        margin: '-12px -12px 12px',
        maxWidth: '1768px',
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        '@media screen and (max-width:1704px)': {
            width: 'auto',
        },
        '@media screen and (max-width:724px)': {
            width: 'auto',
            display: 'inline-block',
            height: 'auto',
        },
        '@media screen and (max-width:414px)': {
            flexDirection: 'column',
            height: '145px',
            margin: '0.75rem',
        },
        '@media screen and (max-width: 375px)': {
            height: '125px',
        },
    },
    headingPart: {
        width: '500px',
        height: '136px',
        padding: '12px',
        '@media screen and (max-width:724px)': {
            width: 'auto',
            height: '66px',
        },
        '@media screen and (max-width:526px)': {
            width: '500',
        },
        '@media screen and (max-width:414px)': {
            width: '100%',
            padding: '0px',
        },
    },
    heading: {
        fontSize: '1.6rem',
        fontFamily: ' "eurostile", sans-serif',
        color: 'antiquewhite',
        opacity: '0.8',
        width: '322px',
        height: '70px',
        textAlign: 'center !important',
        lineHeight: '1.25',
        margin: '2rem auto',
        fontWeight: '400',
        '@media screen and (max-width:724px)': {
            width: 'auto',
        },
        '@media screen and (max-width:582px)': {
            fontSize: '20.6px',
            width: 'auto',
        },
        '@media screen and (max-width:414px)': {
            width: '100%',
            fontSize: '20px',
            lineHeight: '1.3em',
        },
        '@media screen and (max-width: 375px)': {
            fontSize: '20px',

        },
    },
    socialContainer: {
        backgroundColor: '#6E07F3',
        height: '50px',
        width: '1700px',
        margin: '0 auto 3.5rem',
        '@media screen and (max-width:1704px)': {
            width: 'auto',
        },
        '@media screen and (max-width:724px)': {
            width: 'auto',
            display: 'inline-block',
            height: '46px',
        },
        '@media screen and (max-width:414px)': {
            height: 'auto',
            marginBottom: '30px',
            flexWrap: 'wrap',
        },
        '@media screen and (max-width: 375px)': {
            height: 'auto',
            marginBottom: '24px',
        },
    },
    roundButton: {
        margin: ' 0px 13px',
        height: '50px',
        minWidth: '35px',
        borderRadius: '50%',
        paddingLeft: '18px',
        paddingRight: '8px',
        border: '2px solid rgba(255, 255, 255, 0.5)',
        backgroundColor: '#6E07F3',
        '&:hover': {
            backgroundColor: 'white',
            '& $socialIcon': {
                color: '#6E07F3',
            },
        },
        '@media screen and (max-width:724px)': {
            margin: '2px 3.6px',
            minWidth: '15px',
            width: '50px',
            height: '50px',
            padding: '14.4px 12.8px',
            display: 'inline-block',
        },
        '@media screen and (max-width:414px)': {
            minWidth: '15px',
            width: '40px',
            height: '40px',
            padding: '10.4px 9.6px',
        },
        '@media screen and (max-width: 375px)': {
            minWidth: '15px',
            width: '30px',
            height: '30px',
            padding: '4.4px 7.2px',
        },
    },
    socialIcon: {
        height: '40px',
        minWidth: '20px',
        borderRadius: '50%',
        color: 'white',
        '&:hover': {
            color: '#6E07F3',
        },
        '@media screen and (max-width:724px)': {
            width: '30px',
            height: '20px',
        },
        '@media screen and (max-width:414px)': {
            width: '25px',
            height: '15px',
        },
        '@media screen and (max-width: 375px)': {
            width: '20px',
            height: '12px',
        },
    },
    copyrightContainer: {
        fontSize: '23px',
        color: 'antiquewhite',
        opacity: '0.8',
        fontWeight: '400',
        width: '1700px',
        height: '27px',
        '@media screen and (max-width:1704px)': {
            width: 'auto',
        },
        '@media screen and (max-width:560px)': {
            fontSize: '18px',
        },
        '@media screen and (max-width:414px)': {
            fontSize: '14px',
            height: '20px',
        },
        '@media screen and (max-width: 375px)': {
            height: '15px',
        },
    },
    bulmaContainer: {
        width: '1700px',
        height: '50px',
        opacity: '0.8',
        marginTop: '0.7rem',
        '@media screen and (max-width:1704px)': {
            width: 'auto',
        },
        '@media screen and (max-width:414px)': {
            height: '25px',
        },
        '& a': {
            display: 'inline-block',
            maxheight: '50px',
        },
    },
    copyrightIcon: {
        verticalAlign: '-0.125em',
        width: '30px',
    },
    bulmaImage: {
        textAlign: 'center',
        minWidth: '10px',
        minHeight: '10px',
        transform: 'scale(0.4)',
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footerContainer}>
            <div className={classes.container}>
                <div className={classes.img_container}>
                    <a href="https://mattfarley.ca/">
                        <Image src={Logo1} alt="Logo-hashtag" className={classes.logo} />
                    </a>
                </div>
                <div className={classes.headingContainer}>
                    <div className={classes.headingPart}>
                        <Typography variant="h1" className={classes.heading}>Living, learning, & leveling up one day at a time. </Typography>
                    </div>
                </div>
                <div className={classes.socialContainer}>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" color="primary" className={classes.roundButton} startIcon={<TfiTwitterAlt className={classes.socialIcon} />} />
                    </a>
                    <a href="https://dribbble.com/mattfarley" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" color="primary" className={classes.roundButton} startIcon={<TfiDribbble className={classes.socialIcon} />} />
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-farley-32526014/" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" color="primary" className={classes.roundButton} startIcon={<TfiLinkedin className={classes.socialIcon} />} />
                    </a>
                    <a href="https://www.indiehackers.com/mattfarley/history" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" color="primary" className={classes.roundButton} startIcon={<CgIndieHackers className={classes.socialIcon} />}> </Button>
                    </a>
                    <a href="https://www.producthunt.com/@farleymatters" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" color="primary" className={classes.roundButton} startIcon={<TbBrandProducthunt className={classes.socialIcon} />} />
                    </a>
                    <a href="mattfarley@hey.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" color="primary" className={classes.roundButton} startIcon={<SlEnvolope className={classes.socialIcon} />} />
                    </a>
                </div>
                <div className={classes.copyrightContainer}>Handcrafted by me <AiOutlineCopyrightCircle className={classes.copyrightIcon} /> twentytwentythree </div>
                <div className={classes.bulmaContainer}>
                    <a href="https://bulma.io/" className={classes.bulmaAnch}>
                        <Image src={bulma} className={classes.bulmaImage} alt="made with bulma" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
