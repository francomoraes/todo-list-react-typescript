import React, { useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Todo } from '../App';

import './styles.css';

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
                <form
                    className={`todos__single ${
                        snapshot.isDragging ? 'drag' : ''
                    }`}
                    onSubmit={(event) => handleEdit(event, todo.id)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {edit ? (
                        <input
                            ref={inputRef}
                            value={editTodo}
                            onChange={(event) =>
                                setEditTodo(event.target.value)
                            }
                            className="todos__single__text"
                        />
                    ) : todo.isDone ? (
                        <s className="todos__single__text">{todo.todo}</s>
                    ) : (
                        <span className="todos__single__text">{todo.todo}</span>
                    )}

                    <div>
                        <span
                            className="icon"
                            onClick={() => !edit && setEdit(!edit)}
                        >
                            <AiFillEdit />
                        </span>
                        <span
                            className="icon"
                            onClick={() => handleDelete(todo.id)}
                        >
                            <AiFillDelete />
                        </span>
                        <span
                            className="icon"
                            onClick={() => handleDone(todo.id)}
                        >
                            <MdDone />
                        </span>
                    </div>
                </form>
            )}
        </Draggable>
    );
};

export default SingleTodo;