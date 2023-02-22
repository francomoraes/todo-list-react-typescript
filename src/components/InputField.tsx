import React, { useRef } from 'react';
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
            onSubmit={(event) => {
                handleAdd(event);
                inputRef.current?.blur();
            }}
        >
            <input
                id="add_task"
                ref={inputRef}
                type="input"
                placeholder="Enter a task"
                className="input__box"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
            />
            <button className="input__submit" type="submit">
                Add
            </button>
        </form>
    );
};

export default InputField;
