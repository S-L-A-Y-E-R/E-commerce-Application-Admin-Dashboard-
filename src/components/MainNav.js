"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { useState } from "react";
import { Menu } from "lucide-react";

export default function MainNav({
    className,
    ...props
}) {
    const pathname = usePathname();
    const params = useParams();
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(state => !state);
    };

    const routes = [
        {
            href: `/${params.storeId}`,
            label: 'Home',
            active: pathname === `/${params.storeId}`,
        },
        {
            href: `/${params.storeId}/billboards`,
            label: 'Billboards',
            active: pathname === `/${params.storeId}/billboards`,
        },
        {
            href: `/${params.storeId}/categories`,
            label: 'Categories',
            active: pathname === `/${params.storeId}/categories`,
        },
        {
            href: `/${params.storeId}/sizes`,
            label: 'Sizes',
            active: pathname === `/${params.storeId}/sizes`,
        },
        {
            href: `/${params.storeId}/colors`,
            label: 'Colors',
            active: pathname === `/${params.storeId}/colors`,
        },
        {
            href: `/${params.storeId}/products`,
            label: 'Products',
            active: pathname === `/${params.storeId}/products`,
        },
        {
            href: `/${params.storeId}/orders`,
            label: 'Orders',
            active: pathname === `/${params.storeId}/orders`,
        },
        {
            href: `/${params.storeId}/settings`,
            label: 'Settings',
            active: pathname === `/${params.storeId}/settings`,
        },
    ]

    return (
        <>
            <nav
                className={cn("md:flex hidden items-center space-x-4 lg:space-x-6", className)}
                {...props}
            >
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            'text-sm font-medium transition-colors hover:text-primary',
                            route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
                        )}
                    >
                        {route.label}
                    </Link>
                ))}
            </nav>
            <div className="">
                <Menu className="md:hidden h-6 w-6 ml-4" onClick={toggleMenu} />
                {open &&
                    (
                        <ul className="flex flex-col gap-3 justify-center items-center divide-y rounded-lg w-full left-0 px-4   
                        bg-slate-800 dark:bg-white absolute translate-y-3">
                            {routes.map((route) => (
                                <li className='py-2 text-center w-full'>
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className='font-medium transition-colors text-white dark:text-black hover:text-primar'
                                    >
                                        {route.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </>
    )
};