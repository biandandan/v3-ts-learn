import { Table } from '@/types/common/table'

export interface TableItemInt {
  name: 'string'
  price: number
  code: 'string'
}

export interface OrderFormInt {
  code: string
  name: string
}

export class InitData {
  form: OrderFormInt = {
    code: '',
    name: '',
  }
  table: Table<TableItemInt> = {
    tableData: [],
    loading: false,
    total: 0,
    currentPage: 1,
    pageSize: 20,
  }
}
