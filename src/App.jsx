import { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import './App.css'
import PageContainer from './components/PageContainer'
import FormAdd from './components/FormAdd'
import Todo from './components/Todo'
import { removeTodo } from './redux/slices/TodoSlices';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  const dispatch = useDispatch()

  const todoList = useSelector(state => state.todo.list)


  const [deleteTodo, setDeleteTodo] = useState({})

  const handleClickRemove = (todo) => {
    setDeleteTodo(todo)
    dispatch(removeTodo(deleteTodo))
  }


   

 


  return (
    <>

    <PageContainer>
      <FormAdd/>


      <TableContainer component={Paper}>
            <Table style={{ textAlign: "center", verticalAlign: "middle" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell >Action</TableCell>
                        <TableCell colSpan={2}>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todoList && todoList.map(todo => (
                        <Todo 
                            key={todo.id} 
                            id={todo.id}
                            name={todo.name} 
                            isDone={todo.isDone} 
                            createdAt={todo.createdAt}
                            updatedAt={todo.updatedAt}
                            onClickRemove={handleClickRemove}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <ToastContainer/>
    </PageContainer>

    </>
  )
}

export default App
