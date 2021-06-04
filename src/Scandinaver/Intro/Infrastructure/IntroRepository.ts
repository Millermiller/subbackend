import Intro from '@/Scandinaver/Intro/Domain/Intro'
import { Inject, Service } from 'typedi'
import { API } from './api/intro.api'
import IntroAPI = API.IntroAPI
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'

@Service()
export default class IntroRepository extends CommonRepository<Intro> {
  @Inject()
  protected readonly api: IntroAPI
}
