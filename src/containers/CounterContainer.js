import React from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {increment,decrement} from '../modules/counter';
import {incrementAsync , decrementAsync} from '../modules/counter';
import {useSelector, useDispatch} from 'react-redux';

function CounterContainer() {
  
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();
  
    const onIncrement = () => {
      dispatch(incrementAsync());
    };

    const onDecrement = () => {
      dispatch(decrementAsync());
    };

    return (
      <Counter number={number} onIncrement={onIncrement} onDecrement={onDecrement} />
    );

  }
  
  export default CounterContainer;