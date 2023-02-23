import { Button } from '@mui/material';
import React, { useRef } from 'react';
import { SxButton, CustomForm, CustomInput } from './styles';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <CustomForm
            onSubmit={(event) => {
                handleAdd(event);
                inputRef.current?.blur();
            }}
        >
            <CustomInput
                id="add_task"
                ref={inputRef}
                type="input"
                placeholder="Enter a task"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
            />
            <Button sx={SxButton} type="submit">
                Add
            </Button>
        </CustomForm>
    );
};

export default InputField;
