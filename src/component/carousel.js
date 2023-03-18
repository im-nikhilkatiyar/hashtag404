import React, { useState, useEffect } from 'react';
// import './Carousel.css';
import pascal1 from '../../assets/pascal1.png';
import pascal2 from '../../assets/pascal2.png';
import {FaDove,} from 'react-icons/fa';
import { FaDiceD20,} from 'react-icons/fa';
import Image from 'next/image';
import { Input } from '@material-ui/core';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
        // image: require("./pascal1.png").default,
        // image: <FaDove />,
        // imageUrl:"/pascal1.png",
        image: pascal1,
        text:
        '"Matt was a real pleasure to work with and we look \n forward to working with him again. He’s definitely \n the kind of designer you can trust with a project \n from start to finish."',
        author1: "Pascal Tremblay",
        author2: "Creative Lead, Good Kind",
      
    },

    {
        // image: <FaDiceD20/>,
        // imageUrl:"/pascal1.png",
        image: pascal2,
        text:
          '"Matts a clear communicator with the tenacity and \n confidence to really dig in to tricky design scenarios \n and the collaborative friction thats needed to \n produce excellent work."',
          author1: "Alvin Engler",
          author2: "CEO, West Third Enterprises, Inc.",
        // image: "https://example.com/image1.jpg",
        
      },
    // Add more testimonials as needed
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

    /* Whole Container Style */
    <div style={{height:'1400px', width: '95%', maxWidth: '2500px', padding: '30px',
    '@media (maxWidth:759px)': {
        width: '100%',
        padding: '10px',
        height:'2000px'
    }
    }} >

      {/* testimonial container style  */}
    <div style={{width: '95%', maxWidth: '6000px', height: '600px', padding: '40px', backgroundColor: '#f9f9f9', borderRadius: '10px', 
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' ,  textAlign: 'center',
    '@media (maxWidth:759px)': {
        width: 'auto',
        height:'2000px'
    }
    }}>

       {/* testimonial_Image   container style  */}
        <div style={{marginBottom: '20px'}}>
        
        
        <Image
            style={{height: '150px',  width: '150px', borderRadius: '50%',
            '@media (maxWidth:759px)': {
            height: 'auto',
            width: '100%',
            maxWidth: '130px'
          } 
        }}
            src={testimonials[activeIndex].image}
            alt="Testimonial"
          />
          <br/>
          <br/>
          
          <p style={{ 
            whiteSpace: 'pre-wrap', 
            fontSize: '1.5rem',
            fontWeight: '300px',
            marginBottom: '10px', 
            fontFamily: ' "eurostile" , sans-serif',
            color:'black',
            '@media (maxWidth:759px)': {
            fontSize: '0.5rem',
            // whiteSpace:'nowrap'
            textOverflow: 'ellipsis'
            }
            }}
            
            >
            {testimonials[activeIndex].text}
          </p>

          <br/>
          <br/>
          <br/>
          
          <p style={{color: 'black', fontWeight: 'bold', fontSize: '25px' }}>
            {testimonials[activeIndex].author1}
          </p>
          <br/>
          <br/>
          

          <p 
          style={{fontSize: '20px',
            color: 'black',
            fontFamily:  '"europa ", sans-serif',
            marginTop: '-1.25rem'}}>
            {testimonials[activeIndex].author2}
          </p>
          <br/>
          <br/>
          

           {/* testimonial_Radio style  */}
          <div 
          style={{textAlign: 'center', transition: 'background-color 0.25s'}}>
          <Input type="radio" name="radio-btn" style={{display:'inline-block ', margin: '0 6px', width: '15px', height: '15px',
            border: '1px solid #E6ECF8', borderRadius: '30%', cursor: 'pointer'}} 
            checked={activeIndex === 0} onClick={handlePrevClick}></Input>

          <Input type="radio" name="radio-btn" style={{display:'inline-block ', margin: '0 6px', width: '15px', height: '15px',
            border: '1px solid #E6ECF8', borderRadius: '30%', cursor: 'pointer'}} 
           checked={activeIndex === 1} onClick={handleNextClick}></Input>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Carousel;