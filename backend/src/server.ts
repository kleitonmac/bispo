import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)

app.get('/', (_, res) => {
  res.send('API rodando')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`))
