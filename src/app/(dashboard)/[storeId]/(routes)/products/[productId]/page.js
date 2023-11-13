import axios from "axios";
import ProductsForm from "./components/ProductsForm";

const ProductPage = async ({ params }) => {
  const { data: product } = await axios.get(
    `${process.env.API_URL}api/v1/products/${params.productId}`
  );

  const { data: categories } = await axios.get(
    `${process.env.API_URL}api/v1/categories?storeId=${params.storeId}`
  );

  const { data: sizes } = await axios.get(
    `${process.env.API_URL}api/v1/sizes?storeId=${params.storeId}`
  );

  const { data: colors } = await axios.get(
    `${process.env.API_URL}api/v1/colors?storeId=${params.storeId}`
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsForm
          categories={categories?.data}
          colors={colors?.data}
          sizes={sizes?.data}
          initialData={product?.data?.data}
        />
      </div>
    </div>
  );
};

export default ProductPage;
