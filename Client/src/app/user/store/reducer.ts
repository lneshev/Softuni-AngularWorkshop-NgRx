export interface IState {
    entities: any[] | null;
}

const defaultState: IState = {
    entities: null
}

export function reducer(state = defaultState, action: any) {
    if (action.type === 'LOAD_USERS_SUCCESS') {
        return { ...state, entities: action.payload };
    }
    else if (action.type === 'DELETE_USER') {
        return {...state, entities: state.entities?.filter(x => x.id !== action.payload )}
    }
    return state;
}