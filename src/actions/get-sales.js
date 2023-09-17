import prismadb from "@/lib/prismadb";

const GetSalesCount = async (storeId) => {
    const salesCount = await prismadb.order.count({
        where: {
            storeId,
            isPaid: true
        },
    });

    return salesCount;
}

export default GetSalesCount;