export default class TextHelper {
  public static getListIdx(string: string, substr: string): number[] {
    const listIdx = []
    let lastIndex = -1
    // eslint-disable-next-line no-cond-assign
    while ((lastIndex = string.indexOf(substr, lastIndex + 1)) !== -1) {
      listIdx.push(lastIndex)
    }
    return listIdx
  }

  public static getSentenceNumber(text: string, start: number, end: number): number {
    const pointsCoordinates = TextHelper.getListIdx(text, '.')
    const pointsCoordinatesMap: { start: number, end: number }[] = []
    const g = 0
    let sentenceNumber: number

    pointsCoordinates.reduce((accumulator, currentValue, index, array) => {
      pointsCoordinatesMap.push({ start: accumulator, end: currentValue })
      return currentValue + 2 // include whitespace after end of sentence
    }, g);

    pointsCoordinatesMap.forEach((data, index) => {
      if (start >= data.start && end <= data.end) {
        sentenceNumber = index
      }
    })

    return sentenceNumber
  }

  public static getSentenceOffset(node: Node, offset: number): number {
    const previousNode = node.previousSibling as HTMLElement
    if (previousNode === null) {
      return offset
    }
    const stopCalculating = previousNode.classList && previousNode.classList.contains('sentence')
    if (stopCalculating === true) {
      return offset
    }
    offset += previousNode.textContent.length
    if (previousNode.previousSibling !== null) {
      offset += this.getSentenceOffset(previousNode, offset) - offset
    }

    return offset
  }

  public static getTotalOffset(parentNode: Node, offset: number): number {
    const node = parentNode as HTMLElement
    if (node === null) {
      return offset
    }
    if (!node.classList.contains('sentence')) {
      return offset
    }
    const previousNode = node.previousSibling
    if (previousNode === null) {
      return offset
    }
    offset += previousNode.textContent.length
    if (previousNode.previousSibling !== null) {
      offset += this.getTotalOffset(previousNode, offset) - offset
    }
    return offset
  }
}
