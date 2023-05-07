import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import { Button, Link } from '@mui/material';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import hashtag from '../../../assets/hashtag.jpg';

const useStyles = makeStyles(() => ({
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
}));

function FormNavbar() {
    const classes = useStyles();

    return (
        <>
            <nav className={classes.navContainer}>
                <div className={classes.containerTwo}>
                    <div className={classes.logoContainer} />
                    <Link legacyBehaviour href="/" className={classes.logoItem} target="_blank" rel="noreferrer">
                        <Image src={hashtag} alt="hashtag_logo" />
                    </Link>
                </div>
                <div className={classes.navMenu}>
                    <div className={classes.navEnd}>
                        <Button className={classes.navItem} startIcon={<GiAnticlockwiseRotation className={classes.navIcon} />} />
                        <Link legacyBehaviour href="/">
                            <Button className={classes.navItem} startIcon={<RxCross2 className={classes.navIcon} />} />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default FormNavbar;
