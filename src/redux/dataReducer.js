import {sampleData} from "../data/sampleData";
import {ADD_DATA} from "./addingConst";

const INITAL_STATE = {
    data: sampleData
}
export  default function  dataReducer (state=INITAL_STATE,{type,payload}){
    switch (type){
        case ADD_DATA:
            return{
                ...state,
                data: [...state.data,payload]
            }
        default:
            return state

    }
}