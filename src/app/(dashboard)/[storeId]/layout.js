import Navbar from "@/components/Navbar";

import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ params ,children}) {
    const { userId } = auth();

    if (!userId) redirect('/sign-in');

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    });

    if (!store) redirect('/');

    return (
        <div>
            <Navbar/>
            <div>{children}</div>
        </div>
    );
};