import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography, Button, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';

// images
import Dalrae_Kim from '../../../assets/Dalrae_Kim.JPG';
import Jenann_Pham from '../../../assets/Jenann_Pham.JPG';
import Jonathan_Maimon from '../../../assets/Jonathan_Maimon.JPG'
import Erika_Harano from '../../../assets/Erika_Harano.JPG'
import Arnold_Rosario from '../../../assets/Arnold_Rosario.JPG'

const useStyles = makeStyles(() => ({
    container: {
        height: '1000px',
        width: '100%',
        maxWidth: '1900px',
        padding: '144px 72px',
        backgroundColor: 'white',
        textAlign: 'center',
        '@media screen and (max-width:993px)': {
            width: 'auto',
            maxHeight: '890px',
            padding: '80px 24px',
        },
        '@media screen and (max-width:885px)': {
            width: 'auto',
            maxHeight: '880px',
        },
        '@media screen and (max-width:570px)': {
            width: 'auto',
            maxHeight: '720px',
        },
    },
    narrowContainer: {
        maxWidth: '1844px',
        height: '680px',
        margin: '0px 20px',
        textAlign: 'center',
        paddingTop: "53px",
        '@media screen and (max-width:990px)': {
            width: '100%',
            maxHeight: '890px',
        },

    },
    headingOne: {
        height: '10%',
        color: '#141c3a',
        fontFamily: '"eurostile", sans-serif',
        fontWeight: '800',
        marginBottom: '1.5rem',
        '@media screen and (max-width:700px)': {
            fontSize: '25px',
            height: '38px',
        },
        '@media screen and (max-width:450px)': {
            fontSize: '1.5em',
        },
    },
    headingTwo: {
        height: '5%',
        color: 'black',
        fontFamily: '"europa", sans-serif',
        lineHeight: '1.5',
        fontWeight: '100',
        marginBottom: '1.5rem',
        '@media screen and (max-width:1450px)': {
            marginLeft: '8%',
            lineHeight: '0.8',
        },
        '@media screen and (max-width:900px)': {
            marginLeft: '2%',
            fontSize: '15px',
        },
    },
    containertwo: {
        width: '100%',
        maxWidth: '2000px',
        height: '600px',
        backgroundColor: 'white',
        justifyContent: 'center',
        display: 'flex',
        '@media screen and (max-width:875px)': {
            width: 'auto',
            height: '620px',
        },
    },
    containerthree: {
        padding: '0.75rem',
    },
    imageContainer: {
        maxWidth: '17%',
        marginLeft: '45%',
        margin: '64px 0px 32px',
        '@media screen and (max-width:700px)': {
            margin: '12px 0px 10px 80px',
            marginLeft: '45%',
        },
    },
    image: {
        width: '10%',
        borderRadius: '50%',

        '@media screen and (max-width:759px)': {
            height: 'auto',
            width: '100%',
            maxWidth: '130px',
        },
    },
    textParagraph: {
        whiteSpace: 'pre-wrap',
        fontSize: '25px;',
        fontWeight: '300px',
        color: '#000',
        fontFamily: ' "eurostile" , sans-serif',
        margin: '0 auto 2.5rem',
        maxWidth: '800px',
        '@media screen and (max-width:933px)': {
            fontSize: '20px',
            textOverflow: 'ellipsis',
            width: 'auto',
        },
        '@media screen and (max-width:656px)': {
            fontSize: '15px',
            textOverflow: 'ellipsis',
        },
        '@media screen and (max-width:435px)': {
            fontSize: '15px',
            textOverflow: 'ellipsis',
        },
    },
    authorParagraphOne: {
        color: '#141C3A',
        fontWeight: '800',
        fontSize: '25px',
        marginBottom: '1.5rem',
        '@media screen and (max-width:800px)': {
            fontSize: '18px',
        },
    },
    authorParagraphTwo: {
        fontSize: '1.2rem',
        fontWeight: '400',
        color: '#141C3A',
        lineHeight: '1.5',
        fontFamily: '"europa ", sans-serif',
        marginTop: '-1.25rem',
        '@media screen and (max-width:560px)': {
            fontSize: '10px',
        },
    },
    radiocontainer: {
        textAlign: 'center',
        transition: 'backgroundColor 0.25s',
        margin: '32px 0px 16px',
    },
    radio1: {
        margin: '0px 4px',
        minWidth: '2px',
        height: '12px',
        border: '0.5px solid #6E07F3',
        borderRadius: '50%',
        cursor: 'pointer',
        padding: '0px',
    },
    radio2: {
        margin: '0px 4px',
        minWidth: '2px',
        height: '12px',
        border: '0.5px solid #6E07F3',
        borderRadius: '50%',
        cursor: 'pointer',
        padding: '0px',
    },
}));

const Testimonials = () => {
    const classes = useStyles();
    const [activeIndex, setActiveIndex] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const testimonials = [
        {
            image: Dalrae_Kim,
            text: '“Matt always offered insightful suggestions on the work I produced and challenged me with questions I had not considered. He is an incredible mentor, designer, and person.”',
            author1: 'Dalrae Kim',
            author2: 'UX Designer, Indeed',
        },
        {
            image: Jenann_Pham,
            text: '“Matts passion for design and unique perspective constantly pushed my problem-solving abilities. He is a master of his craft, and genuinely cares about the people he mentors.”',
            author1: 'Jenann Pham',
            author2: 'Design Consultant, Freelance',
        },
        {
            image: Jonathan_Maimon,
            text: '“Matt not only opened doors for me in my career, but did so with a smile and an easy-going personality. He has serious grit, and if you spend enough time with him, you will too.”',
            author1: 'Jonathan Maimon',
            author2: 'User Researcher, Coinbase',
        },
        {
            image: Erika_Harano,
            text: '“Matt believed in me before I believed in myself as a designer, and I am ever grateful for his unwavering support in my growth and development as a freelancer and design educator.”',
            author1: 'Erika Harano',
            author2: 'UX Designer, Freelance',
        },
        {
            image: Arnold_Rosario,
            text: '“Matt greatly impacted my growth as a designer. He took the time to really understand where I was at in my career and provided guidance to help fill gaps in my knowledge.”',
            author1: 'Arnold Rosario',
            author2: 'UX Designer, Smartsheet',
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((activeIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [activeIndex, testimonials]);
    const handlePrevClick = () => {
        setActiveIndex(
            activeIndex === 0 ? testimonials?.length - 1 : activeIndex - 1,
        );
    };
    const handleNextClick = () => {
        setActiveIndex((activeIndex + 1) % testimonials.length);
    };

    return (
        <div className={classes.container}>
            <div className={classes.narrowContainer}>
                <h1 className={classes.headingOne}>Happy Mentees</h1>
                <h2 className={classes.headingTwo}>Don't take my word for it when you can take theirs...</h2>
                <div className={classes.containertwo}>
                    <div className={classes.containerthree}>
                        <div className={classes.imageContainer}>
                            <Image className={classes.image} src={testimonials[activeIndex].image} alt="Testimonial" />
                        </div>
                        <Typography className={classes.textParagraph}>{testimonials[activeIndex].text}</Typography>
                        <h1 className={classes.authorParagraphOne}>{testimonials[activeIndex].author1}</h1>
                        <h2 className={classes.authorParagraphTwo}>{testimonials[activeIndex].author2}</h2>
                        <div className={classes.radiocontainer}>
                            <Input type="radio" name="radio-btn" className={classes.radio1} checked={activeIndex === 0} onClick={handlePrevClick} />
                            <Input type="radio" name="radio-btn" className={classes.radio2} checked={activeIndex === 1} onClick={handleNextClick} />
                            <Input type="radio" name="radio-btn" className={classes.radio1} checked={activeIndex === 0} onClick={handleNextClick} />
                            <Input type="radio" name="radio-btn" className={classes.radio1} checked={activeIndex === 0} onClick={handleNextClick} />
                            <Input type="radio" name="radio-btn" className={classes.radio1} checked={activeIndex === 0} onClick={handleNextClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;