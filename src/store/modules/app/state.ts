
export default class State {
  pkg: any = []
  app: any = {}
  device: any = {
    isMobile: false,
    isTablet: false,
  }
  sidebar: any = {
    opened: false,
    hidden: false,
  }
  effect: any = {
    translate3d: true,
  }
  wordsCount: number = 0
  assetsCount: number = 0
  audioCount: number = 0
  usersCount: number = 0
  textsCount: number = 0
}
