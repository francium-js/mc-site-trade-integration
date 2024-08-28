import type { LotT } from 'src/services/api/Lot/types'

export type TradeHistory = {
  id: number
  lot: LotT
  tradeTime: Date
}

export type GetSellerTradeHistoryReponse = {
  lots: TradeHistory[]
  totalPages: number
}

export type GetBuyerTradeHistoryResponse = {
  lots: TradeHistory[]
  totalPages: number
}
