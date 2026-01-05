import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body

  // Exemplo simples (ideal: banco de dados + senha hash)
  if (username !== 'admin' || password !== 'admin123') {
    return res.status(401).json({ message: 'Credenciais inválidas' })
  }

  const token = jwt.sign(
    { username, role: 'admin' },
    process.env.JWT_SECRET as string,
    { expiresIn: '1d' }
  )

  return res.json({ token })
}
