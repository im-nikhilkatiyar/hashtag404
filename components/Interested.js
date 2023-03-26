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

 // >>>>>>>>>>>>>>>  Interested  >>>>>>>>>>>>>>>>>>>>>>>>>>

interest_hash:{
    // position: "absolute",
    // bottom: "-270%",
    // left: "40%",
    textAlign: "center",

    '& p':{
        // position: "relative",
        // bottom: "-220%",
        // left: "-20%",
    // textAlign: "-webkit-center",
        fontSize: "20px",
        margin:"40px",
    },
    '& .MuiSvgIcon-root': {
        width: '60px',
        textAlign: "center",
        // width: "70px",
        height: "25px",
        margin:"-5px",
        
    }
},



start: {
    
  '& a': {
    
        color: '#6e07f3',
        border: "2px solid #6E07F3",
        borderRadius: "30px",
        // width: "970px",
        // height: "20px",
        // display: "center",
        // justifyContent: "center",
        // alignItems: "center",
        //   borderRadius
        //   borderWidth: "5px",
        //   backgroundColor:"blue",
        padding: "15px",
        // position: "absolute",
        // top: "95.5%",
        // right: "55%",
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
// {/* >>>>>>>>>>>>>>>     Interested       >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      
<div className={classes.interest_hash}>
              <h2>Interested in collaborating with me?</h2>
              <p>I’m always open to discussing product design work or partnership opportunities.</p>
              <div className={classes.start}>
                  <div id='icon'><Link href="/start">
                      <MessageTwoTone style={{
                        //   position: "absolute",
                        //   left: "7%",
                        //   top: "30%",
                        //   width: "50px",
                      }}
                      
                      />  
                      Start a conversation
                  </Link>
                  </div>
              </div>
  </div>
  );
}
