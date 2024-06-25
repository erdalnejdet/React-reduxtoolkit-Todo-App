import React from 'react'
import { useDispatch } from 'react-redux'
import { updateStatus } from '../redux/slices/TodoSlices';
import { TableRow, TableCell, IconButton, Badge } from "@mui/material";
import { Check, Close } from "@mui/icons-material";


function Todo({id, name, isDone, createdAt, updatedAt, onClickRemove}) {
const dispatch = useDispatch();

const handleClick = () => {
  dispatch(updateStatus({ id }));
}



  return (
    <TableRow>
    <TableCell>
        <p className={`todo-item ${isDone && "done"}`}>{name} de</p>
        <p>
      {createdAt} 
          </p>
    </TableCell>
    <TableCell>
        <Badge badgeContent={isDone ? "Done" : "Pending"} color={isDone ? 'success' : 'error'} />
        {isDone && <p>{updatedAt} </p>}
      
    </TableCell>
    {!isDone && (
        <TableCell>
       <IconButton color="success" onClick={() => handleClick({ id })}>
    <Check />
</IconButton>

        </TableCell>
    )}
    <TableCell colSpan={isDone ? 2 : 1}>
        <IconButton color="error" onClick={() => onClickRemove({ id })}>
            <Close />
        </IconButton>
    </TableCell>
</TableRow>
  )
}

export default Todo