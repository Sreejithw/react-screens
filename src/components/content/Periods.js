import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { PeriodListContext,FormValues, QuizForm, TableAnimation, SaveButton } from '../QuizStore'; 
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
    //-------UseStates for Add Period ----//
    const { register, handleSubmit,errors, setValue , getValues } = useContext(FormValues);
    //-------Handle Togge for Period Form Submit-----//
    const [perioddata, setperiodData] = useContext(PeriodListContext)

    const [openQuiz, setOpenQuiz] = React.useContext(QuizForm);

    const [formcount, setFormcount] = useState(1);

    const [checked, setChecked] = React.useContext(TableAnimation);
    
    const [savebtn, setSavebtn, addBtn, setAddbtn,rowsData, setRowsData] = React.useContext(SaveButton);
    
    
    //-------Update state of the period table data-----//
    const onSubmit = data => {
        setFormcount((formcount+1));
        
        let newdata = {title:"Quiz Number "+ formcount,...data};
        //console.log(newdata); 
        setperiodData(prevData => [...prevData,newdata])
        
    };

    const handleSave = data => {
        const values = getValues()
        setRowsData(val =>{
            val.question = values.question;
            val.answer = values.answer;
        });
    }

    return (
        <React.Fragment>
        
                <Typography variant="h6" gutterBottom>
                    Add Period 
                </Typography>
                <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                    key="Confirmation Code"
                    id="quiz-question"
                    label="Question"
                    placeholder="Question"
                    multiline
                    fullWidth
                    rows="4"
                    variant="filled"
                    name="question"
                    type="text"
                    inputRef={register}
                    />
                    <TextField
                    id="quiz-answer"
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
                        <Button 
                        className={classes.cancelBtn} 
                        variant="outlined"
                        onClick={() =>{
                            setOpenQuiz(prev => !prev);
                            setChecked(prev => !prev);

                        }}>
                        Cancel
                        </Button>
                        { addBtn && <Button 
                        variant="outlined" 
                        color="primary" 
                        type="submit" 
                        >
                            Add
                        </Button>}

                        {  savebtn && <Button 
                        variant="outlined" 
                        color="primary"  
                        onClick={ handleSave }>
                            Save
                        </Button>}
                        
                    </div>
                </form>
            
        </React.Fragment>
    );
}