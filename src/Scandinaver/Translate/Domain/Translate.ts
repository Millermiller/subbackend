import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export class Translate implements Entity {
  id: number
  title: string
  image: string
  active!: boolean
  available: boolean
  text: string
  count: number
  synonyms: any[]
  extra: any[]
  private published: boolean
  sentences: any[]
  description: string

  getId(): number {
    return this.id
  }

  publish() {
    this.published = true
  }

  unpublish() {
    this.published = false
  }

  isPublished() {
    return this.published
  }
}
