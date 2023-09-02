import { Card } from '@/app/Asset/Domain/Card'
import { Asset } from '@/app/Asset/Domain/Asset'
import Translate from '@/app/Asset/Domain/Translate'
import { Collection } from '@/app/Core/Domain/Collection'
import Variant from '@/app/Asset/Domain/Variant'

export default interface IVariantsFactory {
  build(payload: Card | Asset, data: Translate[]): Collection<Variant>
}
