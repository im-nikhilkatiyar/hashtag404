import React from "react";
import { makeStyles } from "@material-ui/core";
// import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
// import ReplayIcon from '@mui/icons-material/Replay';
// import { MdReplay } from "react-icons/MdReplay";
// import { MdReplay } from "@react-icons/all-files/fa/MdReplay";
import Button from '@material-ui/core/Button';
// import SendIcon from '@material-ui/icons/Send';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

// images
import mf_avatar from '../../../assets/mf_avatar.jpg'
import Image from "next/image";
import hashtag from '../../../assets/hashtag.jpg'

const useStyles = makeStyles((theme) => ({
    title: {
        maxWidth: "1882px",
        minWidth: "700px",
        backgroundColor: "white",
        '& > div:nth-child(1)': {
            padding: "1px"
        }
    },
    logo: {
        // marginTop: "3%",
        padding: "50px",
        marginLeft: "5%"
    },
    buttons: {
        display: "flex",
        // flexDirection: "row",
        paddingLeft: "90%",
        // textDecoration:"none",
        // borderColor: "white",
        // justifyContent: "space-evenly",
        marginTop: "-5%",
        '& > div:nth-child(1)': {
            margin: "auto -23%",
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        '& > div:nth-child(2)': {
            margin: "auto 25px",
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        '@media screen and (max-width: 1024px)': {
            display: "none"
        }
    },
    line: {
        marginTop: "30px",
        border: "1px solid #ccc",
        borderColor: "#E6ECF8",
    },
    center_img: {
        textAlign: "center",
        marginTop: "-65px",
        borderRadius: "30px",
    },
    second_Header: {
        maxWidth: "850px",
        margin: "0 auto",
        // padding: "20px",
        // borderRadius: "5px",
        // marginTop: "50px",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
        // alignItems: "center",
        // maxHeight: "100px",

    },
    headspace: {
        fontSize: "3rem",
        textAlign: "center",
        fontFamily: '"europa", sans-serif',
    }
    ,
    tags: {
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "5px",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "#f5f5f5",
        gap: "0px", // add this line

        '& > div:nth-child(1)': {
            display: "flex",
            // flexDirection: "column",
            gap: "25px",
            '@media screen and (max-width: 500px)': {
                display: 'block',
                // flexDirection: "column",
                marginLeft: "-55%",
                fontSize: "xx-large",
                '& input': {
                    height: '20%', // add this line
                    width: "200%"
                }
            },
        },
        '& > div:nth-child(2)': {
            // border: '1px solid #ccc',
            padding: '0px',
            // fontSize: '26px',
            // backgroundColor: '#F5F5F5',
            color: '#333',
            minHeight: '100px',
            resize: 'vertical',
            '@media screen and (max-width: 500px)': {
                display: 'block',
                // flexDirection: "column",
                // marginLeft: "-55%",
                fontSize: "xx-large",
                '& input': {
                    // height: '20%', // add this line
                    // width: "130%"
                }
            },
        }
    },
    headings: {
        color: "rgba(41, 51, 71, 0.65)",
        // margin: "50px"

    },
    name: {
        border: '1px solid #ccc',
        padding: '10px',
        fontSize: '26px',
        // backgroundColor: '#F5F5F5',
        color: '#333',
        textDecoration: "none",
        fontFamily: '"europa", sans-serif',
        color: "rgba(41, 51, 71, 0.65)",
        margin: "20px auto",
        borderColor: "#E6ECF8",
        borderRadius: "4px",
    },
    email: {
        border: '1px solid #ccc',
        padding: '10px',
        fontSize: '26px',
        // backgroundColor: '#F5F5F5',
        color: '#333',
        textDecoration: "none",
        fontFamily: '"europa", sans-serif',
        color: "rgba(41, 51, 71, 0.65)",
        margin: "20px auto",
        borderColor: "#E6ECF8",
        borderRadius: "4px",
    },
    messagebox: {
        // display: "block",
        // flexBasis: "0",
        // flexGrow: "1",
        // flexShrink: "1"
    },
    message: {
        verticalAlign: "top",
        borderColor: "#E6ECF8",
        border: '1px solid #ccc',
        borderRadius: "4px",
        padding: '10px',
        fontSize: '26px',
        // backgroundColor: '#F5F5F5',
        color: '#333',
        height: '243px', // add this line
        width: "680px",
        fontFamily: '"europa", sans-serif',
        color: "rgba(41, 51, 71, 0.65)",
        // boxShadow: "0 0px 0px rgba(0, 0, 0, .2)",
        margin: "20px auto",
        '& input': {
            fontSize: '18px', // add this line
            height: '100%', // add this line
            border: 'none', // add this line
            outline: 'none' // add this line
        }
    },
    start_btn: {
        color: "#6e07f3",
        border: "2px solid #6e07f3",
        borderRadius: "35px",
        // maxWidth: "380px",
        // height: "10px",
        padding: "13px",
        fontSize: "20px",
        marginBottom: "80px",
        width: "160px",
        textAlignLast: "center",
        "&:hover": {
            backgroundColor: "#6e07f3",
            color: "white",
        },
        '@media screen and (max-width: 500px)': {
            width: "100%",
        }
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.title}>
            <div>
                <div className={classes.logo}>
                    <Link href="/">
                        <Image src={hashtag} width={80} height={40} />
                    </Link>
                </div>
                <div className={classes.buttons}>
                    <div>
                        <Button variant="text" startIcon={<GiAnticlockwiseRotation size={20} color="#6E07F3" />} >
                        </Button>
                    </div>
                    <div>
                        <Link href="/">
                            <Button variant="text" startIcon={<RxCross2 size={20} color="#6E07F3" />} >
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={classes.navbar_line}>
                <div className={classes.line}>

                </div>
            </div>
            {/* image */}
            <div className={classes.second_Header}>
                <div className={classes.center_img}>
                    <Image src={mf_avatar} width={150} height={120} />
                </div>
                <div className={classes.headspace}>
                    <p>
                        Thanks for taking the time to reach out.
                        How can I help you today?
                    </p>
                </div>
            </div>
            <div className={classes.tags}>
                <div>
                    <div>
                        <label className={classes.headings}>Name:<br /></label>
                        <input className={classes.name} type="text" required />
                    </div>

                    <div>
                        <label className={classes.headings}>Email:<br /></label>
                        <input className={classes.email} type="text" required />
                    </div>
                </div>
                <div className={classes.messagebox}>
                    <label className={classes.headings}>Message:<br /></label>
                    <textarea className={classes.message} type="text" required />
                </div>
                <div className={classes.start_btn}>
                    <div>Submit</div>
                </div>
            </div>


        </div>
    )
}

export default Header;
