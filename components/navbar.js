import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hashtag from "../assets/hashtag.jpg";
import "../styles/404.css";
import { makeStyles } from "@material-ui/core/styles";
import React, {  } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

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

const useStyles = makeStyles({

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
    '& #icon': {
      display: 'none',
      '@media screen and (max-width: 680px)': {
          display: 'block',
      },
      '& .MuiSvgIcon-root': {
          width: '50px'
      }
  }
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
      padding: "0px 115px",
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
      width: "90px",
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
});

function Navbar() {
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
    <div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta
          name="description"
          content="Meta description for the Home page THIS IS AS HOME PAGE"
        />
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
            <div className={classes.space}>
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
        </div>
      </nav>
{/* >>>>>>>>>>>>>   Dot_dot   >>>>>>>>>>> */}

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
     
{/* >>>>>>>>>>>>     Images     >>>>>>>>>>>>>>>>>>> */}
    </div>
  );
}

export default Navbar;
