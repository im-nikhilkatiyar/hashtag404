import React, { useState, useRef } from 'react';

import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import {
    Button, Input, Link, Typography,
} from '@mui/material';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

import mf_avatar from '../assets/mf_avatar.jpg';
import hashtag from '../assets/hashtag.jpg';

const useStyles = makeStyles(() => ({
    WholeContainer: {
        height: '1000px',
        backgroundColor: '#ffffff',
        maxWidth: '1900px',
        '@media screen and (max-width:750px)': {
            height: '1300px',
        },
    },
    navContainer: {
        borderBottom: '1px solid #E6ECF8',
        padding: '1.2rem 0',
        boxShadow: 'none',
        zIndex: '1',
        minHeight: '3.25rem',
        alignItems: 'stretch',
        display: 'flex',
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    containerTwo: {
        maxWidth: '1644px',
        alignItems: 'stretch',
        display: 'flex',
        minHeight: '3.25rem',
        width: '100%',
    },
    logoContainer: {
        marginLeft: '-0.75rem',
        alignItems: 'stretch',
        flexShrink: '0',
        minHeight: '3.25rem',
    },
    logoItem: {
        minWidth: '15px',
        minHeight: '20px',
        lineHeight: '1.5',
        padding: ' 0.5rem 0.75rem',
        position: 'relative',
        width: '150px',
    },
    navMenu: {
        marginRight: '-0.75rem',
        boxShadow: 'none',
        padding: '0.5rem 0',
        textAlign: 'center',
        alignItems: 'stretch',
    },
    navEnd: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        '@media screen and (max-width:1024px)': {
            display: 'none',
        },
    },
    navItem: {
        fontSize: '18px',
        color: '#141c3a',
    },
    navIcon: {
        color: '#6E07F3;',
        width: '30px',
        gap: '1rem',
    },
    FormContainerOne: {
        backgroundColor: '#ffffff',
    },
    sectionConatiner: {
        textAlign: 'center',
        display: 'block',
    },
    secondConatiner: {
        maxWidth: '1444px',
        padding: '0 20px',
        margin: '0 auto',
        position: 'relative',
        width: 'auto',
    },
    centeredContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '-0.75rem',
        '@media screen and (max-width:820px)': {
            width: 'auto',
        },
    },
    paraContainer: {
        flex: 'none',
        width: '66.66666674%',
        '@media screen and (max-width:560px)': {
            width: '80%',
        },
    },
    imageContainer: {
        maxWidth: '180px',
        maxHeight: '130px',
        marginLeft: '38%',
        marginTop: '-60px',
        position: 'relative',
        zIndex: '2',
        '@media screen and (max-width:1020px)': {
            marginLeft: '35%',
        },
        '@media screen and (max-width:800px)': {
            marginLeft: '37%',
            maxWidth: '120px',
            marginTop: '-40px',
        },
        '@media screen and (max-width:550px)': {
            marginLeft: '35%',
            maxWidth: '100px',
        },
        '@media screen and (max-width:400px)': {
            marginLeft: '30%',
        },
    },
    image: {
        width: '80px',
        height: '40px',
        margin: '-50px auto 50px',
    },
    heading: {
        fontWeight: '400',
        color: '#141c3a',
        fontSize: '3rem',
        lineHeight: '1.125',
        textAlign: 'center',
        opacity: '0.9',
        '@media screen and (max-width:820px)': {
            fontSize: '2rem',
        },
        '@media screen and (max-width:560px)': {
            fontSize: '1.5rem',
        },
    },
    // section Container two

    sectionContainerTwo: {
        display: 'block',
        height: '800px',
    },
    sectionCentered: {
        maxWidth: '1344px',
        padding: '0 20px',
        margin: '0 auto',
        position: 'relative',
        width: 'auto',
        height: '600px',
        '@media screen and (max-width:750px)': {
            height: '1200px',
        },
    },
    formContainer: {
        margin: '60px auto 0',
        maxWidth: '640px',
        display: 'block',
        '@media screen and (max-width:750px)': {
            height: '800px',
        },
    },
    coulumnCentered: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 'calc(1.5rem - 0.75rem)',
        height: '120px',
        '@media screen and (max-width:700px)': {
            flexDirection: 'column',
            height: '200px',
        },
    },
    halfColumn: {
        flex: 'none',
        width: '50%',
        display: 'block',
        padding: '0.75rem',
        '@media screen and (max-width:750px)': {
            width: '100%',
        },
    },
    field: {
        height: '90px',
        width: '308px',
        '@media screen and (max-width:750px)': {
            width: '600px',
        },
        '@media screen and (max-width:635px)': {
            width: 'auto',
        },
    },
    labelStyle: {
        fontWeight: '400',
        fontFamily: '"eurostile", sans-serif',
        fontSize: '1.2rem',
        color: 'rgba(41, 51, 71, 0.65)',
        marginBottom: '0.5em',
    },
    optionContainer: {
        fontSize: '1.4rem',
        borderColor: '#E6ECF8',
        color: '#141c3a',
        boxShadow: 'none',
        width: '100%',
        paddingRight: '2.5em',
        cursor: 'pointer',
        display: 'block',
        maxWidth: '100%',
        outline: 'none',
        paddingBottom: 'calc(0.5em - 1px)',
        paddingLeft: 'calc(0.75em - 1px)',
        paddingTop: 'calc(0.5em - 1px)',
        position: 'relative',
        verticalAlign: 'top',
        fontFamily: '"europa", sans-serif',
        margin: '0',
        backgroundColor: 'white',
    },
    InputControl: {
        boxSizing: 'border-box',
        clear: 'both',
        fontSize: '1rem',
        position: 'relative',
        textAlign: 'inherit',
    },
    inputText: {
        fontSize: '1.4rem',
        borderColor: '#E6ECF8',
        color: '#141c3a',
        boxShadow: 'none',
        maxWidth: '100%',
        width: '100%',
        borderRadius: '4px',
        height: '2.5em',
        justifyContent: 'flex-start',
        lineHeight: '1.5',
        paddingBottom: 'calc(0.5em - 1px)',
        paddingLeft: 'calc(0.75em - 1px)',
        paddingRight: 'calc(0.75em - 1px)',
        paddingTop: 'calc(0.5em - 1px)',
        position: 'relative',
        verticalAlign: 'top',
        fontFamily: '"europa", sans-serif',
        margin: '0',
        border: '1px solid #E6ECF8',
    },
    textareaContainer: {
        display: 'block',
        Width: '100%',
        padding: 'calc(0.75em - 1px)',
        boxSizing: 'border-box',
        resize: 'vertical',
        fontSize: '1.4rem',
        borderColor: '#E6ECF8',
        color: '#141c3a',
        boxShadow: 'none',
        backgroundColor: '#ffffff',
        borderRadius: '4px',
        position: 'relative',
        verticalAlign: 'top',
        lineHeight: '1.5',
        margin: '0',
        fontFamily: '"europa", sans-serif',
        width: '640px',
        height: '151px',
    },
    buttonStyle: {
        backgroundColor: 'transparent',
        borderColor: '#6E07F3',
        color: '#6E07F3',
        margin: '60px 0 80px',
        borderWidth: '2px',
        fontWeight: '400',
        height: 'auto',
        borderRadius: '1000px',
        paddingLeft: 'calc(1em + 0.25em)',
        paddingRight: 'calc(1em + 0.25em)',
        display: 'flex',
        width: '80%',
        fontSize: '1.25rem',
        justifyContent: 'center',
        paddingBottom: 'calc(0.5em - 1px)',
        paddingTop: 'calc(0.5em - 1px)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        alignItems: 'center',
        border: '1px solid transparent',
        position: 'relative',
        verticalAlign: 'top',
    },
}));

const options = [ 'Responsive Design', 'WebApp', 'Mobile App' ];
const optionTwo = [ '$5000-$10000', '$10000-$25000', '$25000+' ];

function ConversationForm() {
    const classes = useStyles();

    const initialState = {
        name: '',
        email: '',
        message: '',
    };

    const [ userData, setUserData ] = useState(initialState);

    const [ error, setError ] = useState(false);

    const [ selectedOption, setSelectedOption ] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [ selectedOptionTwo, setSelectedOptionTwo ] = useState('');

    const handleOptionsChange = (event) => {
        setSelectedOptionTwo(event.target.value);
    };

    // const [ text, setText ] = useState('');

    // const handleTextChange = (event) => {
    //     setText(event.target.value);
    // };

    // const [ name, setName ] = useState('');
    // const [ email, setEmail ] = useState('');

    const [ submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [ name ]: value });
    };

    const PostData = async (e) => {
        e.preventDefault();

        setError(false);

        if (!userData.name || userData.name.trim() === '') {
            setError(true);
            return;
        }

        if (!userData.email || userData.email.trim() === '') {
            setError(true);
            return;
        }

        if (!userData.message || userData.message.trim() === '') {
            setError(true);
            return;
        }

        if (!selectedOption || selectedOption.trim() === '') {
            setError(true);
            return;
        }

        if (!selectedOptionTwo || selectedOptionTwo.trim() === '') {
            setError(true);
            return;
        }
        //     alert('Form submitted!');
        try {
            const dataToSend = {
                name: userData.name,
                email: userData.email,
                message: userData.message,
                selectedOption,
                selectedOptionTwo,
            };

            const response = await fetch('/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(dataToSend),
            });

            // const data = await response.json();

            setSubmitted(true);
            alert('Form submitted!');
            console.log(userData);
            console.log(selectedOption, selectedOptionTwo);
        } catch (error) {
            console.error(error);
        }
    };

    // const [ error, setError ] = useState(false);

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     if (name === '') {
    //         setError(true);
    //         return;
    //     }

    //     if (email === '') {
    //         setError(true);
    //         return;
    //     }
    //     alert('Form submitted!');
    // };

    const [ refresh, setRefresh ] = useState('');
    const inputRef = useRef(null);

    const handleClear = () => {
        setUserData.name('');
        setUserData.email('');
        // setText('');
        setSelectedOption('');
        setSelectedOptionTwo('');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return (
        <div className={classes.WholeContainer}>
            <nav className={classes.navContainer}>
                <div className={classes.containerTwo}>
                    <div className={classes.logoContainer} />
                    <a href="https://mattfarley.ca/" className={classes.logoItem} target="_blank" rel="noreferrer">
                        <Image src={hashtag} alt="hashtag_logo" />
                    </a>
                </div>
                <div className={classes.navMenu}>
                    <div className={classes.navEnd}>
                        <Button className={classes.navItem} onClick={handleClear} startIcon={<GiAnticlockwiseRotation className={classes.navIcon} />} />
                        <Link legacybehavior href="/">
                            <Button className={classes.navItem} startIcon={<RxCross2 className={classes.navIcon} />} />
                        </Link>
                    </div>
                </div>
            </nav>
            <div className={classes.FormContainerOne}>
                <section className={classes.sectionContainer}>
                    <div className={classes.secondConatiner}>
                        <div className={classes.centeredContainer}>
                            <div className={classes.paraContainer}>
                                <div className={classes.imageContainer}>
                                    <Image src={mf_avatar} className={classes.image} alt="avtar" />
                                </div>
                                <Typography variant="h1" className={classes.heading}>I’m excited to learn about your project. Ready to get started?</Typography>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className={classes.sectionConatinerTwo}>
                <div className={classes.sectionCentered}>
                    <form className={classes.formContainer}>
                        <div className={classes.coulumnCentered}>
                            <div className={classes.halfColumn}>
                                <div className={classes.field}>
                                    <label className={classes.labelStyle}>Name</label>
                                    <div className={classes.InputControl}>
                                        <Input
                                            className={classes.inputText}
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={userData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.halfColumn}>
                                <div className={classes.field}>
                                    <label className={classes.labelStyle}>Email</label>
                                    <div className={classes.InputControl}>
                                        <Input
                                            className={classes.inputText}
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={userData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.coulumnCentered}>
                            <div className={classes.halfColumn}>
                                <div className={classes.field}>
                                    <label className={classes.labelStyle}>Type of Project</label>
                                    <div className={classes.InputControl}>
                                        <select className={classes.optionContainer} value={selectedOption} onChange={handleOptionChange}>
                                            <option value="" />
                                            {options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        {selectedOption && <p>You selected: {selectedOption}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className={classes.halfColumn}>
                                <div className={classes.field}>
                                    <label className={classes.labelStyle}>Budget</label>
                                    <div className={classes.InputControl}>
                                        <select className={classes.optionContainer} value={selectedOptionTwo} onChange={handleOptionsChange}>
                                            <option value="" />
                                            {optionTwo.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        {selectedOptionTwo && <p>You selected: {selectedOptionTwo}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.messagecoulumnCentered}>
                            {/* <div className={classes.messagehalfColumn}> */}
                            {/* <div className={classes.messagefield}> */}
                            <label className={classes.labelStyle}>Additional Details</label>
                            <div className={classes.InputControl}>
                                <textarea className={classes.textareaContainer} name="message" value={userData.message} onChange={handleInputChange} />
                            </div>
                            {/* </div> */}
                            {/* </div> */}
                        </div>
                        <div className={classes.coulumnCentered}>
                            <div className={classes.halfColumn}>
                                <div className={classes.field}>
                                    <div className={classes.InputControl}>
                                        <Button className={classes.buttonStyle} type="submit" onClick={PostData}>Submit</Button>
                                    </div>
                                    {error && (
                                        <Typography variant="body1" color="error">
                                            Please fill in all fields
                                        </Typography>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default ConversationForm;
