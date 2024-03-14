import { defineLayout } from "$fresh/server.ts";
import Footer from "../components/layout/footer.tsx";
import Navbar from "../components/layout/navbar.tsx";
import { Partial } from "$fresh/runtime.ts";
import { getUser } from "@/utils/db/kv.ts";
import Cookies from "@/islands/components/pieces/acceptCookies.tsx";

export default defineLayout(async (req, { Component }) => {
  const user = await getUser(req);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /*f-client-nav*/ user={user} />
      {/* <Partial name="navbar"> */}
      <div className="flex flex-col grow">
        <Component />
      </div>
      {/* </Partial> */}
      <Footer />
      <Cookies />
    </div>
  );
});
