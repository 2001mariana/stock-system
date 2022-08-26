export default function paginate(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  array: any[],
  itemsPerPage: number,
  actualPage: number
) {
  return array.slice((actualPage - 1) * itemsPerPage, actualPage * itemsPerPage)
}
