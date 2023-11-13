import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import axios from "axios";

export default async function SetupLayout({ children }) {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/stores?userId=${userId}`
  );

  // console.log(data);

  if (data.results > 0) redirect(`/${data?.data[0]?._id}`);

  return <div>{children}</div>;
}
