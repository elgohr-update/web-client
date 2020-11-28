import React, {useEffect, useState} from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import getUserPublicInfoApi from '../api/getUserPublicInfoApi';
import setUserPublicInfoApi from '../api/setUserPublicInfoApi';
import Avatar from "@material-ui/core/Avatar";
import Logo from "../assets/logo.png";
import Pp_placeholder from "../assets/pp_placeholder.png"
import Typography from "@material-ui/core/Typography";
import {PickeatTextField} from "../components/PickeatTextField";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles(theme => ({
    main: {
        paddingTop: '5rem',
        boxSizing: 'border-box',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftSection: {
        height: '100%',
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
    },
    userInfoContainer: {
        display: 'flex',
        height: '70%',
        paddingLeft: '5%',
        paddingTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    showUserInfoContainer: {
        display: 'flex',
        width: '30%',
        borderRadius: '16px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#d3d3d3',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    formUserInfoContainer: {
        display: 'flex',
        width: '45%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    menuSection: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    rightSection: {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'red',
        height: '100%',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
    },
    mainContentSection: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    menuButtonContainer: {
        width: '100%',
        height: '75px'
    },
    menuButton: {
        border: 'solid 1px #d6d6d6',
        borderTop: 'none',
        width: '100%',
        height: '100%',
        textTransform: 'none',
        fontFamily: 'Colfax-Regular',
        fontSize: '14px',
        justifyContent: 'normal'
    },
    menuButtonText: {
        position: 'absolute',
        left: '22%',
        lineHeight: '0px',
    },
    menuButtonSelected: {
        position: 'absolute',
        left: '85%',
        width: '7%'
    }
}));

export default function Profil(props) {
    const classes = useStyles();

    const [isUserInfoLoading, setIsUserInfoLoading] = useState(true);
    const [isUserUploadProductsLoading, setIsUserUploadProductsLoading] = useState(true);
    const [isUserReservationProductsLoading, setIsUserReservationProductsLoading] = useState(true);
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [currentName, setCurrentName] = useState();
    const [currentDescription, setCurrentDescription] = useState();


    useEffect(() => {
        getUserPublicInfoCall()
    }, []);

    const getUserPublicInfoCall = () => {
        setIsUserInfoLoading(true);
        getUserPublicInfoApi().then((response) => {
            setUserName(response.name);
            setUserDescription(response.description);
            setCurrentName(response.name);
            setCurrentDescription(response.description);
            setIsUserInfoLoading(false);
        });
    }

    const setUserPublicInfoCall = (newName, newDescription) => {
        setUserPublicInfoApi(newName, newDescription).then((response) => {

        });
    }


    const buildUserInfo = () => {
        if (isUserInfoLoading) {
            return (
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress/>
                </div>
            );
        } else {
            return (
                <div className={classes.userInfoContainer}>
                    <div className={classes.showUserInfoContainer}>
                        <img style={{width: '100%', height: 'auto', borderTopLeftRadius: '16px', borderTopRightRadius: '16px'}} src={Pp_placeholder}/>
                        <text style={{paddingLeft: '5%', textTransform: 'capitalize'}}>
                            {currentName},
                        </text>
                        <text style={{paddingLeft: '5%', textTransform: 'capitalize'}}>
                            {currentDescription}
                        </text>
                    </div>
                    <div className={classes.formUserInfoContainer}>
                        <Typography component="h1" variant="h5">
                            User Info :
                        </Typography>
                        <form className={classes.form}>
                            <PickeatTextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="name"
                                label="name"
                                name="labelname"
                                autoComplete="name"
                                autoFocus
                                value={userName}
                                onChange={(event => setUserName(event.target.value))}
                            />
                            <PickeatTextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="desciption"
                                label="description"
                                desciption="labeldesciption"
                                autoComplete="desciption"
                                autoFocus
                                value={userDescription}
                                onChange={(event => setUserDescription(event.target.value))}
                            />
                            <Button
                                style={{width: '50%'}}
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setUserPublicInfoCall(userName, userDescription);
                                    getUserPublicInfoCall();
                                }}
                                className="pickeatBtn"
                            >
                                Edit
                            </Button>
                        </form>
                    </div>
                </div>
            );
        }
    }

    const buildUserUploadProducts = () => {
        if (isUserUploadProductsLoading) {
            return (
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress/>
                </div>
            );
        } else {
            return (
                <>

                </>
            );
        }
    }

    const buildUserReservationProducts = () => {
        if (isUserReservationProductsLoading) {
            return (
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress/>
                </div>
            );
        } else {
            return (
                <>

                </>
            );
        }
    }

    return (
        <div className={classes.main}>
            <div className={classes.leftSection}>
                {buildUserInfo()}
            </div>
            <div className={classes.rightSection}>
                {buildUserUploadProducts()}
                {buildUserReservationProducts()}
            </div>
        </div>
    );
}