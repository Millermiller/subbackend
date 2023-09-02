import { AssetType } from '@/app/Asset/Domain/Enum/AssetType'
import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import { Asset } from '@/app/Asset/Domain/Asset'

export default class AssetDTO extends EntityForm<Asset> {
  title: string
  level: number
  basic: boolean
  type: AssetType
  language: string
  sorting: any

  fromDTO(): Asset {
    const asset = new Asset()

    asset.id = this.id
    asset.title = this.title
    asset.level = this.level
    asset.category = this.type

    return asset
  }
}
