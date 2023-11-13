import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import MainNav from "./MainNav";
import StoreSwitcher from "./StoreSwitcher";
import axios from "axios";
import { ModeToggle } from "./toggle-theme";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/stores?userId=${userId}`
  );

  return (
    <div className="boder-b">
      <div className="flex h-16 items-center px-4 relative">
        <StoreSwitcher items={data?.data} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
