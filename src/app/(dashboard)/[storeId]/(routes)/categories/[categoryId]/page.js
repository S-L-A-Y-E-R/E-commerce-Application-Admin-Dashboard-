import axios from "axios";
import CategoryForm from "./components/CategoryForm";

const CategoriesPage = async ({ params }) => {
  const { data: category } = await axios.get(
    `${process.env.API_URL}api/v1/categories/${params.categoryId}`
  );

  const { data: billboards } = await axios.get(
    `${process.env.API_URL}api/v1/billboards?storeId=${params.storeId}`
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm
          billboards={billboards?.data}
          initialData={category?.data?.data}
        />
      </div>
    </div>
  );
};

export default CategoriesPage;
