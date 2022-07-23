
const Initial_State={
    User_Data :[]
}


export const todoreducers=(state=Initial_State,action)=>{
    switch (action.type) {
        case "ADD_DATA":
            return{
                ...state,
                User_Data:[...state.User_Data,action.payload]
            }
            case "RMV_DATA":
                const deldata=state.User_Data.filter((ele,k)=>k!==action.payload)
            return{
                ...state,
                User_Data:deldata
            }
            case "UPD_DATA":
                const updatedData=state.User_Data.map((ele,k)=>k==action.d ? action.payload:ele)
            return{
                ...state,
                User_Data:updatedData
            }
            default:
                return state
    }
}