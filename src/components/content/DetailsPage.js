import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
    },

    button: {
        margin: {
            margin: theme.spacing(1),
        }
    },

    root: {
        width: 800,
        height: 50,
        color: 'red'
    }
}));

const inputField = (placeHolderValue, labelItem) => {

    return (
        <TextField
            id = "Question name"
            label = {labelItem}
            variant = "filled"
            placeholder = {placeHolderValue}
            fullWidth
        />
    )
}



const DropDownMenu = () => {

    const dropDownInlineClass = useStyles();

    let dropDownDefaultMessage = "Please Select the category for the course";

    const [dropMenuState, setMenuState] = useState(true);
    const [menuItemContent, setMenuContent] = useState(dropDownDefaultMessage);
    const [anchorEl, setAnchorEl] = useState(null);

    const IconButtonComponent = () => {
        return (
            <ArrowDownIcon/>
        )
    }

    const OnMenuClicked = (event) => {
        
        setMenuState (!dropMenuState);
        
        if (dropMenuState)
        {
            setMenuContent(" ");
            setAnchorEl(event.currentTarget);
        }
        else
        {
            setMenuContent(dropDownDefaultMessage);
            setAnchorEl(null);
        }
    }

  

    return (
        <div>
            <MenuItem
                onClick = {OnMenuClicked}
            >
                DropDown
            </MenuItem>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={OnMenuClicked}
            >

                <MenuItem className = {dropDownInlineClass.root} onClick={OnMenuClicked}>Profile</MenuItem>
                <MenuItem className = {dropDownInlineClass.root} onClick={OnMenuClicked}>Profile</MenuItem>
                <MenuItem className = {dropDownInlineClass.root} onClick={OnMenuClicked}>Profile</MenuItem>
            </Menu>
            
            
        </div>
    )
}

function DetailContent() {

    const classes = useStyles();

    return (
        <Paper className = {classes.paper}>

            {inputField("type in course name", "Course Name")}
            {DropDownMenu()}
            
        </Paper>
    )

}

export default DetailContent;
