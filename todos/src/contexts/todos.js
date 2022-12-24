import { createContext, useContext, useReducer } from "react";

const initialState = [

    {id:1 , text: "이마트 장보기" , done : true} ,
    {id:2 , text: "강아지 산책시키기" , done : false} ,
    {id:3 , text: "앞마당 눈 쓸기" , done : false} ,
    {id:4 , text: "오리 밥주기" , done : true} ,
    {id:5 , text: "선인장 밭에 심기" , done : false} ,
    {id:6 , text: "배추 씨 뿌리기" , done : true} ,
    {id:7 , text: "크리스마스 트리꾸미기" , done : false} ,

];

function reducer(state, action){
    switch(action.type){
        case "CREATE_TODO" :
            return state.concat({id: action.id , text:action.text, done:false });

        case "TOGGLE_TODO" :
            return state.map((todo) => todo.id === action.id ? {...todo, done: !todo.done} :todo);

        case "REMOVE_TODO" :
            return state.filter((todo) => todo.id !== action.id);

            default:
            return state;
    }

}

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);


export function TodoProvider({children}){

    const [state, dispatch] = useReducer(reducer , initialState);
    return( 
    <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
            {children}
        </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
    );
}


export function useTodoState(){

    const context = useContext(TodoStateContext);
    if(!context) throw Error("Todo Provider 없음");
    return context;

}

export function useTodoDispatch(){

    const context = useContext(TodoDispatchContext);
    if(!context) throw Error("Todo Provider 없음");
    return context;

}