import axios from "axios";
import { format } from "date-fns";

import BillboardClient from "./components/client";

const BillboardsPage = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/billboards?storeId=${params.storeId}`
  );

  const formatedBillboards = data?.data?.map((item) => ({
    id: item._id,
    label: item.label,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formatedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
