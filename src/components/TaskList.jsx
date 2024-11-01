// components/TaskList.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../store/todoSlice';
import TaskFilter from './TaskFilter';

function TaskList() {
    const { cocktails, filter, loading, error } = useSelector(state => state.cocktailReducer);
    const dispatch = useDispatch();

    if (loading) return <div>Загрузка...</div>;

    const filteredCocktails = cocktails.filter((item) =>{
        if(filter === 'all') return true
        if(filter === 'alcoholic') return item.alcoholic === "Alcoholic"
        if(filter === 'non_alcoholic') return item.alcoholic === "Non alcoholic"
    })
    
    return (
        <div className="taskList">
            <TaskFilter />
            {error && <div className="error">{error}</div>}
            {filteredCocktails.map((item, index) => (
                <li key={index}>
                    <img src={item.img} alt={item.name} />
                    <span>{item.name || 'Такого коктейля нет'}</span>
                    <button onClick={() => dispatch(removeTask(index))}>Удалить</button>
                </li>
            ))}
        </div>
    );
}

export default TaskList;
