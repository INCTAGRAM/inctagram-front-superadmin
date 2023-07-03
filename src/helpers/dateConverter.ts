export const dateConverter = {
  fromMilliseconds(milliseconds: number) {
    const day =
      new Date(milliseconds).getDate() > 9
        ? new Date(milliseconds).getDate().toString()
        : 0 + new Date(milliseconds).getDate().toString()
    const month =
      new Date(milliseconds).getMonth() + 1 > 9
        ? (new Date(milliseconds).getMonth() + 1).toString()
        : 0 + (new Date(milliseconds).getMonth() + 1).toString()
    const year = new Date(milliseconds).getFullYear()
    return `${day}.${month}.${year}`
  },
}
