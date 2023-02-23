## Readme (en)

### App to learn and practice the basics of TypeScript with React

## <i>To Do List</i>

[Link to the App](https://francomoraes.github.io/todo-list-react-typescript/)

### Current Implementations:

-   Add tasks;
-   Remove tasks;
-   Edit tasks;
-   Strike tasks (line through);
-   Drag and drop;

### Future Implementations:

-   Focus on the add task input on Enter if there are no other inputs selected;
-   Toggle color theme;
-   Keep the tasks to localstorage;
-   Move to completed on strike;

## Implementation

The project from the course [React & TypeScript - Course for Beginners](https://www.youtube.com/watch?v=FJDVKeh7RJI) created by [Roadside Coder](https://www.youtube.com/c/RoadsideCoder) starts the application from scratch, and installing all the libraries needed to get to this final implementation.

### Code structure

The code consists of 5 main files, beeing: App, InputField, TodoList, SingleTodo.

The App hubs the rendering of the title, input field and the TodoList components, as well as the functions to drang and add the items to the list.

The InputField is a simple component to get the input data from the user.

The TodoList renders the two lists (active and completed tasks) and holds some of the logic of the drag and drop functionality.

The SingleTodo component represents each task card created by the user. The file has the functions to handle edit, delete and set to done, as well as render the component with the provided task.

Apart from the course, this project was implemented with MUI Material lib.

### Tecnologies

To work out this project some research was done on:

-   CSS
-   Material MUI
-   Typescript
    -   Interfaces
    -   Types
    -   React.Dispatch
-   Styled components
-   React hooks (useState, useEffect, useRef)
-   React-beautiful-dnd (drag and drop dependency)
-   Husky and lint-staged for pre-commit hooks
-   Prettier
    <hr>

Special thanks to [Piyush Agarwal](https://github.com/piyush-eon) and [freeCodeCamp.org](https://github.com/freeCodeCamp) for providing this straightforward and usefull course.

## Autor

Franco Moraes <br>
[![GitHub](https://i.stack.imgur.com/tskMh.png)]() [GitHub](https://github.com/francomoraes) <br>
[![LinkedIn](https://i.stack.imgur.com/gVE0j.png)]() [LinkedIn](https://www.linkedin.com/in/francomoraes/)
