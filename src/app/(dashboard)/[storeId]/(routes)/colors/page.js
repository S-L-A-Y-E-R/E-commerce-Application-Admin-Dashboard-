import axios from "axios";
import { format } from "date-fns";

import ColorsClient from "./components/client";

const colorsPage = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/colors?storeId=${params.storeId}`
  );

  const formatedColors = data?.data?.map((item) => ({
    id: item._id,
    name: item.name,
    value: item.value,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formatedColors} />
      </div>
    </div>
  );
};

export default colorsPage;
