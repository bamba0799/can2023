const USD_VALUE = 612.56 as const;

export function getTotalTicketPriceAsUSD(price: number) {
  const total = Math.ceil(price / USD_VALUE);
  return total;
}
