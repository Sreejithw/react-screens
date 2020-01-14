import React,{useState, useEffect} from 'react';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Popper } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Periods from './Periods.js';
import MaterialTable from 'material-table'
import * as _ from "lodash";

const useStyles = makeStyles(theme => ({ 
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
    Popper: {
        zIndex: 12
    },
    Fab: {
        float:'right',
        zIndex: 12
    }
}));



export default function Content() {
    const classes = useStyles();
    
    //-------UseStates for dropdown-------//
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    
    //-------UseStates for Quiz form -----//
    const [openQuiz, setOpenQuiz] = React.useState(false)

    //-------Handle Toggles for dropdown-------//
    const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
    };

    let testData = [
      { name: "Event Number 1"},
      { name: "Event Number  2"},
      { name: "Quiz Number 1"},
      { name: "Quiz Number 2"},
      { name: "Quiz Number 3"},
      { name: "Quiz Number 4"},
      { name: "Quiz Number 5"},
    ];

    
    let columndata =[
      { title:" ", field: "name" },
      { title: " "},
    ];

    let [data, setData] = useState(testData);


    useEffect(() => {
      //debugger;
      if (data.length < 100) {
          console.log(data.length);
      }
    }, [data]);


    const handleClose = event => {
        let data_id = event.target.getAttribute("data-id");
        if(data_id === '3'){
            setOpenQuiz(!openQuiz);

            console.log(event.target);
        }
        else {
            console.log('Something else clicked');
        }
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }

      prevOpen.current = open;
    }, [open]);

  

    return (
        <Paper className={classes.paper}>
            <Fab
                color="primary"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.Fab}
            >
                <AddIcon />
            </Fab>
            <Popper className={classes.Popper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem data-id="1" onClick={handleClose}>Guide</MenuItem>
                        <MenuItem data-id="2" onClick={handleClose}>Notification</MenuItem>
                        <MenuItem data-id="3" onClick={handleClose}>Quiz</MenuItem>
                        <MenuItem data-id="4" onClick={handleClose}>Event</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <MaterialTable
                columns={columndata}
                data={data}
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
                  onRowUpdate: (newData, oldData) =>
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
                  }),
                  onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                          setTimeout(() => {
                              let newData = data;
                              const index = newData.indexOf(oldData);
                              newData.splice(index, 1);
                              setData(newData);
                              resolve();
                          }, 1000);
                      })
              }}
              
                
              />
            {openQuiz && <Periods />}
            
        </Paper>
    );

}