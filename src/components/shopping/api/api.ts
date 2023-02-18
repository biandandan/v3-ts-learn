import $http from '@/http/index'
import { OrderFormInt } from '../types/order'

export const getOrderList = (params: OrderFormInt) =>
  $http({
    url: '/getOrderList',
    method: 'get',
    data: params,
  })
