import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import Language from '@/Scandinaver/Languages/Domain/Language'
import { Type } from 'class-transformer'
import { TranslateForm } from '@/Scandinaver/Translate/Domain/TranslateForm'
import DictionaryItem from '@/Scandinaver/Translate/Domain/DictionaryItem'
import Tooltip from './Tooltip'

export class Translate implements Entity {
  private _id: number = 0
  private _title: string
  private _language: Language
  private _image: string
  private _active!: boolean
  private _available: boolean
  private _text: string
  private _count: number
  private _dictionary: DictionaryItem[]
  private _tooltips: Tooltip[]
  private _published: boolean
  private _sentences: DictionaryItem[][]
  private _description: string
  private _translate: string

  @Type(() => Language)
  set language(value: Language) {
    this._language = value
  }

  @Type(() => Tooltip)
  set tooltips(value: Tooltip[]) {
    this._tooltips = value
  }

  @Type(() => DictionaryItem)
  set sentences(value: DictionaryItem[][]) {
    this._sentences = value
  }

  @Type(() => DictionaryItem)
  set dictionary(value: DictionaryItem[]) {
    this._dictionary = value
  }

  getId(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  publish() {
    this._published = true
  }

  unpublish() {
    this._published = false
  }

  get language(): Language {
    return this._language
  }

  get title(): string {
    return this._title
  }

  set title(value: string) {
    this._title = value
  }

  get text(): string {
    return this._text
  }

  set text(value: string) {
    this._text = value
  }

  get description(): string {
    return this._description
  }

  set description(value: string) {
    this._description = value
  }

  get dictionary(): DictionaryItem[] {
    return this._dictionary
  }

  get translate(): string {
    return this._translate
  }

  set translate(value: string) {
    this._translate = value
  }

  get tooltips(): Tooltip[] {
    return this._tooltips
  }

  get sentences(): DictionaryItem[][] {
    return this._sentences
  }

  get image(): string {
    return this._image
  }

  set image(value: string) {
    this._image = value
  }

  isPublished() {
    return this._published
  }

  set published(value: boolean) {
    this._published = value
  }

  get published(): boolean {
    return this._published
  }

  public toDTO(): TranslateForm {
    return {
      id: this._id,
      title: this._title,
      language: this._language.letter,
      original: this._text,
      translate: this._translate,
      tooltips: this._tooltips.map((tooltip: Tooltip) => tooltip.toDTO()),
      dictionary: this._dictionary.map((item: DictionaryItem) => item.toDTO()),
      published: this._published,
      sentences: this._sentences,
      description: this._description
    }
  }
}
