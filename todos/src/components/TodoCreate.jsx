import { useRef } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../contexts/todos";
import { useInputs } from "../hooks/useInputs";

function TodoCreate(){
    const [inputs,onChange,reset] = useInputs({
        text:"",
    });
 
    const {text} =inputs;

    const dispatch = useTodoDispatch();
    const nextId = useRef(8);

    const handleSubmit = () => {

        if(!text) return;
        dispatch({type:"CREATE_TODO" , id:nextId.current , text});
        reset();
        nextId.current++;
        
    };

    return (
    <CreateBlock>
        <InputBox >     
            <input type="text" name="text" onChange={onChange} value={text}/>  
        </InputBox>
        <BtnSubmit onClick={handleSubmit} >
            Add
        </BtnSubmit>
    </CreateBlock>
    
    );

}



const CreateBlock = styled.div`

    padding :20px 10px;

`;

const InputBox = styled.div`
    
    border:1px solid #ddd;

        input{
        width:100%;
        padding: 5px 0;
        border: none;
        outline: none;
        
    }

`;

const BtnSubmit = styled.button`

    width: 100%;
    padding: 5px 0;
    margin-top: 5px;
    border:none;
    outline: none;
    background-color: pink;
    color:#fff;
    font-family: 'Courier New', Courier, monospace;

`;

export default TodoCreate;