
//to add all the rows from the database into the redux store array
export const setRows = (rows) => {
    return {
        type:"SET_ROWS",
        payload: rows,
    }
}


export const addRow = (row) => {
    return {
        type:"ADD_ROW",
        payload: row,
    }
}

export const deleteRow = (id) => {
    return {
        type:"DELETE_ROW",
        payload: id,
    }
}


export const updateRow = (row) => {
    return {
        type:"UPDATE_ROW",
        payload: row,
    }
}

