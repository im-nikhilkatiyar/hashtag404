import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
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
import { useMediaQuery, useTheme } from '@mui/material';

// imagess
import hashtag from '../../../assets/hashtag.jpg';

const useStyles = makeStyles({
  navbar_back: {
    backgroundColor: '#fff',
  },
  navbar: {
    maxWidth: '1440px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '20px',
    '@media screen and (max-width: 1080px)': {
      display: 'flex',
      '& #icon': {
        display: 'none',
        '@media screen and (max-width: 680px)': {
          display: 'block',
        },
        '& .MuiSvgIcon-root': {
          width: '50px',
        },
      },
    },
    '& > div:nth-child(1)': {
      width: '190px',
      marginLeft: '5%',
    },
    '& a': {
      textDecoration: 'none',
    },
    // nav list
    '& > div:nth-child(2)': {
      width: '70px',
      marginRight: '65%',
    },
  },
  Navbar_btn: {
    display: 'none',
    '@media screen and (max-width: 1080px)': {
      textAlign: 'center',
      display: 'block',
      marginLeft: '90%',
      position: 'absolute',
      top: '1.5%',
    },
  },
  Navbar_tags: {
    maxWidth: '1440px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    '@media screen and (max-width: 1080px)': {
      display: 'none',
    },
    '& > div:nth-child(1)': {
      marginRight: 'auto',
      maxWidth: '1440px',
      width: '90px',
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px',
      backgroundColor: 'white',
      fontSize: '2ch',
      textDecoration: 'none',
      listStyle: 'none',
      padding: '0px 100px',
      '& a': {
        color: 'black',
      },
      '& a:hover': {
        color: '#6E07F3', // set text color to #6E07F3 on hover
      },
    },
    //nav list1    
    '& > div:nth-child(2)': {
      marginRight: 'auto',
      maxWidth: '1440px',
      backgroundColor: 'white',
      border: '2px solid #6E07F3',
      borderRadius: '30px',
      width: '110px',
      height: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '15px',
      textDecoration: 'none', // set text decoration to none
      '& a': {
        color: '#6e07f3',
      },
      '&:hover': {
        backgroundColor: '#6e07f3',
        '& a': {
          color: 'white',
        },
      },
    },
  },
});

function NavBarContainer() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const drawerWidth = isMobile ? '100%' : 240;
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event
      && event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
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
    <div style={{ backgroundColor: 'white' }}>
      <div>
        <title>Home-Hashtag404</title>
        <nav>
          <div className={classes.navbar_back}>
            <div className={classes.navbar}>
              <div className={classes.img404}>
                <Link href="/">
                  <Image src={hashtag} />
                </Link>
              </div>
              <div />
              <div className={classes.Navbar_tags}>
                <div>
                  <div>
                    <Link legacyBehavior href="/Mentorship">
                      <a> Mentorship</a>
                    </Link>
                  </div>
                </div>
                <div>
                  <div>
                    <Link legacyBehavior href="/Hello">
                      <a> Say Hello</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <>
        <div className={classes.Navbar_btn}>
          <React.Fragment key="top">
            <Button onClick={toggleDrawer('top', true)}>
              <MenuOpenIcon />
            </Button>
            <Drawer
              anchor="top"
              open={state.top}
              onClose={toggleDrawer('top', false)}>
              {list('top')}
            </Drawer>
          </React.Fragment>
        </div>
      </>
    </div>
  );
}
export default NavBarContainer;
