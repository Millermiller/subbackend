import QuestionCollection from '@/Scandinaver/Asset/Domain/QuestionCollection'
import CardsCollection from '@/Scandinaver/Asset/Domain/CardsCollection'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import Question from '@/Scandinaver/Asset/Domain/Question'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export class Test extends Entity {
  constructor(asset: Asset) {
    super()
    this.asset = asset
    const translates = asset.cards.map(card => card.translate)
    const questions = this.asset.cards.map(card => new Question(card, translates))
    this.questions = new QuestionCollection(questions)
  }

  asset: Asset
  questions: QuestionCollection
  answers: number = 0
  success: number = 0
  fail: number = 0
  errors: Question[] = []

  get id(): number {
    return this.asset.id
  }

  get title(): string {
    return this.asset.title
  }

  get cards(): CardsCollection {
    return new CardsCollection(this.asset.cards)
  }

  // количество вопросов
  get quantity(): number {
    return this.questions.count()
  }

  get percent(): number {
    return Math.floor((this.success * 100) / this.quantity)
  }

  getId(): number | string {
    return this.id;
  }
}
