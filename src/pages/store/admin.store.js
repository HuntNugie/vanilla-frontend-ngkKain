const adminStore = {
    nama:null,
    email:null,
    role:null
}

export const setStore = (data)=>{
    Object.assign(adminStore,data)
}

export const getStore = ()=>{
    return adminStore
}


