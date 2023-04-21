import React from "react";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

// imagess
import Authenticity from "../../../assets/Authenticity.jpg";
import Humility from "../../../assets/Humility.jpg";
import Equality from "../../../assets/Equality.jpg";
import Transparency from "../../../assets/Transparency.jpg";

const useStyles = makeStyles({
    // Container   
    containerback: {
        backgroundColor: "white",
        padding: "1px",
    },
    container: {
        backgroundColor: "white",
        maxWidth: "1300px",
        margin: "-160px auto",
        display: "flex",
        justifyContent: "space-around",
        padding: "0px",
        backgroundColor: "white",
        borderRadius: "20px",
        paddingBottom: "110px",
        "@media screen and (max-width: 850px)": {
            flexDirection: "column",
            alignItems: "center",
            margin: "-100px 50px",
        },
        "& > div": {
            maxWidth: "700px",
            minWidth: "350px",
            height: "360px",
            margin: "1px",
            width: "100%",
            boxShadow: "0 0 2px #d4d1d1",
            boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 0.1px #E6ECF8",
            "@media screen and (max-width: 1070px)": {
                minWidth: "280px",
                height: "430px",
                maxWidth: "900px",
            },
        },
        "& > div:nth-child(1)": {
            textAlign: "center",
            fontSize: "x-large",
            "@media screen and (max-width: 850px)": {
                borderRadius: "0px 0px",
            },
            "& > ul": {
                marginTop: "-45px",
                "& > li": {
                    "& > p": {
                        fontWeight: "bold",
                    },
                },
            },
        },
        "& > div:nth-child(2)": {
            textAlign: "center",
            fontSize: "x-large",
            borderRadius: "0px 0px",
            "& > ul": {
                "& > li": {
                    "& > p": {
                        fontWeight: "bold",
                    },
                },
            },

        },
        "& li": {
            textDecoration: "none",
            listStyle: "none",
        },
    },
    // container1
    container1: {
        backgroundColor: "white",
        maxWidth: "1300px",
        margin: "-160px auto",
        display: "flex",
        justifyContent: "space-around",
        padding: "0px",
        backgroundColor: "white",
        borderRadius: "20px",
        paddingBottom: "110px",
        "@media screen and (max-width: 850px)": {
            flexDirection: "column",
            alignItems: "center",
            margin: "-100px 50px",
        },
        "& > div": {
            maxWidth: "700px",
            minWidth: "350px",
            height: "360px",
            margin: "1px",
            width: "100%",
            boxShadow: "0 0 2px #d4d1d1",
            boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 0.1px #E6ECF8",
            "@media screen and (max-width: 1070px)": {
                minWidth: "280px",
                height: "430px",
                maxWidth: "900px",
            },
        },
        "& > div:nth-child(1)": {
            textAlign: "center",
            fontSize: "x-large",
            borderRadius: "20px",
            "@media screen and (max-width: 850px)": {
                borderRadius: "0px 0px",
            },
            "& > ul": {
                "& > li": {
                    "& > p": {
                        fontWeight: "bold",
                    },
                },
            },
        },
        "& > div:nth-child(2)": {
            textAlign: "center",
            fontSize: "x-large",
            borderRadius: "20px",
            "& > ul": {
                "& > li": {
                    "& > p": {
                        fontWeight: "bold",
                    },
                },
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
        width: "23%",
        height: "5%",
        borderRadius: "50%",
        objectFit: "cover",
        marginLeft: "37%",
        marginTop: "80px",
        marginBottom: "1px"
    },
    frontend_img: {
        width: "22%",
        height: "5%",
        borderRadius: "50%",
        objectFit: "cover",
        marginLeft: "36.5%",
        marginTop: "50px",
        marginBottom: "13px"
    },
    img_mentor: {
        width: "29%",
        height: "5%",
        borderRadius: "50%",
        objectFit: "cover",
        marginLeft: "34%",
        marginTop: "43px",
        marginBottom: "10px"
    },
    designer_things: {
        fontSize: 16,
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
                                <div className={classes.designer_img} ><Image src={Authenticity} /></div>
                                <li>
                                    <p>Authenticity</p>
                                    <div className={classes.designer_things}>
                                        <p>
                                            No sugar-coated critiques here. I care about your growth too much to not keep it real. We'll tear things down and rebuild them better, together.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <div className={classes.frontend_img} ><Image src={Humility} /></div>
                                <li>
                                    <p>Humility</p>
                                    <div className={classes.frontend_div2}>
                                        <p>
                                            I don’t profess to be at the top of the design talent pool, because I know there is still much for me to master. Design is a moving target I'm hunting every day.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.container_upper}>
                        <div className={classes.container1}>
                            <div>
                                <ul>
                                    <div className={classes.designer_img} ><Image src={Equality} /></div>
                                    <li>
                                        <p>Equality</p>
                                        <div className={classes.designer_things}>
                                            <p>
                                                To me, you're more than just a mentee. You’re a designer — an industry peer. I’m not the only one teaching and you’re not the only one learning.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <div className={classes.frontend_img} ><Image src={Transparency} /></div>
                                    <li>
                                        <p>Transparency
                                        </p>
                                        <div className={classes.frontend_div2}>
                                            <p>
                                                I don’t have all the answers, but I’m happy to point you towards useful resources and share what I've learned from my own personal design journey.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Containerbox;
