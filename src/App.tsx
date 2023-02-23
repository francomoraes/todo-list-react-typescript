import React, { useState } from 'react';
import InputField from './components/InputField';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import TodoList from './components/TodoList';
import { SxApp, SxHeading } from './components/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

    // React.useEffect(() => {
    //     const keyDownHandler = (event: any) => {
    //         if (event.key === 'Enter') {
    //             event.preventDefault();

    //             const allInputs = document.querySelectorAll('input');
    //             const anyInputsFocused = Array.from(allInputs).some(
    //                 (input) => input === document.activeElement
    //             );

    //             const inputRef = document.getElementById('add_task')!;

    //             if (anyInputsFocused) {
    //                 if (document.activeElement === inputRef) {
    //                     handleAdd(event);
    //                 }
    //             } else {
    //                 inputRef.focus();
    //             }
    //         }
    //     };

    //     document.addEventListener('keydown', keyDownHandler);

    //     return () => {
    //         document.removeEventListener('keydown', keyDownHandler);
    //     };
    // });

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo('');
        }
    };

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return;

        let add,
            active = todos,
            complete = completedTodos;

        if (source.droppableId === 'TodosList') {
            add = active[source.index];
            active.splice(source.index, 1);
        } else {
            add = complete[source.index];
            complete.splice(source.index, 1);
        }

        if (destination.droppableId === 'TodosList') {
            active.splice(destination.index, 0, add);
        } else {
            complete.splice(destination.index, 0, add);
        }

        setCompletedTodos(complete);
        setTodos(active);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Box sx={SxApp}>
                <Typography sx={SxHeading}>Taskify</Typography>
                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    handleAdd={handleAdd}
                />
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    completedTodos={completedTodos}
                    setCompletedTodos={setCompletedTodos}
                />
            </Box>
        </DragDropContext>
    );
};

export default App;
