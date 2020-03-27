export default class Log {
  public readonly id: number
  public readonly created_at?: number
  public readonly message: string

  constructor(message:string) {
    this.message = message
  }
}
