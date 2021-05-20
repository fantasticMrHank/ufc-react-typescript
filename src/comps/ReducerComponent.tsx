import React, { useReducer } from "react"

const initState = {
    count: 100
}

type ACTIONTYPES = { type: "plus"; payload: number; } | { type: "minus"; payload: number; }


const counterReducer = (state: typeof initState, action: ACTIONTYPES) => {
    switch (action.type) {
        case 'plus':
            return {
                ...state, count: state.count + action.payload
            }
        case 'minus':
            return {
                ...state, count: state.count - action.payload
            }
        default:
            throw new Error("bad")
    }
}




export interface UseReducerComponentProps {

}

const UseReducerComponent: React.FC<UseReducerComponentProps> = () => {
    const [state, dispatch] = useReducer(counterReducer, initState);
    return (
        <div>
            <div>Current count: {state.count}</div>
            <button onClick={() => dispatch({ type: 'plus', payload: 2 })}>add</button>
            <button onClick={() => dispatch({ type: 'minus', payload: 2 })}>minus</button>
        </div>
    );
}

export default UseReducerComponent;