import React from "react";
import { makeStyles } from "@material-ui/core";
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { useState, useRef } from "react";
import { Input } from "@mui/material";
import { Typography } from '@mui/material';

// images
import mf_avatar from '../assets/mf_avatar.jpg'
import Image from "next/image";
import hashtag from '../assets/hashtag.jpg'

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
        padding: "50px",
        marginLeft: "5%"
    },
    buttons: {
        display: "flex",
        paddingLeft: "90%",
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
    },
    headspace: {
        fontSize: "3rem",
        textAlign: "center",
        fontFamily: '"europa", sans-serif',
    },
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
        gap: "0px",
        '& > div:nth-child(1)': {
            display: "flex",
            gap: "25px",
            '@media screen and (max-width: 685px)': {
                display: 'block',
                marginLeft: "-45%",
                fontSize: "xx-large",
                '& input': {
                    height: '20%',
                    width: "200%"
                }
            },
        },
        '& > div:nth-child(2)': {
            padding: '0px',
            color: '#333',
            minHeight: '100px',
            resize: 'vertical',
            '@media screen and (max-width: 685px)': {
                display: 'block',
                fontSize: "xx-large",
                '& input': {
                }
            },
        }
    },
    headings: {
        color: "rgba(41, 51, 71, 0.65)",
    },
    name: {
        border: '1px solid #ccc',
        padding: '10px',
        fontSize: '26px',
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
        color: '#333',
        textDecoration: "none",
        fontFamily: '"europa", sans-serif',
        color: "rgba(41, 51, 71, 0.65)",
        margin: "20px auto",
        borderColor: "#E6ECF8",
        borderRadius: "4px",
    },
    message: {
        verticalAlign: "top",
        borderColor: "#E6ECF8",
        border: '1px solid #ccc',
        borderRadius: "4px",
        padding: '10px',
        fontSize: '26px',
        color: '#333',
        height: '243px',
        width: "680px",
        fontFamily: '"europa", sans-serif',
        color: "rgba(41, 51, 71, 0.65)",
        margin: "20px auto",
        '& input': {
            fontSize: '18px',
            height: '100%',
            border: 'none',
            outline: 'none'
        }
    },
    start_btn: {
        color: "#6e07f3",
        border: "2px solid #6e07f3",
        borderRadius: "35px",
        padding: "5px",
        // fontSize: "20px",
        marginBottom: "80px",
        width: "190px",
        textAlignLast: "center",
        "&:hover": {
            backgroundColor: "#6e07f3",
            color: "white",
        },
        '& a': {
            color: 'black',
        },
        '& a:hover': {
            color: '#6E07F3', // set text color to #6E07F3 on hover
        },
        '@media screen and (max-width: 500px)': {
            width: "100%",
        }
    },
}));

function Header() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const classes = useStyles();
    const [refresh, setRefresh] = useState('');
    const inputRef = useRef(null);
    const handleClear = () => {
        setName('');
        setEmail('');
        setMessage('');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    const [error, setError] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();

        if (name === '') {
            setError(true);
            return;
        }

        if (email === '') {
            setError(true);
            return;
        }
        alert('Form submitted!');
    };
    return (
        <div className={classes.title}>
            <div>
                <div className={classes.logo}>
                    <Link legacyBehavior href="/">
                        <Image src={hashtag} width={80} height={40} />
                    </Link>
                </div>
                <div className={classes.buttons}>
                    <div>
                        <Button variant="text" onClick={handleClear} startIcon={<GiAnticlockwiseRotation size={20} color="#6E07F3" />} >
                        </Button>
                    </div>
                    <div>
                        <Link legacyBehavior href="/">
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
            <form className={classes.tags} onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label className={classes.headings}>Name:<br /></label>
                        <Input
                            className={classes.name}
                            type="text"
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className={classes.headings}>Email:<br /></label>
                        <Input
                            className={classes.email}
                            type="email"
                            name="name"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={classes.messagebox}>
                    <label className={classes.headings}>Message:<br /></label>
                    <textarea className={classes.message}
                        name="name"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        type="text" required />
                </div>
                <div >
                    {/* <Link legacyBehavior href="#"> */}
                    <Button className={classes.start_btn} type="submit">Submit</Button>
                    {/* </Link> */}

                </div>
                {error && (
                    <Typography variant="body1" color="error">
                        Please fill in all fields
                    </Typography>
                )}
            </form>
        </div>
    )
}
export default Header;
