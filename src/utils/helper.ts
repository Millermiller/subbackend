export function deepCopy(obj: any): any {
  let copy

  // Handle the 3 simple types, and null or undefined
  if (obj == null || typeof obj !== 'object') return obj

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date()
    copy.setTime(obj.getTime())
    return copy
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = []
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepCopy(obj[i])
    }
    return copy
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {}
    // eslint-disable-next-line no-restricted-syntax
    for (const attr in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(attr)) {
        // @ts-ignore
        copy[attr] = deepCopy(obj[attr])
      }
    }
    return copy
  }

  throw new Error("Unable to copy obj! Its type isn't supported.")
}
