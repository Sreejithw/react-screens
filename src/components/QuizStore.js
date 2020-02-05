import React, { useState, createContext } from "react";
import { useForm } from 'react-hook-form';

export const PeriodListContext = createContext();
export const PeriodFormContext = React.createContext([{}, function(){}]);
export const QuizForm = React.createContext([{}, function(){}]);
export const FormValues = createContext();
export const SaveButton = createContext();
export const TableAnimation = createContext();


const QuizStore = ({children}) => {
    
    const [open, setOpen] = useState(false);
    const [openQuiz, setOpenQuiz] = React.useState(false);
    const [perioddata, setperiodData] = useState([
        { title: "Event Number 1", question: "Question 1", answer: "Answer 1"},
        { title: "Event Number 2", question: "Question 2", answer: "Answer 2"},
        { title: "Quiz Number 1", question: "Question 3", answer: "Answer 3"},
        { title: "Quiz Number 2", question: "Question 4", answer: "Answer 4"},
        { title: "Quiz Number 3", question: "Question 5", answer: "Answer 5"},
        { title: "Quiz Number 4", question: "Question 6", answer: "Answer 6"},
        { title: "Quiz Number 5", question: "Question 7", answer: "Answer 7"},
    ]);
    const [checked, setChecked] = React.useState(true);
    const [savebtn, setSavebtn] = React.useState(false);
    const [addbtn, setAddbtn] = React.useState(true);
    const [rowsData,setRowsData] = React.useState({});
    const { register, handleSubmit,errors, setValue , getValues } = useForm();

    return(
        <TableAnimation.Provider value = {[checked, setChecked]}>
            <SaveButton.Provider value={[savebtn, setSavebtn,addbtn, setAddbtn, rowsData, setRowsData]}>
                <FormValues.Provider value={ {register, handleSubmit,errors, setValue , getValues}}>
                    <PeriodFormContext.Provider value = {[open,setOpen]}>
                        <QuizForm.Provider value = {[openQuiz, setOpenQuiz]}>
                            <PeriodListContext.Provider value = {[perioddata,setperiodData]}>
                                {children}
                            </PeriodListContext.Provider>
                        </QuizForm.Provider>
                    </PeriodFormContext.Provider>
                </FormValues.Provider>
            </SaveButton.Provider>
        </TableAnimation.Provider>
    );
}

export default QuizStore;