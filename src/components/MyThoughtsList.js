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

// const handleDelete = () => {
   
//     localStorage.removeItem('MyThoughts');
// }

// const deleteTodo = (title) => {
//     const deletefilter = todos.filter((element, index) => {
//       return element.title !== title
//     })
//     setTodos(deletefilter);
// }



const MyThoughtsList = (props) => {
    const mark = useStyles();
    const [todos, setTodos] = useState([]);

    const handleDelete = (thoughtsList) => {
        const deletefilter = todos.filter((element, index) => {
            return element.thoughtsList !== thoughtsList
        })
        setTodos(deletefilter);
    }

  return (
    <div>
        <h3>My Thoughts for the Day</h3>
       <table className='table striped' style={{width:'400px'}}>
            <tr>    
                <th></th>
                <th></th>
            </tr>
            { props.arr.map((list) => (
           
                <tr className={mark.tr}>
                    <td>{list.date} <br/>{list.thoughts}</td>
                    <td><Button variant="outlined" onClick={handleDelete}>DELETE</Button></td>       
                </tr>
               )
            )}
        </table>

        {/* ============================================== */}
        {/* <h3>My Thoughts for the Day</h3>
        <List>
            { props.arr.map((list) => (
            <ListItem>
                <ListItemText>
                    {list.date} <br/>
                    {list.thoughts} 
                    <Button variant="outlined" onClick={handleDelete}>DELETE</Button>
                </ListItemText>

            </ListItem>
            ))
            }
        </List> */}

    </div>
  )
}

export default MyThoughtsList