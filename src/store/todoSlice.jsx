import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk(
    'fetchApi',
    async (name) =>{
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        return {name, data: response.data}
    }
)

// const todoSlice = createSlice({
//     name: 'todoSlice',
//     initialState : {
//         tasks : [],
//         filter: 'all'
//     },
//     reducers : {
//         addTask : (state, action) =>{
//             state.tasks.push({
//                 id: Date.now(),
//                 text : action.payload,
//                 completed : false
//             })
//         },
//         setFilter : (state, action) =>{
//             state.filter = action.payload
//         },
//         toggleTask : (state, action) =>{
//             const task = state.tasks.find(task => task.id === action.payload)
//             if(task){
//                 task.completed = !task.completed
//             } 
//         },
//         removeTask : (state, action) =>{
//             state.tasks = state.tasks.filter(task => task.id !== action.payload)
//         }
//     }
    
// })


const cocktailsSlice = createSlice({
    name:'cocktailSlice',
    initialState:{
        name: '',
        cocktails : [],
        img: '',
        loading : false,
        error : null,
        filter: 'all'
    },
    reducers:{
        setFilter : (state, action) =>{
            state.filter = action.payload
        },
        removeTask : (state, action) =>{
            state.cocktails.splice(action.payload, 1)
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchApi.pending, (state) =>{
            state.loading = true;
            state.error = null
        })

        .addCase(fetchApi.fulfilled, (state, action) => {
            const drink = action.payload.data.drinks?.[0];
            if (drink) {
                const existingCocktail = state.cocktails.find(
                    item => item.name === drink.strDrink.toLowerCase()
                );
        
                if (!existingCocktail) {
                    state.cocktails.push({
                        name: drink.strDrink.toLowerCase(),
                        img: drink.strDrinkThumb,
                        alcoholic : drink.strAlcoholic
                    });
                    state.error = null;
                } else {
                    state.error = 'Этот коктейль уже добавлен';
                }
        
                state.loading = false;
            } else {
                state.error = 'Такого коктейля нет';
                state.loading = false;
            }
        })
        
        .addCase(fetchApi.rejected, (state) => {
            state.loading = false;
            state.error = 'Failed to find this cocktail'
        })
    }
})


export const { setFilter, removeTask } = cocktailsSlice.actions;
export default cocktailsSlice.reducer