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


    hashtag_heading:{

        textAlign:"center",
    },
    h3:{
        fontSize: "2.5rem",
        // position: "absolute",
        // marginLeft: "22%",
        // top: "15%",
    },
    h:{
        fontSize: "1.2rem",
        // position: "absolute",
        // top: "32%",
        // marginLeft: "28%",
    },
    
    
    // >>>>>>>>>>>>>>>>>  Images    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    
    imgs:{
    // padding:"0rem 1.5rem",
    },

    img:{
        margin: "0 auto",
        // position:"relative",
        // width: "auto",
        textAlign:"center",
        width: "100%",
        maxWidth: "900px",
        height: "auto",
    },

    img1:{
        textAlign:"center",
        width: "400px",
        // maxWidth: "900px",
        height: "auto",
        
        // height:"auto",
        maxWidth:"100%",
        // width: "25%",
        // height: "35%",
        // position: "absolute",
        // top: "30%",
        // left: "35%",
        // alignItems: "center",
    },
    img2:{
        height:"auto",
        maxWidth:"100%",
        // width: "60%",
        // height: "40%",
        // position: "absolute",
        // top: "62%",
        // left: "20%",
        // alignItems: "center", 
    },
    
});

export default function Header() {

    const classes = useStyles();
  
    return (
// {/* >>>>>>>>>>      Header           >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <>
            {/* // >>>>>>>>>>      Header           >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
           
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
            </>  
            
);
}