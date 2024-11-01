import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchApi } from "../store/todoSlice"

const AddTask = () =>{

    const dispatch = useDispatch() 

    const [cocktailName , setCocktailName] = useState('')
    const {cocktails} = useSelector(state => state.cocktailReducer)

    const handleAddTask = () =>{
        if(cocktailName){
            dispatch(fetchApi(cocktailName))
        }else{}
    }

    console.log(cocktails);

    return (
        <div className="addTask">
            <input type="text" value={cocktailName} onChange={(e) => setCocktailName(e.target.value)}/>
            <button onClick={handleAddTask}>Добавить</button>
        </div>
    )
}

export default AddTask