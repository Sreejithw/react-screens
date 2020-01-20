import React,{useState, useEffect, useContext} from 'react';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table'
import { PeriodListContext } from './PeriodListContext'; 


export default function PeriodList() {
    
      const [perioddata, setperiodData] = useContext(PeriodListContext)
  
      let columndata =[
        { title:" ", field: "name" },
        { title: " "},
      ];
 

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
                editable={{
                  /*onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        {
                          let newData = data;
                          const index = newData.indexOf(oldData);
                          data[index] = newData;
                          this.setState({ data }, () => resolve());
                        }
                        resolve()
                      }, 1000)
                  }),*/
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