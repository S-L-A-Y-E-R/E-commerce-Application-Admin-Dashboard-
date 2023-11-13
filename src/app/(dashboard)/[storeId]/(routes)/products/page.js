import axios from "axios";
import { format } from "date-fns";

import ProductClient from "./components/client";

const ProductsPage = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/products?storeId=${params.storeId}`
  );

  const formatedProducts = data?.data?.map((item) => ({
    id: item._id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: item.price + " $",
    category: item.categoryId.name,
    size: item.sizeId.name,
    color: item.colorId.value,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formatedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
