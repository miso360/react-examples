import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋값 변경
const INSERT = 'todos/INSERT';  // 새로운 todo 등록
const TOGGLE = 'todos/TOGGLE';  // todo를 체크, 해제
const REMOVE = 'todos/REMOVE';  //todo를 제거
 
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert가 호출될 때마다 1씩 더해집니다.
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '할일1',
            done: true
        },
        {
            id: 2,
            text: '할일2',
            done: false
        }
    ],
};

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
        [INSERT]: (state, action) => ({ ...state, todos: state.todos.concat(action.payload) }),
        [TOGGLE]: (state, action) => ({ 
            ...state, 
            todos: state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
            ),
        }),
        [REMOVE]: (state, action) => ({ 
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.id),
        }),
    },
    initialState
);

export default todos;