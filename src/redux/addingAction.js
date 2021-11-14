import {ADD_DATA} from "./addingConst";

export const createData = (data) => {
    return {
        type: ADD_DATA,
        payload: data
    }
}