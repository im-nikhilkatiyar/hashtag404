/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// images
import pascal1 from '../../../assets/pascal1.png';
import pascal2 from '../../../assets/pascal2.png';

const useStyles = makeStyles(() => ({
  container: {
    height: '900px',
    width: '100%',
    maxWidth: '2500px',
    padding: '30px',
    backgroundColor: 'white',
    '@media screen and (max-width:995px)': {
      width: '100%',
      maxHeight: '720px',
    },
    '@media screen and (max-width:885px)': {
      width: '100%',
      maxHeight: '680px',
    },
    '@media screen and (max-width:570px)': {
      width: '100%',
      maxHeight: '620px',
    },
  },
  headingOne: {
    height: '10%',
    color: 'black',
    marginLeft: '44%',
    fontFamily: '"eurostile", sans-serif',
    fontWeight: '800',
    '@media screen and (max-width:1100px)': {
      marginLeft: '40%',
    },
    '@media screen and (max-width:700px)': {
      marginLeft: '35%',
      fontSize: '25px',
    },
    '@media screen and (max-width:450px)': {
      marginLeft: '30%',
      fontSize: '1.5em',
    },
  },
  headingTwo: {
    height: '5%',
    color: 'black',
    marginLeft: '35%',
    fontFamily: '"europa", sans-serif',
    lineHeight: '1.5',
    fontWeight: '100',
    '@media screen and (max-width:1450px)': {
      marginLeft: '28%',
      lineHeight: '0.8',
    },
    '@media screen and (max-width:900px)': {
      marginLeft: '28%',
      fontSize: '1em',
    },
    '@media screen and (max-width:590px)': {
      marginLeft: '22%',
      fontSize: '0.8em',
    },
    '@media screen and (max-width:450px)': {
      marginLeft: '20%',
      fontSize: '0.6em',
    },
  },
  containertwo: {
    width: '100%',
    maxWidth: '2000px',
    height: '600px',
    padding: '40px',
    backgroundColor: 'white',
    textAlign: 'center',
    '@media screen and (max-width:875px)': {
      width: 'auto',
      height: '420px',
    },
  },
  containerthree: {
    marginBottom: '20px',
  },
  imageContainer: {
    maxWidth: '10%',
    marginLeft: '45%',
    '@media screen and (max-width:700px)': {
      maxWidth: '15%',
    },
  },
  image: {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    '@media screen and (max-width:759px)': {
      height: 'auto',
      width: '100%',
      maxWidth: '130px',
    },
  },
  textParagraph: {
    whiteSpace: 'pre-wrap',
    fontSize: '1.5rem',
    fontWeight: '300px',
    color: '#000',
    marginBottom: '10px',
    fontFamily: ' "eurostile" , sans-serif',
    '@media screen and (max-width:875px)': {
      fontSize: '0.8rem',
      textOverflow: 'ellipsis',
    },
    '@media screen and (max-width:575px)': {
      fontSize: '0.6rem',
      textOverflow: 'ellipsis',
    },
    '@media screen and (max-width:435px)': {
      fontSize: '0.5rem',
      textOverflow: 'ellipsis',
    },
  },
  authorParagraphOne: {
    color: '#141C3A',
    fontWeight: 'bold',
    fontSize: '25px',
    '@media screen and (max-width:800px)': {
      fontSize: '18px',
    },
  },
  authorParagraphTwo: {
    fontSize: '20px',
    color: '#141C3A',
    fontFamily: '"europa ", sans-serif',
    marginTop: '-1.25rem',
    '@media screen and (max-width:560px)': {
      fontSize: '10px',
    },
  },
  radiocontainer: {
    textAlign: 'center',
    transition: 'backgroundColor 0.25s',
  },
  radio1: {
    display: 'inline-block ',
    margin: '0 6px',
    width: '15px',
    height: '20px',
    border: '1px solid #E6ECF8',
    borderRadius: '30%',
    cursor: 'pointer',
  },
  radio2: {
    display: 'inline-block ',
    margin: '0 6px',
    width: '15px',
    height: '20px',
    border: '1px solid #E6ECF8',
    borderRadius: '30%',
    cursor: 'pointer',
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
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
    /** ****Whole Container Style ***** */
    <div className={classes.container}>
      <h1 className={classes.headingOne}>Testimonials</h1>
      <h2 className={classes.headingTwo}>People I've worked with have said some nice things...</h2>
      <div className={classes.containertwo}>
        <div className={classes.containerthree}>
          <div className={classes.imageContainer}>
            <Image className={classes.image} src={testimonials[activeIndex].image} alt="Testimonial" /><br /><br />
          </div>
          <Typography className={classes.textParagraph}>{testimonials[activeIndex].text}</Typography><br /><br />
          <Typography className={classes.authorParagraphOne}>{testimonials[activeIndex].author1}</Typography><br /><br />
          <Typography className={classes.authorParagraphTwo}>{testimonials[activeIndex].author2}</Typography><br /><br />
          <div className={classes.radiocontainer}>
            <Input type="radio" name="radio-btn" className={classes.radio1} checked={activeIndex === 0} onClick={handlePrevClick} />
            <Input type="radio" name="radio-btn" className={classes.radio2} checked={activeIndex === 1} onClick={handleNextClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;