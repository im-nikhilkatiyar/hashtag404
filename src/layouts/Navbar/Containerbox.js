import React from "react";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

// imagess
import one from "../../../assets/one.jpg";
import two from "../../../assets/two.jpg";
import three from "../../../assets/three.jpg";

const useStyles = makeStyles({
  // Container   
  containerback: {
    backgroundColor: "white",
    padding: "1px",
  },
  container: {
    backgroundColor: "white",
    maxWidth: "1330px",
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
      // padding: "50px 30px",
    },
    "& > div": {
      maxWidth: "500px",
      minWidth: "350px",
      height: "930px",
      margin: "1px",
      width: "100%",
      boxShadow: "0 0 2px #d4d1d1",
      border: "0px solid #d4d1d1",
      boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 0.1px #E6ECF8",
      "@media screen and (max-width: 1070px)": {
        minWidth: "280px",
        height: "930px",
        maxWidth: "900px",
      },
    },
    "& > div:nth-child(1)": {
      textAlign: "center",
      fontSize: "x-large",
      borderRadius: "20px 0px 0px 20px",
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
      borderRadius: "0px 0px",
      "& > ul": {
        "& > li": {
          "& > p": {
            fontWeight: "bold",
          },
        },
      },

    },
    "& > div:nth-child(3)": {
      textAlign: "center",
      fontSize: "x-large",
      borderRadius: " 0px 20px 20px 0px",
      "& > ul": {
        "& > li": {
          "& > p": {
            fontWeight: "bold",
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
  mentor_div2: {
    fontSize: 16,
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
      lineHeight: "30px"
    },
    "& ul": {
      padding: "0px",
      listStyle: "none",
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
                <div className={classes.designer_img} ><Image src={one} /></div>
                <li>
                  <p>Designer</p>
                  <div className={classes.designer_things}>
                    <p>
                      I value simple content structure, clean design patterns,
                      and thoughtful interactions.
                    </p>
                    <p>Things I enjoy designing:</p>
                    <p>UX, UI, Web, Apps, Logos</p>
                    <p>Design Tools:</p>
                    <ul>
                      <li />
                      Affinity Designer
                      <br />
                      <li />
                      <br /> Figma
                      <li />
                      <br /> Font Awesome
                      <li />
                      <br /> Pen & Paper
                      <li />
                      <br /> Sketch
                      <li />
                      <br />
                      Webflow
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <div className={classes.frontend_img} ><Image src={two} /></div>
                <li>
                  <p>Frontend Developer</p>
                  <div className={classes.frontend_div2}>
                    <p>
                      I like to code things from scratch, and enjoy bringing
                      ideas to life in the browser.
                    </p>
                    <p>Languages I speak:</p>
                    <p>HTML, Pug, Slim, CSS, Sass, Git</p>
                    <p>
                      <br />
                      Dev Tools:
                    </p>
                    <ul>
                      Atom
                      <li />
                      <br />
                      Bitbucket
                      <li />
                      <br />
                      Bootstraul
                      <li />
                      <br />
                      Bulma
                      <li />
                      <br />
                      Codekit
                      <li />
                      <br />
                      Github
                      <li />
                      <br />
                      Surge
                      <li />
                      <br />
                      Terminal
                      <li />
                      <br />
                      Vercel
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className={classes.mentorbox}>
              <ul><div className={classes.img_mentor} ><Image src={three} /></div>
                <li>
                  <p>Mentor</p>
                  <div className={classes.mentor_div2}>
                    <p>
                      I genuinely care about people, and love helping fellow
                      designers work on their craft.
                    </p>
                    <p>Experiences I draw from:</p>
                    <p>UX/UI, Product design, Freelancing</p>
                    <p>Mentor Stats:</p>
                    <ul>
                      7 years experience
                      <li />
                      <br />
                      26 short courses
                      <li />
                      <br />
                      65 bootcamps
                      <li />
                      <br />
                      200+ students
                      <li />
                      <br />
                      2,350+ mentor sessions
                      <li />
                      <br />
                      60+ group critiques
                      <li />
                      <br />
                      16,500+ comments
                    </ul>
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
