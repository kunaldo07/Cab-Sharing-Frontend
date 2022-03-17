
const initialState = {
    rows:[],
}

//{...state,rows: payload}; == first we take the existing state and then 
// we add the rows with the available payload
export const rowsReducer = (state = initialState, {type,payload}) => {

    switch (type) {
        case "SET_ROWS":
            return {...state,rows: payload};
        case "ADD_ROW":
            return {...state,rows: payload};
        case "DELETE_ROW":
            return {...state,rows:state.rows.filter((row) => row._id != payload)};
        case "UPDATE_ROW":
            return {
                ...state,
                rows: state.rows.map((row) => row._id == payload._id ? payload : row)
            };
        default:
            return state;

    }

}