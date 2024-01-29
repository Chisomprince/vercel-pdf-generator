import { authOptions } from "@/lib/server/auth";
import { getServerSession } from "next-auth/next";
import AccountDropdown from "./account-dropdown";

export default async function UserNav() {
  const session = await getServerSession(authOptions);

  return (
    <div className="border-b sticky top-0 z-50 bg-white dark:bg-background">
      <div className="container flex justify-between py-4 ">
        <p className="leading-10 font-medium">user-nav</p>

        <AccountDropdown session={session} />
      </div>
    </div>
  );
}
