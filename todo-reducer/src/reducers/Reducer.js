
export const initialState = 
[
    {
        task: 'Learn about reducers',
        id: 3892987589,
        completed: false
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

    export const Reducer = (state = initialState, action) => {
        // console.log(state)
        switch(action.type) {
            case 'ADD_TODO':
                return{
                    ...state,
                     task: action.payload
                }
                
                default:
                    return state;
        }
};