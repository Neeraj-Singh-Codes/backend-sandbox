import express from 'express'
import {getUsers,createUser, updateUser, deleteUser} from './controllers/usercontroller.js'
const app = express()

app.use(express.json())

app.get('/api/user', getUsers)
app.post('/api/user', createUser)
app.put('/api/user/:id', updateUser)
app.delete('/api/user/:id', deleteUser)

export default app