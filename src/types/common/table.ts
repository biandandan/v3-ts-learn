export interface Table<T> {
  tableData: T[]
  loading: boolean
  total: number
  currentPage: number
  pageSize: number
}
