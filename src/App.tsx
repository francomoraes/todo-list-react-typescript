import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import SingleTodo from './components/SingleTodo';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
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
            <div className="App">
                <span className="heading">Taskify</span>
                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    handleAdd={handleAdd}
                />
                <div className="container">
                    <Droppable droppableId="TodosList">
                        {(provided, snapshot) => (
                            <div
                                className={`todos ${
                                    snapshot.isDraggingOver ? 'dragactive' : ''
                                }`}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <span className="todos__heading">
                                    Active Tasks
                                </span>
                                {todos.map((todo, index) => (
                                    <SingleTodo
                                        index={index}
                                        todo={todo}
                                        key={todo.id}
                                        todos={todos}
                                        setTodos={setTodos}
                                    />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="TodosRemove">
                        {(provided, snapshot) => (
                            <div
                                className={`todos remove ${
                                    snapshot.isDraggingOver
                                        ? 'dragcomplete'
                                        : ''
                                }`}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <span className="todos__heading">
                                    Completed Tasks
                                </span>
                                {completedTodos.map((todo, index) => (
                                    <SingleTodo
                                        index={index}
                                        todo={todo}
                                        todos={completedTodos}
                                        key={todo.id}
                                        setTodos={setCompletedTodos}
                                    />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        </DragDropContext>
    );
};

export default App;
