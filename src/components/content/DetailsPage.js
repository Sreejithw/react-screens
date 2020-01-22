import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import DropDown from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
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

const dropDownMenu = () => {

    return (
        <div>
            <IconButton className = {useStyles.button}>
                <ArrowDownIcon
                    size = "small"
                    fontSize = "inherit"
                />
            </IconButton>
           
            
             <DropDown

            />
        </div>
    )
}

function DetailContent() {

    const classes = useStyles();

    return (
        <Paper className = {classes.paper}>

            {inputField("type in course name", "Course Name")}
            {dropDownMenu()}
            
        </Paper>
    )

}

export default DetailContent;
