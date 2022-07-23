export const Add =(items)=>{
    return{
        type:"ADD_DATA",
        payload:items
    }
}

export const Remove =(id)=>{
    return{
        type:"RMV_DATA",
        payload:id
    }
}

export const Updated =(items,id)=>{
    return{
        type:"UPD_DATA",
        payload:items,
        d:id
    }
}