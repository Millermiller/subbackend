import { Card } from '@/app/Asset/Domain/Card'
import { Service } from 'typedi'
import Translate from '@/app/Asset/Domain/Translate'
import Variant from '@/app/Asset/Domain/Variant'
import IVariantsFactory from '@/app/Asset/Domain/IVariantsFactory'
import { Collection } from '@/app/Core/Domain/Collection'

@Service()
export default class VariantsFromAssetFactory implements IVariantsFactory {
  private readonly count: number = 4

  build(card: Card, data: Translate[]): Collection<Variant> {
    const variants = new Collection<Variant>([])
    const rightTranslate: Translate = card.translate
    const rightVariant: Variant = new Variant(rightTranslate.getValue())
    rightVariant.correct = true
    variants.add(rightVariant)

    const indexes = []
    const tempData: Translate[] = data.slice(0)
    const translates = new Collection<Translate>(tempData)
    translates.remove(rightTranslate)

    while (variants.count() < 4) {
      const l = Math.floor(Math.random() * translates.count())
      const falseTranslate = translates.get(l)
      translates.remove(falseTranslate)
      const variant: Variant = new Variant(falseTranslate.getValue())
      variant.correct = false
      variants.add(variant)
    }

    variants.shuffle()
    return variants
  }
}
