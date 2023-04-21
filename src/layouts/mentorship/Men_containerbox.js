import React from "react";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
// imagess
import Men_one from "../../../assets/Men_one.jpg";
import Men_two from "../../../assets/Men_two.jpg";
import Men_three from "../../../assets/Men_three.jpg";

const useStyles = makeStyles({
    // Container   
    containerback: {
        backgroundColor: "white",
        padding: "1px",
    },
    container: {
        maxWidth: "1330px",
        margin: "-160px auto",
        display: "flex",
        justifyContent: "space-around",
        padding: "0px",
        borderRadius: "20px",
        paddingBottom: "110px",
        "@media screen and (max-width: 850px)": {
            flexDirection: "column",
            alignItems: "center",
            margin: "-100px 50px",
        },
        "& > div": {
            maxWidth: "500px",
            minWidth: "350px",
            height: "700px",
            margin: "5px",
            width: "100%",
            boxShadow: "0 0 2px #d4d1d1",
            border: "0px solid #d4d1d1",
            boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8", "@media screen and (max-width: 1070px)": {
                minWidth: "280px",
                height: "930px",
                maxWidth: "900px",
            },
        },
        "& > div:nth-child(1)": {
            textAlign: "center",
            fontSize: "x-large",
            borderRadius: "20px",
            backgroundColor: "white",
            "@media screen and (max-width: 850px)": {
                borderRadius: "0px 0px",
            },
            "& > ul": {
                "& > li": {
                    "& > p": {
                        fontWeight: "bold",
                    },
                    "& > p:nth-child(2)": {
                        color: "#6E07F3",
                        lineHeight: "80px",
                        fontSize: "40px",
                        fontFamily: '"eurostile", sans-serif',
                    },
                },
            },
        },
        "& > div:nth-child(2)": {
            textAlign: "center",
            fontSize: "x-large",
            borderRadius: "20px",
            backgroundColor: "white",
            "& > ul": {
                "& > li": {
                    "& > p": {
                        fontWeight: "bold",
                    }, "& > p:nth-child(2)": {
                        color: "#6E07F3",
                        lineHeight: "80px",
                        fontSize: "40px",
                        fontFamily: '"eurostile", sans-serif',
                    },
                },
            },

        },
        "& > div:nth-child(3)": {
            textAlign: "center",
            fontSize: "x-large",
            borderRadius: " 20px",
            backgroundColor: "white",
            "& > ul": {
                "& > li": {
                    "& > p": {
                        fontWeight: "bold",
                    },
                    "& > p:nth-child(2)": {
                        color: "#6E07F3",
                        lineHeight: "100px",
                        fontSize: "40px",
                        fontFamily: '"eurostile", sans-serif',
                    },
                },
            },
            "@media screen and (max-width: 850px)": {
                borderRadius: "0px 0px",
            },
            "& li": {
                margin: "-2px",
            },
        },
        "& li": {
            textDecoration: "none",
            listStyle: "none",
            "& p": {
            },
        },
    },
    designer_img: {
        width: "25%",
        height: "5%",
        borderRadius: "50%",
        objectFit: "cover",
        marginLeft: "37%",
        marginTop: "50px",
        marginBottom: "13px"
    },
    frontend_img: {
        width: "30%",
        height: "5%",
        borderRadius: "50%",
        objectFit: "cover",
        marginLeft: "36.5%",
        marginTop: "50px",
        marginBottom: "13px"
    },
    img_mentor: {
        width: "30%",
        height: "5%",
        borderRadius: "50%",
        objectFit: "cover",
        marginLeft: "34%",
        marginTop: "43px",
        marginBottom: "10px"
    },
    designer_things: {
        fontSize: 16,
        padding: "0 80px",
        "& > p:nth-child(2)": {
            color: "#6E07F3",
            marginBottom: "-40px",
            "@media screen and (max-width: 961px)": {
                marginTop: "-30px"
            },
        },
        "& > p:nth-child(4)": {
            color: "#6E07F3"
        },
        "& p": {
            padding: "10px 10px",
            fontSize: "18px",
            margin: "22px",
            lineHeight: "30px"
        },
        "& ul": {
            padding: "0px",
            listStyle: "none",
        },
        textDecoration: "none",
        listStyle: "none",
    },
    frontend_div2: {
        fontSize: 16,
        padding: "0 80px",
        "& > p:nth-child(2)": {
            margin: "35px",
            color: "#6E07F3",
            marginBottom: "-30px"
        },
        "& > p:nth-child(4)": {
            color: "#6E07F3",
            marginTop: "-15px"
        },
        "& p": {
            fontSize: "18px",
            padding: "5px 10px",
            margin: "20px",
            lineHeight: "30px"
        },
        "& ul": {
            padding: "0px",
            listStyle: "none",
            lineHeight: "18px"
        },
    },
    mentor_div2: {
        fontSize: 16,
        padding: "0 80px",
        "& > p:nth-child(2)": {
            color: "#6E07F3",
            marginBottom: "-40px"
        },
        "& > p:nth-child(4)": {
            color: "#6E07F3"
        },
        "& > p:nth-child(1)": {
            margin: "8px",
        },
        "& p": {
            fontSize: "18px",
            padding: "10px 10px",
            margin: "22px",
            lineHeight: "34px"
        },
        "& ul": {
            padding: "0px",
            listStyle: "none",
        },
    },
    start_btn: {
        backgroundColor: "#141c3a",
        color: "#5BE9B9 ",
        border: "2px solid #6e07f3",
        borderRadius: "35px",
        maxWidth: "280px",
        height: "55px",
        padding: "16px",
        fontSize: "20px",
    },
});

function Containerbox() {
    const classes = useStyles();

    return (
        <div>
            <>
                <>
                    <div>
                    </div>
                </>
                <div className={classes.containerback}>
                    <div className={classes.container}>
                        <div>
                            <ul>
                                <div className={classes.designer_img} ><Image src={Men_one} /></div>
                                <li>
                                    <p>Spot Mentoring</p>
                                    <p>$150</p>
                                    <div className={classes.designer_things}>
                                        <p>
                                            1 hour of candid conversation and advice as
                                            needed with no long term, ongoing commitment
                                            required.
                                        </p>
                                        <p>Good for:</p>
                                        <p>All designers</p>
                                        <div className={classes.start_btn}>
                                            <div>Book a session</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <div className={classes.frontend_img} ><Image src={Men_two} /></div>
                                <li>
                                    <p>Production Support</p>
                                    <p>$500</p>
                                    <div className={classes.frontend_div2}>
                                        <p>
                                            4 hours of targeted feedback and design critique
                                            to help you focus on delivering your best work.
                                        </p>
                                        <p>Great for:</p>
                                        <p>Experienced designers</p>
                                        <div className={classes.start_btn}>
                                            <div>Improve your chops</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.mentorbox}>
                            <ul><div className={classes.img_mentor} ><Image src={Men_three} /></div>
                                <li>
                                    <p>Tailored Learning</p>
                                    <p>$1200</p>
                                    <div className={classes.mentor_div2}>
                                        <p>
                                            12 hours of professional coaching and
                                            collaboration to help
                                            you achieve long term goals and
                                            ambitions.
                                        </p>
                                        <p>Best for:</p>
                                        <p>New designers</p>
                                        <div className={classes.start_btn}>
                                            <div>Start your journey</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Containerbox;
