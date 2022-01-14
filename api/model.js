const initializeUsers = () => ([
    {name:'person1', password: 'person1'},
    {name:'person2', password: 'person2'},
    {name:'person3', password: 'person3'}
])

let users = initializeUsers()

const find = () => {
    return Promise.resolve(users)
}

const insert = ({name, password}) => {
    const newUser = {name, password}
    users.push(newUser)
    return Promise.resolve(newUser)
}

const findByName = name => {
    const user = users.find(d => d.name === name)
    return Promise.resolve(user)
}




module.exports = {
    find,
    insert,
    findByName
}