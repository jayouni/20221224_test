import styled from "styled-components";
import { useTodoState } from "../contexts/todos";
import TodoItem from "./TodoItem";

function TodoBody(){

    const todos = useTodoState();
    return (
    <BodyBlock>
        {todos.map((todo) =>  (
        <TodoItem key={todo.id} todo={todo} />
    ))} 
    </BodyBlock>
    );

}

const BodyBlock = styled.ul`
    
    flex:1;
    overflow-x: hidden;
    overflow-y: auto;
    border-bottom: 1px solid #eee;

`;

export default TodoBody;