import './App.css';
import Grid from '@mui/material/Grid';
import MyThoughts from './components/MyThoughts';
import MyTasks from './components/MyTasks';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6}>
            <MyThoughts/>
        </Grid>
        <Grid item xs={6}>
            <MyTasks/> 
        </Grid>
        
        
      </Grid>
    </div>
  );
}

export default App;
