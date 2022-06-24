export function VndCurrencyConverter(amount) {
  return Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}
