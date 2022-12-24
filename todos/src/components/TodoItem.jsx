
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../contexts/todos";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';

function TodoItem({todo}){
    const {id, text , done} =todo;

    const dispatch = useTodoDispatch();

    const handleRemove = ()=> {

        dispatch({type : "REMOVE_TODO" , id});
          
    };

    
    return (
    <ItemBlock done={done}>

        {done ? <AAiFillHeart onClick={() => dispatch({type:"TOGGLE_TODO", id})} /> : 
        <AAiOutlineHeart onClick={() => dispatch({type:"TOGGLE_TODO", id})}/>}

        <p>{text}</p>
        <TrashBins onClick={handleRemove} />
    </ItemBlock>
    );
    

}

const AAiFillHeart = styled(AiFillHeart)`
    color : pink;
`;

const AAiOutlineHeart = styled(AiOutlineHeart)`
    color : pink;
    
`;

const ItemBlock = styled.li`
    display: flex;
    align-items: center;
    padding : 10px 10px ;
    border-bottom: 1px solid #eee;

    font-size : 0.9rem;
    user-select: none;

    p{
        flex:1;
        
    ${({done}) => done && css`
        text-decoration: line-through;
        color:gray;
        
    `}    

    }

`;

const TrashBins = styled(FiTrash2)`
    
    cursor: pointer;
    color:#737373;
    &:hover{
        
        color:red;
    }

`


export default TodoItem;