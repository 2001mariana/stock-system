export default function paginate(
  //@ts-
  array: any[],
  itemsPerPage: number,
  actualPage: number
) {
  return array.slice((actualPage - 1) * itemsPerPage, actualPage * itemsPerPage)
}
