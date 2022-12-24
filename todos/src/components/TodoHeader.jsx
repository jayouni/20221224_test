import styled from "styled-components";
import { useTodoState } from "../contexts/todos";

function TodoHeader(){

    const date = new Date();
    const dateStr = date.toLocaleDateString("ko-KR",{
        dateStyle:"full",
        
    });

    const todos = useTodoState();
    const doneCount = todos.filter((todo) =>todo.done).length;

    return (
    <Header>
        <p>{dateStr}</p>
        <span>완료 : {doneCount}/{todos.length}</span>     
    </Header>
    );
    

}

const Header = styled.div`
    padding: 20px 10px;
    border: 1px solid #eee;
       
    p{  
        font-size: 1.2rem;
        font-weight: bold;
        color: #737373;
        
    }

    span{

        font-size: 0.5 rem;
        color: pink;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

`;

export default TodoHeader;