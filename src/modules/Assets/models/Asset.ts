import IWord from '@/modules/Assets/models/Word'
import ISentence from '@/modules/Assets/models/Sentence'
import { IPersonal } from '@/modules/Assets/models/Personal'

export interface IAsset {
  id: number
  title: string
  words: IWord[]
  sentences: ISentence[]
  favourites: {}
  personal: IPersonal[]
  type: number
  selected: any
}

export class Asset implements IAsset {
  favourites!: {}
  id!: number
  personal!: IPersonal[]
  sentences!: ISentence[]
  title!: string
  type!: number
  words!: IWord[]
  selected: any
}
