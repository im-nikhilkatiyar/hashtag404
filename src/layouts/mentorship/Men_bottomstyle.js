import React from "react";
import Head from "next/head";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { BiMessageDetail } from "react-icons/bi";

const useStyles = makeStyles({
    //  Interested 
    interest: {
        backgroundColor: "white",
        textAlign: "center",
        height: "30%",
        paddingTop: "122px",
        paddingBottom: "122px",
        textAlign: "-webkit-center",
        '& p': {
            fontSize: "20px",
            margin: "40px",
        },
        '& Svg': {
            margin: "-4px 5px",
        }
    },
    start_btn: {
        color: "#6e07f3",
        border: "2px solid #6e07f3",
        borderRadius: "35px",
        maxWidth: "280px",
        height: "55px",
        padding: "16px",
        fontSize: "20px",
        "&:hover": {
            backgroundColor: "#6e07f3",
            color: "white",
        },
    },
});
function Bottomstyle() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.interest}>
                <h2>If you're wanting to level up, mentorship helps.</h2>
                <p>Schedule a free consultation to ask questions, discuss details, and decide if it's a fit.</p>
                <div className={classes.start_btn}>
                    <div><BiMessageDetail />Introduce yourself</div>
                </div>
            </div></div>
    );
}

export default Bottomstyle;
