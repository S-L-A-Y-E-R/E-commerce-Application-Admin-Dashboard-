import axios from "axios";
import { format } from "date-fns";

import CategoryClient from "./components/client";

const CategoriesPage = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/categories?storeId=${params.storeId}`
  );
  console.log(data.data);

  const formatedCategories = data?.data?.map((item) => ({
    id: item._id,
    name: item.name,
    billboardLabel: item.billboardId.label,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formatedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
