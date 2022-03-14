import React, { useRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MyTasksList from './MyTasksList';


const MyTasks = () => {
    const dateRef = useRef(null);
    const taskRef = useRef(null);
    const [id, setId] = useState(Date.now());
    const [tasksList, setTasksList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tasksObject = {
            id : id,
            date : dateRef.current.value,
            task : taskRef.current.value
        }

        // alert(JSON.stringify(thoughtsObject))
        setTasksList([...tasksList, tasksObject]);

        dateRef.current.value = null;
        taskRef.current.value = null;
        setId(Date.now());
       
    }

    useEffect(() => {
        localStorage.setItem('MyTasks', JSON.stringify(tasksList));
    }, [tasksList] )



  return (
        <Box>
            <h3>My Tasks for the Day</h3>
            <form onSubmit={handleSubmit}>
                <TextField inputRef={dateRef} type="date" id="filled-basic" label="" variant="filled" required/> <br/><br/>
                <TextField inputRef={taskRef} id="filled-basic" multiline label="Enter New Task" variant="filled" rows={2} maxRows={6} required/> <br/><br/>
        
                <Button type="submit" variant="outlined">SAVE</Button>
            </form>

            <MyTasksList arr={tasksList}/>
        </Box>
  )
}

export default MyTasks