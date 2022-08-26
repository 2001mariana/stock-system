export default function paginate(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  array: any[],
  itemsPerPage: number,
  actualPage: number
) {
  return array.slice((actualPage - 1) * itemsPerPage, actualPage * itemsPerPage)
}
