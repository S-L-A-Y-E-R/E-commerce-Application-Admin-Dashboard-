import Navbar from "@/components/Navbar";

import axios from "axios";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ params, children }) {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/stores?userId=${userId}&_id=${params.storeId}`
  );

  if (data.results < 0) redirect("/");

  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
