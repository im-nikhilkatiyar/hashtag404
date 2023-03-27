import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hashtag from "../assets/hashtag.jpg";
import mf_avatar from "../assets/mf_avatar.jpg";
import computer from "../assets/computer.JPG";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import MessageIcon from '@mui/icons-material/Message';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({

  hash_navbar:{
    backgroundColor: '#fff',
  },

  hashtag_navbar: {
    maxWidth: "1440px",
    margin: "auto",
    display: "flex",
    justifyContent: "flex-start",
    padding:"20px",

    "@media screen and (max-width: 1080px)": {
      display: "flex",

      "& #icon": {
        display: "none",
        "@media screen and (max-width: 680px)": {
          display: "block",
        },
        "& .MuiSvgIcon-root": {
          width: "50px",
        },
      },
    },
    "& > div:nth-child(1)": {
      width: "70px",
      marginLeft: "5%",
    },
    "& a": {
      textDecoration: "none",
    },
    // >>>>>   nav list    >>>>>>>>

    "& > div:nth-child(2)": {
      width: "70px",
      marginRight: "65%",
    },
  },
  Dot_dot: {
    display:"none",
    "@media screen and (max-width: 1080px)": {
      textAlign:"center",
      display:"block",
      marginLeft:"90%",
      position:"absolute",
      top:"3%",
    },
  },
  div3: {
    maxWidth: "1440px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    "@media screen and (max-width: 1080px)": {
      display:"none",
    },
    "& > div:nth-child(1)": {
      marginRight: "auto",
      maxWidth: "1440px",
      width: "90px",
      height: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      margin: "10px",
      backgroundColor: "white",
      fontSize: "2ch",
      textDecoration: "none",
      listStyle: "none",
      padding: "0px 100px",
      "& a": {
        color: "black",
      },
      "& a:hover": {
        color: "#6E07F3", // set text color to #6E07F3 on hover
      },
    },

    // >>>>>>>> nav list1     >>>>>>>>>>>>

    "& > div:nth-child(2)": {
      marginRight: "auto",
      maxWidth: "1440px",
      backgroundColor: "white",
      border: "2px solid #6E07F3",
      borderRadius: "30px",
      width: "110px",
      height: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "15px",
      textDecoration: "none", // set text decoration to none
      "& a": {
        color: "#6e07f3",
      },
      "&:hover": {
        backgroundColor: "#6e07f3",
        "& a": {
          color: "white",
        },
      },
    },
  },
 
//  >>>>>>>>>>>>>>>>>> Header >>>>>>>>>>>>>>>>>>>>

hashtag_heading:{
  backgroundColor:"white",
  textAlign:"center",
},
h3:{
  fontSize: "2.5rem",
},
h:{
  fontSize: "1.2rem",
},

// >>>>>>>>>>>>>>>>>  Images    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
imgs:{
backgroundColor:"white",
},
img:{
  margin: "0 auto",
  textAlign:"center",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
},
img1:{
  textAlign:"center",
  width: "400px",
  height: "auto",
  maxWidth:"100%",
},
img2:{
  height:"auto",
  maxWidth:"100%",
},

// >>>>>>>>>>>>>>>>>>    Blue bar      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

blue_bar:{
  backgroundColor: "#6e07f3",
  height: "650px",
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
    fontSize: "21px",
  },
  '@media screen and (max-width: 454px)': {
    '& h1':{
      textAlign:"center",
    },
    '& p':{
      fontSize:"115%",
    },
},
},   

// >>>>>>>>>>>>>>   Bluebar-Container     >>>>>>>>>>>>>>>>>>>>>>>


// >>>>>>>>>>>>>>>>>>   Container   >>>>>>>>>>>>>>>>
containerback:{
    backgroundColor:"white",
}, 
container:{
    backgroundColor:"white",
    maxWidth: '1080px',
    margin:"-60px auto",
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0px',
    backgroundColor:"white",
    borderRadius:"20px",
  
    '@media screen and (max-width: 850px)': {
        flexDirection: 'column',
        alignItems: 'center',
        margin:"-60px auto",
    '& > div': {
    
      borderRadius: "20px 20px 20px 20px",
    }
    },
    '& > div': {
        
        maxWidth: '500px',
        minWidth: '350px',
        height: '830px',
        margin: '2px',
        width: '100%',
        '@media screen and (max-width: 1070px)': {
            minWidth: '280px',
            height: '930px',
            maxWidth: '400px',
        },
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      border: "0.5px solid brown",
    },
    "& > div:nth-child(1)": {
     textAlign:"center",
     fontSize:"x-large",
     borderRadius: "20px 0px 0px 20px",
     
     '@media screen and (max-width: 850px)': {
      borderRadius:"0px 0px",
      },
       
    },"& > div:nth-child(2)": {
        textAlign:"center",
        fontSize:"x-large",
        borderRadius: "0px 0px",

       },"& > div:nth-child(3)": {
        textAlign:"center",
        fontSize:"x-large",
        borderRadius: " 0px 20px 20px 0px",
        
        '@media screen and (max-width: 850px)': {
          borderRadius:"0px 0px",
          },
       },
       '& li':{
    textDecoration:"none",
    listStyle:"none",
       },
   },
   designer_img: {
    width: "25%",
    height:"10%",
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: 20,
  },
  frontend_img: {
    width: "23%",
    height:"10%",
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: 20,
  },
  img_mentor: {
    width: "30%",
    height:"10%",
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: -10,
  },

designer_things:{
    fontSize:16,
    '& p':{
      padding:"10px 10px",
      fontSize:18,
      margin:"22px",
    },
    '& ul':{
        padding:"0px",
        listStyle:"none",
     },
     
    textDecoration:"none",
    listStyle:"none",
},
frontend_div2:{
    fontSize:16,
  '& p':{
    fontSize:18,
    padding:"10px 10px",
    margin:"20px",
  },
  '& ul':{
    padding:"0px",
    listStyle:"none",
 },
},
mentor_div2:{
    fontSize:16,
  '& p':{
    fontSize:18,
    padding:"10px 10px",
    margin:"22px",
  },
  '& ul':{
    padding:"0px",
    listStyle:"none",
 },
},

 // >>>>>>>>>>>>>>>  Interested  >>>>>>>>>>>>>>>>>>>>>>>>>>

 interest_hash:{
  backgroundColor:"white",
  textAlign: "center",
  margin:"150px 10px",

  '& p':{
      fontSize: "20px",
      margin:"40px",
  },
  '& .MuiSvgIcon-root': {
      width: '60px',
      textAlign: "center",
      height: "25px",
      margin:"-5px",
      
  }
},

start: {
  
'& a': {
  
      color: '#6e07f3',
      border: "2px solid #6E07F3",
      borderRadius: "30px",
      padding: "15px",
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

function Hashtaghome2() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const drawerWidth = isMobile ? '100%' : 240;
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Mentorship', 'Say Hello'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{backgroundColor:"white"}}><><><><div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta
          name="description"
          content="Meta description for the Home page THIS IS AS HOME PAGE" />
        <meta name="keywords" content="test1, test2, ssr, nextjs" />
      </Head>

      {/* >>>>>>>>>>>>   Navbar    >>>>>>>>>>>>>>>> */}
      <nav>
        <div className={classes.hash_navbar}>
          <div className={classes.hashtag_navbar}>
            <div className={classes.img404}>
              <Link href="/">
                <Image src={hashtag} width={80} height={40} />
              </Link>
            </div>
            <div></div>
            <div className={classes.div3}>
              <div className={classes.nav_list}>
                <div className={classes.nav_item}>
                  <Link legacyBehavior href="/Mentorship">
                    <a> Mentorship</a>
                  </Link>
                </div>
              </div>
              <div className={classes.nav_list1}>
                <div className={classes.nav_item1}>
                  <Link legacyBehavior href="/Hello">
                    <a> Say Hello</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div><>
{/* >>>>>>>>>>>>>>>>>>>>>  Dot_dot   >>>>>>>>>>>>>>>>>> */}

 
<div className={classes.Dot_dot}>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer('right', true)}><MenuOpenIcon/></Button>
        <Drawer
          anchor="right"
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>

{/* >>>>>>>>>>      Header           >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div className={classes.hashtag_heading}>
          <h3 className={classes.h3}>
            Designer, Frontend Developer & Mentor
          </h3>

          <h className={classes.h}>
            I design and code beautifully simple things, and I love what I do.
          </h>
        </div>

        {/* // >>>>>>>>>>>>>>>   Images    >>>>>>>>>>>> */}
        <div className={classes.imgs}>
          <div className={classes.img}>
            <Image className={classes.img1}
              src={mf_avatar} />
            <Image className={classes.img2}
              src={computer} />
          </div>
        </div>
      </></>
      {/* >>>>>>>>>>>>    Blue bar         >>>>>>>>>>>>>>>>>>>>>>> */}
      <div className={classes.blue_bar}>
        <div className={classes.blue_bar_content}>
          
        <div className={classes.blue_bar_container}>

        </div>
          <h1>Hi, I’m Matt. Nice to meet you.</h1>
          <p>
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies, consulted for startups,
            and collaborated with talented people to create digital products
            for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops
            one design problem at a time.
          </p>
        </div>

{/* >>>>>>>>>>>>>>>>>    Blue - Container   >>>>>>>>>>> */}


        {/* >>>>>>>>>>>>  Container  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      </div></><div className={classes.containerback}>
        <div className={classes.container}>
        <div>
          <ul>
            <Image src={one} className={classes.designer_img} />
            <li>
              <p style={{ fontWeight: "bold" }}>
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
                <ul>
                  <li />Affinity Designer<br /><li /><br /> Figma<li /><br /> Font Awesome<li /><br /> Pen & Paper<li /><br /> Sketch<li /><br />
                  Webflow
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <Image src={two} className={classes.frontend_img} />
            <li>
              <p style={{ fontWeight: "bold" }}>
                Frontend Developer
              </p>
              <div className={classes.frontend_div2}>
                <p>
                  I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                </p>
                <p style={{ color: "blue" }}>TLanguages I speak:</p>
                <p>HTML, Pug, Slim, CSS, Sass, Git</p>
                <p style={{ color: "blue" }}><br />Dev Tools:</p>
                <ul>
                  Atom<li /><br />Bitbucket<li /><br />Bootstraul<li /><br />Bulma<li /><br />Codekit<li /><br />Github<li /><br />Surge<li /><br />Terminal<li /><br />Vercel
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <Image src={three} className={classes.img_mentor} />
            <li>
              <p style={{ fontWeight: "bold" }}>
                Mentor
              </p>
              <div className={classes.mentor_div2}>
                <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                <p style={{ color: "blue" }}>Experiences I draw from:</p>
                <p>UX/UI, Product design, Freelancing</p>
                <p style={{ color: "blue" }}>Mentor Stats:</p>
                <ul>
                  7 years experience<li /><br />26 short courses<li /><br />65 bootcamps<li /><br />200+ students<li /><br />2,350+ mentor sessions<li /><br />60+ group critiques<li /><br />16,500+ comments
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
      </>

 {/* >>>>>>>>>>>>>>>     Interested       >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className={classes.interest_hash}>
        <h2>Interested in collaborating with me?</h2>
        <p>I’m always open to discussing product design work or partnership opportunities.</p>
        <div className={classes.start}>
          <div id='icon'><Link href="/start">
            <MessageIcon/>
            Start a conversation
          </Link>
          </div>
        </div>
      </div></div>
  );
}

export default Hashtaghome2;
