import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography, Button, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';

// images
import pascal1 from '../../../assets/pascal1.png';
import pascal2 from '../../../assets/pascal2.png';

const useStyles = makeStyles(() => ({
    container: {
        height: '1000px',
        width: '100%',
        maxWidth: '1900px',
        padding: '144px 72px',
        backgroundColor: 'white',
        borderTop: '1px solid #E6ECF8',
        textAlign: 'center',
        '@media screen and (max-width:993px)': {
            width: 'auto',
            maxHeight: '790px',
            padding: '80px 24px',
        },
        '@media screen and (max-width:885px)': {
            width: 'auto',
            maxHeight: '780px',
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
        maxWidth: '12%',
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
        maxWidth: '700px',
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
    const [ activeIndex, setActiveIndex ] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const testimonials = [
        {
            image: pascal1,
            text: '"Matt was a real pleasure to work with and we look forward to \n working with him again. He’s definitely the kind of designer you can \n trust with a project from start to finish."',
            author1: 'Pascal Tremblay',
            author2: 'Creative Lead, Good Kind',
        },
        {
            image: pascal2,
            text: '"Matts a clear communicator with the tenacity and  confidence to \n really dig in to tricky design scenarios  and the collaborative friction \n thats needed to produce excellent work."',
            author1: 'Alvin Engler',
            author2: 'CEO, West Third Enterprises, Inc.',
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((activeIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [ activeIndex, testimonials ]);
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
                <h1 className={classes.headingOne}>Testimonials</h1>
                <h2 className={classes.headingTwo}>People I've worked with have said some nice things...</h2>
                <div className={classes.containertwo}>
                    <div className={classes.containerthree}>
                        <div className={classes.imageContainer}>
                            <Image className={classes.image} src={testimonials[ activeIndex ].image} alt="Testimonial" />
                        </div>
                        <Typography className={classes.textParagraph}>{testimonials[ activeIndex ].text}</Typography>
                        <h1 className={classes.authorParagraphOne}>{testimonials[ activeIndex ].author1}</h1>
                        <h2 className={classes.authorParagraphTwo}>{testimonials[ activeIndex ].author2}</h2>
                        <div className={classes.radiocontainer}>
                            <Input type="radio" name="radio-btn" className={classes.radio1} checked={activeIndex === 0} onClick={handlePrevClick} />
                            <Input type="radio" name="radio-btn" className={classes.radio2} checked={activeIndex === 1} onClick={handleNextClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
