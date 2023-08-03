export const linkConverter = {
  fromLink(data: string): string {
    const link = data.split('/').splice(-1)
    return link.join()
  },
}
