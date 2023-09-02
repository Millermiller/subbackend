import { Card } from '@/app/Asset/Domain/Card'
import { Asset } from '@/app/Asset/Domain/Asset'

export namespace Responses {
  export interface GetAssetResponse {
    id: number
    title: string
    type: number
    level: number
    cards: Card[]
    result: number
  }

  /**
   * TODO: set correct types
   */
  export interface GetStateResponse {
    site: string
    words: []
    sentences: []
    favourites: any
    personal: []
    texts: []
    puzzles: []
    intro: any
    sites: []
    currentsite: []
    domain: string
  }

  export interface GetAssetsResponse {
    words: Asset[]
    sentences: Asset[]
  }
}
