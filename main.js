let orders = [
  "Đơn hàng A",
  "Đơn hàng B",
  "Đơn hàng C",
  "Đơn hàng D",
  "Đơn hàng E",
];

let revenues = [1500, 2800, 1200, -500, 3200];

function stringFormatting(orders, revenues) {
  let result = "";

  orders.forEach((order, index) => {
    result += `"${order} mang về ${revenues[index]} USD",\n`;
  });

  return `[\n${result}]`;
}

console.log(stringFormatting(orders, revenues));

function totalRevenue(revenues){
    
}