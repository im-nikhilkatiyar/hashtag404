import React, { useState, useEffect } from 'react';
import pascal1 from '../assets/pascal1.png';
import pascal2 from '../assets/pascal2.png';
import Image from 'next/image';
import { Input, makeStyles, Typography } from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
  container:{
    height:'1400px', 
    width: '95%',
    maxWidth: '2500px', 
    padding: '30px',
    '@media screen and(max-width:759px)': {
    width: '100%',
    padding: '10px',
    height:'2000px'
  },
},
containertwo:{
  width: '95%', 
  maxWidth: '6000px', 
  height: '700px', 
  padding: '40px', 
  backgroundColor: '#f9f9f9', 
  borderRadius: '10px', 
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' ,  
  textAlign: 'center',
  '@media screen and (max-width:759px)': {
  width: 'auto',
  height:'2000px'
},
},
image:{
  height: '150px',
  width: '150px', 
  borderRadius: '50%',
  '@media screen and (max-width:759px)': {
  height: 'auto',
  width: '100%',
  maxWidth: '130px'
  },
},
textParagraph:{
  whiteSpace: 'pre-wrap', 
  fontSize: '1.5rem',
  fontWeight: '300px',
  color:'#000',
  marginBottom: '10px', 
  fontFamily: ' "eurostile" , sans-serif',
  '@media screen and (max-width:759px)': {
  fontSize: '0.5rem',
  textOverflow: 'ellipsis'
  },
},
authorParagraphOne:{
  color: '#141C3A', 
  fontWeight: 'bold',
  fontSize: '25px', 
},
authorParagraphTwo:{
  fontSize: '20px',
  color: '#141C3A',
  fontFamily:  '"europa ", sans-serif',
  marginTop: '-1.25rem'
},
radiocontainer:{
  textAlign: 'center', 
  transition: 'backgroundColor 0.25s',
},
radio1:{
  display:'inline-block ', 
  margin: '0 6px', 
  width: '15px', 
  height: '15px',
  border: '1px solid #E6ECF8', 
  borderRadius: '30%', 
  cursor: 'pointer',
},
radio2:{
  display:'inline-block ', 
  margin: '0 6px', 
  width: '15px', 
  height: '15px',
  border: '1px solid #E6ECF8', 
  borderRadius: '30%', 
  cursor: 'pointer',
},
}))


const Carousel = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
        image: pascal1,
        text:
        '"Matt was a real pleasure to work with and we look \n forward to working with him again. He’s definitely \n the kind of designer you can trust with a project \n from start to finish."',
        author1: "Pascal Tremblay",
        author2: "Creative Lead, Good Kind",     
    },
    {
        image: pascal2,
        text:
          '"Matts a clear communicator with the tenacity and \n confidence to really dig in to tricky design scenarios \n and the collaborative friction thats needed to \n produce excellent work."',
          author1: "Alvin Engler",
          author2: "CEO, West Third Enterprises, Inc.",       
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
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
      );
    };
    const handleNextClick = () => {
      setActiveIndex((activeIndex + 1) % testimonials.length);
    };

  return (
    /******Whole Container Style ******/
    <div className={classes.container} >
    <div className={classes.containertwo}>
    <div style={{marginBottom: '20px'}}>
      <Image className={classes.image}src={testimonials[activeIndex].image} alt="Testimonial"/>
          <br/><br/>         
      <Typography className={classes.textParagraph}>{testimonials[activeIndex].text}</Typography><br/><br/><br/>          
      <Typography className={classes.authorParagraphOne}>{testimonials[activeIndex].author1}</Typography><br/><br/>
      <Typography className={classes.authorParagraphTwo}>{testimonials[activeIndex].author2}</Typography><br/><br/>
{/* testimonial_Radio style  */}
    <div className={classes.radiocontainer}>
      <Input type="radio" name="radio-btn" className={classes.radio1} checked={activeIndex === 0} onClick={handlePrevClick}></Input>
      <Input type="radio" name="radio-btn" className={classes.radio2} checked={activeIndex === 1} onClick={handleNextClick}></Input>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Carousel;