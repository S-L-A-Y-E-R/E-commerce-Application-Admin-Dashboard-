import axios from "axios";
import { format } from "date-fns";

import SizesClient from "./components/client";

const SizesPage = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/sizes?storeId=${params.storeId}`
  );

  const formatedSizes = data?.data?.map((item) => ({
    id: item._id,
    name: item.name,
    value: item.value,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formatedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
