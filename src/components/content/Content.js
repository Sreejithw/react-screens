import React,{ useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Popper } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Periods from './Periods.js';
import PeriodList from './PeriodList.js';
import { Collapse } from '@material-ui/core';
import { PeriodFormContext, QuizForm,TableAnimation } from '../QuizStore';

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
        zIndex: 12,
        width:40,
        height:40,
        right:"20px",
        top:"20px"
    },
    alignment:{
      display: "inherit !important"
    }
}));



export default function Content() {
    const classes = useStyles();
    
    //-------UseStates for dropdown-------//
    const [open, setOpen] = useContext(PeriodFormContext);
    const anchorRef = React.useRef(null);
    //const [openPeriod, setOpenPeriod] = useContext(PeriodFormContext);
    //-------UseStates for Quiz form -----//

    
    const [openQuiz, setOpenQuiz] = React.useContext(QuizForm)
    
    const [checked, setChecked] = React.useContext(TableAnimation);


  
    //-------Handle Toggles for dropdown-------//
    const handleToggle = () => {
      setOpen(prevOpen => !prevOpen);
      
    };


    

    const handleClose = event => {
        let data_id = event.target.getAttribute("data-id");
        if(data_id === '3'){
            setOpenQuiz(prev => !prev);
            setChecked(prev => !prev);

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
        
        <React.Fragment>
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

            <Collapse classes={{
                wrapper: classes.alignment
              }} 
              in= {checked} collapsedHeight={40} >
              <PeriodList />
            </Collapse>
            <Collapse in ={openQuiz} >
              <Periods/>
            </Collapse>    
  
        </React.Fragment>
    );

}