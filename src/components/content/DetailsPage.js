import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import TextAreaAutoSize from '@material-ui/core/TextareaAutosize';
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

    menuItem: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        height: 50,
        backgroundColor: '#eaeaea',
        color: 'grey'
    },

    inputField: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: '#eaeaea',
        fullWidth : true
    },

    root: {
        width: 800,
        height: 50,
        color: 'grey'
    }
}));

//-------------------------------- INPUT FIELD ----------------------------------------

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

//----------------------------------DROP DOWN MENU--------------------------------

const DropDownMenu = () => {

    const dropDownInlineClass = useStyles();

    let dropDownDefaultMessage = "Please Select the category for the course";

    const [dropMenuState, setMenuState] = useState(true);
    const [menuItemContent, setMenuContent] = useState(dropDownDefaultMessage);
    const [anchorEl, setAnchorEl] = useState(null);

    const courseType = [
        "Urban Search and Rescue",
        "Rural Search and Rescue",
        "Fuel Containment",
        "Chemical Containment",
        "Vehicle Incident",
        "Environmental Incident"
    ]

    const IconButtonAndText = () => {

        return (
                <div>
                     <ArrowDownIcon/>
                     {menuItemContent}
                </div>
        )
    }

    const OnMenuClicked = (event) => {
        
        setMenuState (!dropMenuState);
        
        if (dropMenuState)
        {
            setAnchorEl(event.currentTarget);
        }
        else
        {
            setMenuContent(dropDownDefaultMessage);
            setAnchorEl(null);
        }
    }

    const SetContent = (newContent) => {
        setMenuContent(newContent);
        setAnchorEl(null);
    }
  

    return (
        <div>
            <MenuItem
                className = {dropDownInlineClass.menuItem}
                onClick = {OnMenuClicked}
            >
                {IconButtonAndText()}
            </MenuItem>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={OnMenuClicked}
            >

                <MenuItem className = {dropDownInlineClass.root} onClick={() => SetContent(courseType[0])}>{courseType[0]}</MenuItem>
                <MenuItem className = {dropDownInlineClass.root} onClick={() => SetContent(courseType[1])}>{courseType[1]}</MenuItem>
                <MenuItem className = {dropDownInlineClass.root} onClick={() => SetContent(courseType[2])}>{courseType[2]}</MenuItem>
                <MenuItem className = {dropDownInlineClass.root} onClick={() => SetContent(courseType[3])}>{courseType[3]}</MenuItem>
                <MenuItem className = {dropDownInlineClass.root} onClick={() => SetContent(courseType[4])}>{courseType[4]}</MenuItem>
                <MenuItem className = {dropDownInlineClass.root} onClick={() => SetContent(courseType[5])}>{courseType[5]}</MenuItem>
               
            </Menu>
            
            
        </div>
    )
}

//-------------------------------------- COURSE DESCRIPTION --------------------------------------------

const CourseDescription = () => {

    const courseDescripStyle = useStyles();

    return (
        <TextField
            id = "Question name"
            label = "Course Description"
            variant = "filled"
            placeholder = "Write the description for the course"
            fullWidth
        >

        </TextField>
    )

}




function DetailContent() {

    const classes = useStyles();

    return (
        <Paper className = {classes.paper}>

            {inputField("type in course name", "Course Name")}
            {DropDownMenu()}
            {CourseDescription()}

            
        </Paper>
    )

}

export default DetailContent;
