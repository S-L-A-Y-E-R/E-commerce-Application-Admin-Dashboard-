'use client'

import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const OrdersClient = ({ data }) => {

    return (
        <>
            <Heading title={`Orders (${data.length})`} description={'Manage Orders for your store'} />
            <Separator />
            <DataTable columns={columns} data={data} searchKey={'products'} />
        </>
    );
}

export default OrdersClient;