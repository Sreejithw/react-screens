import React,{useEffect, useContext} from 'react';
import MaterialTable from 'material-table'
import {  TableAnimation, PeriodListContext, QuizForm, FormValues,SaveButton } from '../QuizStore'; 


export default function PeriodList() {
    
      const [perioddata, setperiodData] = useContext(PeriodListContext)
      const [openQuiz, setOpenQuiz] = React.useContext(QuizForm);
      const { setValue } = useContext(FormValues);
      const [savebtn, setSavebtn, addbtn, setAddbtn, rowsData, setRowsData ] = React.useContext(SaveButton);
      const [checked, setChecked] = React.useContext(TableAnimation);

      let columndata =[
        { title:" ", field: "title" },
        { title: " "},
      ];

      useEffect(() => {
          

      }, [rowsData])
      
    return (
        <MaterialTable
                columns={columndata}
                data={perioddata}
                title = "Period 1"
                localization={{
                  header:{
                    actions:" "
                  },
                  body:{
                    emptyDataSourceMessage: "No Events Provided",
                    filterRow: {
                      filterTooltip: 'Filter'
                    }
                  },
                }}
                options = {{
                  actionsColumnIndex: -1,
                  paging:false,
                  searchFieldStyle: {
                    display: "none"
                  }
                }}
                actions={[
                  {
                    icon: 'edit',
                    tooltip: 'Edit User',
                    onClick: (event, rowData) => {
                      new Promise((resolve, reject) => {
                        setRowsData(rowData);
                        setSavebtn(!savebtn);
                        setAddbtn(!addbtn);
                        setTimeout(() => {
                          setValue("question", rowData.question)
                          setValue("answer", rowData.answer)
                        },1000);
                        setChecked(prev => !prev);
                        setOpenQuiz(true);
                        resolve();
                      })
                    }
                  }
                ]}
                editable={{
                  onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                          setTimeout(() => {
                              let newData = Array.from(perioddata);
                              const index = newData.indexOf(oldData);
                              newData.splice(index, 1);
                              setperiodData(newData);
                              resolve();
                          }, 1000);
                      })
              }}
              
                
              />
    );

}