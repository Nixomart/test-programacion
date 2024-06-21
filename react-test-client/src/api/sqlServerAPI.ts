export const getColumns = ()=>{
    return fetch('http://localhost:8080/columns')
    .then(response => response.json())
}
export const getTables = ()=>{
    return fetch('http://localhost:8080/tables')
    .then(response => response.json())
}
export const getSysType = () =>{
    return fetch('http://localhost:8080/systypes')
    .then(response => response.json())
}