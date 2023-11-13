import axios from "axios";

const GetStockCount = async (storeId) => {
  const { data } = await axios.get(
    `${
      process.env.API_URL
    }api/v1/products?storeId=${storeId}&isArchived=${false}`
  );

  return data.results;
};

export default GetStockCount;
