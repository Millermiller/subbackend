import User from '@/Scandinaver/User/Domain/User'

export default class Message {
  id: number
  name: string
  readed: boolean
  subject: string
  user: User
  message: string
  created_at: number
}
