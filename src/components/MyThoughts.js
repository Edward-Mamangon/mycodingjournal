import React, { useRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MyThoughtsList from './MyThoughtsList';


const MyThoughts = () => {
    const dateRef = useRef(null);
    const thoughtsRef = useRef(null);
    const [id, setId] = useState(Date.now());
    const [thoughtsList, setThoughtsList] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const thoughtsObject = {
            id : id,
            date : dateRef.current.value,
            thoughts : thoughtsRef.current.value
        }

        // alert(JSON.stringify(thoughtsObject))
        setThoughtsList([...thoughtsList, thoughtsObject]);

        dateRef.current.value = null;
        thoughtsRef.current.value = null;
        setId(Date.now());
       
    }

    useEffect(() => {
        localStorage.setItem('MyThoughts', JSON.stringify(thoughtsList));
    }, [thoughtsList] )



  return (
        <Box>
            <h3>My Thoughts for the Day</h3>
            <form onSubmit={handleSubmit}>
                <TextField inputRef={dateRef} type="date" id="filleds-basic" label="" variant="filled" required/> <br/><br/>
                <TextField inputRef={thoughtsRef} id="filled-basic" multiline label="My thoughts" variant="filled" rows={2} maxRows={6} required/> <br/><br/>
        
                <Button type="submit" variant="outlined">SAVE</Button>
            </form>

            <MyThoughtsList arr={thoughtsList}/>
        </Box>
  )
}

export default MyThoughts