export const  users=[{id:1,name:"Alice"},{id:2,name:"Bob"},{id:3,name:"Charlie"}]

export const getUserById=(id)=>{
const user=users.find((u)=>{return u.id===id})
return user
}

export const addUser=(name)=>{
const newUser={id:users.length+1,name:name}
users.push(newUser)
return newUser
}

export const deleteUser=(id)=>{
const index=users.findIndex((u)=>{return u.id===id})
if(index!==-1){users.splice(index,1)}
}

export const printUsers=()=>{
users.forEach((u)=>{console.log(u.name)})
}