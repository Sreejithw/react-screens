import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    submitDiv: {
        textAlign:"right",
    },
    cancelBtn: {
        right:"10px"
    }
}));

export default function Periods() {
    const classes = useStyles();

    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data => { console.log(data) };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Add Period 
            </Typography>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                id="filled-multiline-static"
                label="Question"
                multiline
                fullWidth
                rows="4"
                variant="filled"
                name="question"
                type="text"
                inputRef={register}
                />
                <TextField
                id="filled-textarea"
                label="A.    Add your answer here"
                placeholder="Answer"
                multiline
                fullWidth
                variant="filled"
                name="answer"
                type="text"
                inputRef={register}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <div className={classes.submitDiv}>
                    <Button className={classes.cancelBtn} variant="outlined">Cancel</Button>
                    <Button variant="outlined" color="primary" type="submit">
                        Save
                    </Button>
                </div>
            </form>
        </React.Fragment>
    );
}