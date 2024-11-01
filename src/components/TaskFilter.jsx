// components/Filter.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/todoSlice';

function TaskFilter() {
    const dispatch = useDispatch();

  const handleSetFilter = (e) =>{
    dispatch(setFilter(e.target.value))
  }


  return (
    <div>
      <select onChange={handleSetFilter}>
        <option value="all">Все</option>
        <option value="alcoholic">Алкогольные</option>
        <option value="non alcoholic">Безалкогольные</option>
      </select>
    </div>
  )
}

export default TaskFilter;
