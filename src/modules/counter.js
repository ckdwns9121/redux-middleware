const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment =()=>({type:INCREMENT});
export const decrement =()=>({type:DECREMENT});

//thunk 함수 생성
export const incrementAsync = () =>dispatch =>{
  setTimeout(() =>dispatch(increment()),1000);
};
export const decrementAsync = () =>dispatch =>{
  setTimeout(() =>dispatch(decrement()),1000);
};
const initState = 0;

export default function counter(state = initState, action) {
    switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  }