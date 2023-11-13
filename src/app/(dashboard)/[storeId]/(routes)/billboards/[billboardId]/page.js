import axios from "axios";

import BillboardForm from "./components/BillboardForm";

const BillboardPage = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/billboards/${params.billboardId}`
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={data?.data?.data} />
      </div>
    </div>
  );
};

export default BillboardPage;
