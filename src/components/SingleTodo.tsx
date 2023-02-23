import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Todo } from '../App';
import {
    CustomFormSingle,
    CustomInputSingle,
    StrikeThrough,
    SxIcon
} from './styles';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

type Props = {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (event: React.FormEvent, id: number) => {
        event.preventDefault();

        if (editTodo) {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, todo: editTodo } : todo
                )
            );
            setEdit(!edit);
        }
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided, snapshot) => (
                <CustomFormSingle
                    onSubmit={(event) => handleEdit(event, todo.id)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {edit ? (
                        <CustomInputSingle
                            ref={inputRef}
                            value={editTodo}
                            onChange={(event) =>
                                setEditTodo(event.target.value)
                            }
                            onBlur={() => setEdit(!edit)}
                        />
                    ) : todo.isDone ? (
                        <StrikeThrough sx={{ textDecoration: 'line-through' }}>
                            {todo.todo}
                        </StrikeThrough>
                    ) : (
                        <StrikeThrough>{todo.todo}</StrikeThrough>
                    )}

                    <Box>
                        <BorderColorIcon
                            sx={SxIcon}
                            onClick={() => !edit && setEdit(!edit)}
                        />
                        <DeleteIcon
                            sx={SxIcon}
                            onClick={() => handleDelete(todo.id)}
                        />
                        <DoneIcon
                            sx={SxIcon}
                            onClick={() => handleDone(todo.id)}
                        />
                    </Box>
                </CustomFormSingle>
            )}
        </Draggable>
    );
};

export default SingleTodo;
