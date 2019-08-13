
export const initialState = 
[
    {
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },

    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }

]

    export const reducer = (state, action) => {
        console.log(action)
        switch(action.type) {
            case 'UPDATE_TODO':
                return {
                    task: action.payload,
                    completed: !state.completed
                }
            // case 'TOGGLE_ITEM':
            //     return {
            //         ...state,
            //         completed: !state.completed
            //     }
        }
}