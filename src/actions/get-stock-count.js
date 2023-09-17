import prismadb from "@/lib/prismadb";

const GetStockCount = async (storeId) => {
    const stockCount = await prismadb.product.count({
        where: {
            storeId,
            isArchived: false
        },
    });

    return stockCount;
}

export default GetStockCount;