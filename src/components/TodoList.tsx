import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../App';
import SingleTodo from './SingleTodo';
import { CustomGrid, SxTasks } from './styles';

interface props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    completedTodos: Array<Todo>;
}

const TodoList: React.FC<props> = ({
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos
}) => {
    return (
        <Grid container mt="20px">
            <Grid item xs={12} md={6} padding="5px 10px">
                <Droppable droppableId="TodosList">
                    {(provided, snapshot) => (
                        <CustomGrid
                            sx={{
                                backgroundColor: snapshot.isDraggingOver
                                    ? '#00ddec'
                                    : '#32c3cd'
                            }}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <Typography sx={SxTasks}>Active Tasks</Typography>
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
                        </CustomGrid>
                    )}
                </Droppable>
            </Grid>
            <Grid item xs={12} md={6} padding="5px 10px">
                <Droppable droppableId="TodosRemove">
                    {(provided, snapshot) => (
                        <CustomGrid
                            sx={{
                                backgroundColor: snapshot.isDraggingOver
                                    ? '#ff2600'
                                    : '#eb6750'
                            }}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <Typography sx={SxTasks}>
                                Completed Tasks
                            </Typography>
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
                        </CustomGrid>
                    )}
                </Droppable>
            </Grid>
        </Grid>
    );
};

export default TodoList;
