import axios from "axios";

const GetSalesCount = async (storeId) => {
  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/orders?storeId=${storeId}&isPaid=true`
  );

  return data?.data.length;
};

export default GetSalesCount;
