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
    maxWidth: "1080px",
    margin: "-60px auto",
    display: "flex",
    justifyContent: "space-around",
    padding: "0px",
    backgroundColor: "white",
    borderRadius: "20px",

    "@media screen and (max-width: 850px)": {
      flexDirection: "column",
      alignItems: "center",
      margin: "-60px auto",
      "& > div": {
        borderRadius: "20px 20px 20px 20px",
      },
    },
    "& > div": {
      maxWidth: "500px",
      minWidth: "350px",
      height: "830px",
      margin: "2px",
      width: "100%",
      "@media screen and (max-width: 1070px)": {
        minWidth: "280px",
        height: "930px",
        maxWidth: "400px",
      },
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      border: "0.5px solid brown",
    },
    "& > div:nth-child(1)": {
      textAlign: "center",
      fontSize: "x-large",
      borderRadius: "20px 0px 0px 20px",

      "@media screen and (max-width: 850px)": {
        borderRadius: "0px 0px",
      },
    },
    "& > div:nth-child(2)": {
      textAlign: "center",
      fontSize: "x-large",
      borderRadius: "0px 0px",
    },
    "& > div:nth-child(3)": {
      textAlign: "center",
      fontSize: "x-large",
      borderRadius: " 0px 20px 20px 0px",

      "@media screen and (max-width: 850px)": {
        borderRadius: "0px 0px",
      },
    },
    "& li": {
      textDecoration: "none",
      listStyle: "none",
    },
  },
  designer_img: {
    width: "25%",
    height: "10%",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: 20,
  },
  frontend_img: {
    width: "23%",
    height: "10%",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: 20,
  },
  img_mentor: {
    width: "30%",
    height: "10%",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: -10,
  },
  designer_things: {
    fontSize: 16,
    "& p": {
      padding: "10px 10px",
      fontSize: 18,
      margin: "22px",
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
    "& p": {
      fontSize: 18,
      padding: "10px 10px",
      margin: "20px",
    },
    "& ul": {
      padding: "0px",
      listStyle: "none",
    },
  },
  mentor_div2: {
    fontSize: 16,
    "& p": {
      fontSize: 18,
      padding: "10px 10px",
      margin: "22px",
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
    <div style={{ backgroundColor: "white" }}>
      <>
        <>
          <div>
          </div>
        </>
        <div className={classes.containerback}>
          <div className={classes.container}>
            <div>
              <ul>
                <Image src={one} className={classes.designer_img} />
                <li>
                  <p style={{ fontWeight: "bold" }}>Designer</p>
                  <div className={classes.designer_things}>
                    <p>
                      I value simple content structure, clean design patterns,
                      and thoughtful interactions.
                    </p>
                    <p style={{ color: "blue" }}>Things I enjoy designing:</p>
                    <p>UX, UI, Web, Apps, Logos</p>
                    <p style={{ color: "blue" }}>Design Tools:</p>
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
                <Image src={two} className={classes.frontend_img} />
                <li>
                  <p style={{ fontWeight: "bold" }}>Frontend Developer</p>
                  <div className={classes.frontend_div2}>
                    <p>
                      I like to code things from scratch, and enjoy bringing
                      ideas to life in the browser.
                    </p>
                    <p style={{ color: "blue" }}>TLanguages I speak:</p>
                    <p>HTML, Pug, Slim, CSS, Sass, Git</p>
                    <p style={{ color: "blue" }}>
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
            <div>
              <ul>
                <Image src={three} className={classes.img_mentor} />
                <li>
                  <p style={{ fontWeight: "bold" }}>Mentor</p>
                  <div className={classes.mentor_div2}>
                    <p>
                      I genuinely care about people, and love helping fellow
                      designers work on their craft.
                    </p>
                    <p style={{ color: "blue" }}>Experiences I draw from:</p>
                    <p>UX/UI, Product design, Freelancing</p>
                    <p style={{ color: "blue" }}>Mentor Stats:</p>
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
