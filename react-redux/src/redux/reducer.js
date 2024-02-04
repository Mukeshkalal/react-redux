const initialStore = {
    counter: 0,
}

export const countEdit = (state = initialStore, action) => {
    if (action.type === 'PLUS') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'MINUS') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    return state;
}