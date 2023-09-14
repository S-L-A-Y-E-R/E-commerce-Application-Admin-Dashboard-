import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function POST(req) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { name } = body;

        if (!userId) {
            return new NextResponse("Unathorized", { status: 401 });
        };

        if (!name) {
            return new NextResponse("Name is Required", { status: 400 });
        };

        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        });

        return NextResponse.json(store);

    } catch (e) {
        console.log('STORES_POST', e);
        return new NextResponse("Internel Error", { status: 500 });
    }
};