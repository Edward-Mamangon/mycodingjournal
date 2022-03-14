import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {makeStyles} from "@mui/styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';

const useStyles = makeStyles((theme) => (
    {
        tr : {color: 'black'},
        tr2 : {color: 'red'},
    }
));

const handleDelete = () => {
    localStorage.removeItem('MyTasks');
}

const MyTasksList = (props) => {
    const mark = useStyles();

    
  return (
    <div>
        <h3>My Tasks for the Day</h3>
       <table className='table striped' style={{width:'400px'}}>
            <tr>    
                <th></th>
                <th></th>
            </tr>
            { props.arr.map((list) => (
           
                <tr className={mark.tr}>
                    <td>{list.date} <br/>{list.task}</td>
                    <td><Button variant="outlined" onClick={handleDelete}>DONE</Button></td>       
                </tr>
               )
            )}
        </table>

        {/* ============================================== */}
        {/* <h3>My Tasks for the Day</h3>
        <List>
            { props.arr.map((list) => (
            <ListItem>
                <ListItemText>
                    {list.date} <br/>
                    {list.task} 
                    <Button variant="outlined" onClick={handleDelete}>DONE</Button>
                </ListItemText>

            </ListItem>
            ))
            }
        </List> */}

    </div>
  )
}

export default MyTasksList