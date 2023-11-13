import axios from "axios";
import { format } from "date-fns";

import OrdersClient from "./components/client";
import { formatter } from "@/lib/utils";

const OrdersPage = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/orders?storeId=${params.storeId}`
  );

  const formatedBillorders = data?.data.map((item) => ({
    id: item._id,
    phone: item.phone,
    address: item.address,
    products: item.orderItems
      .map((orderItem) => orderItem.productId.name)
      .join(", "),
    totalPrice: formatter.format(
      item.orderItems.reduce((total, item) => {
        return total + Number(item.productId.price);
      }, 0)
    ),
    isPaid: item.isPaid,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrdersClient data={formatedBillorders} />
      </div>
    </div>
  );
};

export default OrdersPage;
