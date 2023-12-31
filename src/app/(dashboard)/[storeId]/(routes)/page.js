import GetRevenue from "@/actions/get-revenue";
import GetSalesCount from "@/actions/get-sales";
import GetStockCount from "@/actions/get-stock-count";
import Heading from "@/components/ui/Heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import Overview from "@/components/overview";

import { CreditCard, DollarSign, PackageIcon } from "lucide-react";
import GetGraphRevenue from "@/actions/get-gaph-revenue";

const DashboardPage = async ({ params }) => {
    const totalRevenue = await GetRevenue(params.storeId);
    const salesCount = await GetSalesCount(params.storeId);
    const stockCount = await GetStockCount(params.storeId);
    const graphRevenue = await GetGraphRevenue(params.storeId);

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4  p-8 pt-6">
                <Heading title={'Dashboard'} description={'Overview of your store'} />
                <Separator />
                <div className="grid gap-4 grid-cols-3">
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Total Revenue
                            </CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {formatter.format(totalRevenue)}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Sales
                            </CardTitle>
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                +{salesCount}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Products In Stock
                            </CardTitle>
                            <PackageIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stockCount}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Card className='col-span-4'>
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className='pl-2'>
                        <Overview data={graphRevenue} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default DashboardPage;