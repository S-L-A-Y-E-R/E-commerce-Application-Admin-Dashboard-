import axios from "axios";

const GetRevenue = async (storeId) => {
  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/orders?storeId=${storeId}&isPaid=true`
  );

  const totalRevenue = data?.data.reduce((total, order) => {
    const orderTotal = order.orderItems.reduce((orderSum, item) => {
      return orderSum + item.productId.price;
    }, 0);
    return total + orderTotal;
  }, 0);
  return totalRevenue;
};

export default GetRevenue;
