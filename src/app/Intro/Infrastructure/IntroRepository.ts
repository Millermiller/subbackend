import Intro from '@/app/Intro/Domain/Intro'
import { Inject, Service } from 'typedi'
import { API } from './api/intro.api'
import IntroAPI = API.IntroAPI
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'

@Service()
export default class IntroRepository extends CommonRepository<Intro> {
  @Inject()
  protected readonly api: IntroAPI
}
