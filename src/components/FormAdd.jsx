import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import { addTodo } from '../redux/slices/TodoSlices';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FormAdd() {

const [todo,setTodo] = useState('');


const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault()
if(todo == ''){
  toast.error('Boş Bırakılamaz');
  return;
}
else{
  const newTodo = {
    id: Math.floor(Math.random() * 888888) + 100000,
    name: todo,
    isDone: false,
    createdAt: (new Date().toLocaleString())
}
dispatch(addTodo(newTodo))
setTodo('')
toast.success("Başarıyla Eklendi")
}
}



  return (
    <Box 
      component="form" 
onSubmit={handleSubmit}
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexWrap:'wrap',
        maxWidth: 700, 
        mx: 'auto',
        my:'30px',
        
        gap: 2,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9}>
          <TextField
            label="New Todo"
            variant="outlined"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FormAdd;
