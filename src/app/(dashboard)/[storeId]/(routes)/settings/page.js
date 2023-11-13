import axios from "axios";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SettingsForm from "./components/SettingsForm";

const SettingsPage = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/stores/${params.storeId}`
  );

  if (!data.data) {
    redirect("/");
  }

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={data?.data?.data} />
      </div>
    </div>
  );
};

export default SettingsPage;
