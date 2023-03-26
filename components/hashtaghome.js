import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import hashtag from "../assets/hashtag.jpg";
import "../styles/404.css";
import mf_avatar from "../assets/mf_avatar.jpg";
import computer from "../assets/computer.JPG";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import MessageTwoTone from "@mui/icons-material/MessageTwoTone";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

  img404:{
      position: "absolute",
      top: "5%",
      left: "5%",
      transform: "translateY(-10%)",
      listStyle: "none",            
  },
  
 nav_list:{
  '& a':{
  // listStyle: "none",
  textDecoration:"none",
  maxWidth: '1440px',
},
},

nav_item:{
  maxWidth: '1440px',
  position: "absolute",
  top:"5%",
  transform: "translateY(10%)",
  right: "17%",
  color: "black",
  fontSize: "2ch",
  textDecoration: "none",
  listStyle: "none",
  marginRight:"3px",
  padding:"0px",
  '& a':{
    color:"black",
  },
  '& a:hover': {
    color:"#6E07F3", // set text color to #6E07F3 on hover
  }
},


nav_item1: {
  // color:"#6E07F3",
  maxWidth: '1440px',
  border: "2px solid #6E07F3",
  borderRadius: "30px",
  width: "90px",
  height: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  position: "absolute",
  transform: "translateY(20%)",
  right: "7%",
  listStyle: "none",
  // color:"#6E07F3",
  textDecoration:"none", // set text decoration to none
  '& a':{
    color: '#6e07f3',
  },
  
  '&:hover': {
    backgroundColor: '#6e07f3',
  '& a':{
    color: 'white',
  },
  },
},
hashtag_heading:{

},
h3:{
    fontSize: "2.5rem",
    position: "absolute",
    marginLeft: "22%",
    top: "15%",
},
h:{
    fontSize: "1.2rem",
    position: "absolute",
    top: "32%",
    marginLeft: "28%",
},


// >>>>>>>>>>>>>>>>>  Images    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>


imgs:{

},
img1:{
    width: "25%",
    height: "40%",
    position: "absolute",
    top: "40%",
    left: "35%",
    alignItems: "center",
},
img2:{
    width: "60%",
    height: "50%",
    position: "absolute",
    top: "90%",
    left: "20%",
    alignItems: "center", 
},

// >>>>>>>>>>>>>>>>>>    Blue bar      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


blue_bar:{
    backgroundColor: "#6e07f3",
    height: "650px",
    position: "absolute",
    top: "140%",
    left: "0%",
    right: "0%",
},

// >>>>>>>>>>>>>>>>>>      blue_bar_content        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



blue_bar_content:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  '& h1': {
    color: "white",
    fontSize: "200%",  },
  '& p': {
      color: "white",
      textAlign: "center",
      width: "62%",
      /* font-family:Georgia, 'Times New Roman', Times, serif; */
      fontSize: "21px",
    },
    '@media screen and (max-width: 454px)': {
      // flexDirection: 'column',
      // alignItems: 'start',
      // padding: '0%',
      '& h1':{
        textAlign:"center",
      },
  },
  },   

  // >>>>>>>>>>>>>>>>   designer    >>>>>>>>>>>>>>>>>>>>>>>

   designer_img:{
    position: "relative",
    left: "35%",
    width: "25%",
    height:"10%",
 },
  designer:{
      position: "absolute",
      top: "200.5%",
      width: "100%",
  },
  designer_inside:{
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      border: "0.5px solid brown",
      width: "30%",
      lineHeight: "237.5%",
      position: "absolute",
      left: "5%",
      top: "30%",
      backgroundColor: "white",
      borderRadius: "20px 0px 0px 0px",
      '& ul':{
          padding: "20px",
          fontSize: "18px",
          color: "#333",
      },
      '& li':{
          margin: "5%",
          // fontSize: 32,
          textDecoration: "none",
          listStyle: "none",
          color: "black",
          // position:"relative",
          textAlign: "center",
          // display: "flex",
          // flexDirection: "column"
      
      },
      '& p':{
          fontSize: 26,
          fontFamily: "eurostile",
          // padding:"10px"
      },

  },

designer_things:{
    // fontSize:15,
    '& p':{
      padding:"10px 10px",
      fontSize:18,
    }
},

// >>>>>>>>>>>>>>>>>>>>>>   frontend    >>>>>>>>>>>>>>>>>


frontend_img:{
  position: "relative",
  left: "35%",
  width: "23%",
  height:"10%",
},
frontend:{
    position: "absolute",
    top: "200.5%",
    width: "100%",
},
frontend_div:{
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    border: "0.5px solid brown",
    width: "30%",
    lineHeight: "160%",
    position: "absolute",
    left: "35%",
    top: "30%",
    backgroundColor: "white",
    borderRadius: "0px 0px",

   '& ul':{
      padding: "20px",
      fontSize: "18px",
      color: "#333",
   },
   '& li':{
      margin: "5%",
      // fontSize: 20,
      textDecoration: "none",
      listStyle: "none",
      color: "black",
      // position:"relative",
      textAlign: "center",
      // display: "flex",
      // flexDirection: "column"
   },
   '& p':{
      fontSize: 26,
      fontFamily: "eurostile",
      padding:"10px"
   },

},
frontend_div2:{
  '& p':{
    fontSize:18,
    padding:"10px 10px"
  }
},


// >>>>>>>>>>>>>   Mentor    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

img_mentor:{
  position: "relative",
  
  left: "35%",
  width: "30%",
  height:"10%",
},
mentor:{
    position: "absolute",
    top: "200.5%",
    width: "100%",
},
mentor_div:{
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    border: "0.5px solid brown",
    width: "30%",
    position: "absolute",
    lineHeight: "223%",
    left: "65%",
    top: "30%",
    backgroundColor: "white",
    borderRadius: " 0px 20px 0px 0px",

    '& ul':{
        padding: "1px",
        fontSize: "18px",
        color: "#333",
    },
    '& li':{
        margin: "5%",
        // fontSize: 20,
        textDecoration: "none",
        listStyle: "none",
        color: "black",
        // position:"relative",
        textAlign: "center",
        // display: "flex",
        // flexDirection: "column"    
    },
    '& p':{
      fontSize: 26,
      fontFamily: "eurostile",
      padding:"-10%"
    },

},

mentor_div2:{
  '& p':{
    fontSize:18,
    padding:"10px 10px"
  }
},


// >>>>>>>>>>>>>>>  Start  >>>>>>>>>>>>>>>>>>>>>>>>>>



interest_hash:{
    position: "absolute",
    bottom: "-270%",
    left: "40%",
    '& p':{
        position: "relative",
        bottom: "-220%",
        left: "-20%",
        fontSize: "20px",
    },
},



start: {
  '& a': {
    color: '#6e07f3',
        border: "2px solid #6E07F3",
        borderRadius: "30px",
        width: "270px",
        height: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //   borderRadius
        //   borderWidth: "5px",
        //   backgroundColor:"blue",
        padding: "20px",
        position: "absolute",
        top: "95.5%",
        right: "55%",
        listStyle: "none",
        textDecoration: "none",
        fontSize: 20,
  },
  '& a:hover': {
    backgroundColor: '#6e07f3',
    color: 'white',
  },
},



});

export default function Home() {

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta name="description" content="Meta description for the Home page THIS IS AS HOME PAGE" />
        <meta name="keywords" content="test1, test2, ssr, nextjs" />
      </Head>
    <nav>
      <div className={classes.hash_navbar}>
        <div className={classes.hashtag_navbar}>
          <Link href="/" className={classes.img404}>
            <Image
              src={hashtag} 
              width={80}
              height={40}
             />
          </Link>
          {/* <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
          </label> */}
          <ul className={classes.nav_list} >
            <li className={classes.nav_item}>
              <Link legacyBehavior href="/Mentorship">
                <a
                // onMouseOver={(e) => e.target.style.color = "#6E07F3"}
                // onMouseOut={(e) => e.target.style.color = "black"}
                 >
                  Mentorship</a>
              </Link>
            </li>
            <li className={classes.nav_item1}>
              <Link legacyBehavior href="/Hello">
                <a 
              // onMouseOver={(e) => {
              //   e.target.style.backgroundColor = "#6E07F3";
              //   e.target.style.color = "white";
              // }}
              // onMouseOut={(e) => {
              //   e.target.style.backgroundColor = "transparent";
              //   e.target.style.color = "#6E07F3";
              // }}
              >  Say Hello</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
{/* >>>>>>>>>>      Header           >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className={classes.hashtag_heading}>
        <h3 className={classes.h3}>
          Designer, Frontend Developer & Mentor
        </h3>

        <h className={classes.h}>
          I design and code beautifully simple things, and I love what I do.
        </h>
      </div>

{/* >>>>>>>>>>>        Images      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className={classes.imgs}>
        <Image className={classes.img1}
          src={mf_avatar}
          />
        <Image className={classes.img2}
          src={computer}
         />
      </div>
{/* >>>>>>>>>>>>    Blue bar         >>>>>>>>>>>>>>>>>>>>>>> */}

<div className={classes.blue_bar}>
        <div className={classes.blue_bar_content} 
        >
          <h1 >Hi, I’m Matt. Nice to meet you.</h1>
          <p>
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies, consulted for startups,
            and collaborated with talented people to create digital products
            for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops
            one design problem at a time.
          </p>
        </div>
      </div>

{/* >>>>>>>>>>>>>>      Designer      >>>>>>>>>>>>>>>>>>>>>>> */}

<div className={classes.designer}>
        <div className={classes.designer_inside}>
          <ul> 
          <Image src={one} className={classes.designer_img}/>
            <li>
              <p >
                Designer
              </p>
              <div className={classes.designer_things}>
                <p>
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
                <p style={{ color: "blue" }}>Things I enjoy designing:</p>
                <p>UX, UI, Web, Apps, Logos</p>
                <p style={{ color: "blue" }}>Design Tools:</p>
                <p>
                  Affinity Designer<br /> Figma<br /> Font Awesome<br /> Pen & Paper<br /> Sketch<br />
                  Webflow
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
{/* // >>>>>>>>>>>>>   Frontend    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
<div className={classes.frontend}>
        <div className={classes.frontend_div} >
          <ul>
            <Image src={two} className={classes.frontend_img} />
            <li>
              <p>
                Frontend Developer
              </p>
              <div className={classes.frontend_div2}>
                <p>
                  I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                  <br/><br/></p>
                <p style={{ color: "blue" }}>TLanguages I speak:</p>
                <p>HTML, Pug, Slim, CSS, Sass, Git</p>
                <p style={{ color: "blue" }}><br/>Dev Tools:</p>
                <p>
                  Atom<br />Bitbucket<br />Bootstrap<br />Bulma<br />Codekit<br />Github<br />Surge<br />Terminal<br />Vercel
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

{/* >>>>>>>>>>>>>>>>>>>>   Mentor    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div className={classes.mentor}>
        <div className={classes.mentor_div}>
          <ul>
            <Image src={three} className={classes.img_mentor}/>
            <li>
              <p>
                Mentor
              </p>
              <div className={classes.mentor_div2}>
                <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                <p style={{ color: "blue" }}>Experiences I draw from:</p>
                <p>UX/UI, Product design, Freelancing</p>
                <p style={{ color: "blue" }}>Mentor Stats:</p>
                <p>
                  7 years experience<br />26 short courses<br />65 bootcamps<br />200+ students<br />2,350+ mentor sessions<br />60+ group critiques<br />16,500+ comments </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

{/* >>>>>>>>>>>>>>>     Interested       >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      
<div className={classes.interest_hash}>
              <h2>Interested in collaborating with me?</h2>
              <p>I’m always open to discussing product design work or partnership opportunities.</p>
              <div className={classes.start}>
                  <Link href="/start">
                      <MessageTwoTone style={{
                          position: "absolute",
                          left: "7%",
                          top: "30%",
                          width: "50px",
                      }}
                      
                      />  
                      Start a conversation
                  </Link>
              </div>
  </div>
          </div>
  );
}
