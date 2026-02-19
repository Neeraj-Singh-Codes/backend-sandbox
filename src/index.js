import express from 'express'
import {getUsers,createUser, updateUser, deleteUser, loginUser} from './controllers/usercontroller.js'
const app = express()

app.use(express.json())

app.get('/api/user', getUsers)
app.post('/api/user', createUser)
app.put('/api/user/:id', updateUser)
app.delete('/api/user/:id', deleteUser)
app.post('/api/login', loginUser)

export default app