import { getServerSession } from "next-auth";
import { authOptions } from "@lib/authOptions";
import { redirect } from "next/navigation";
import Feed from "@components/Feed";

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  if (!session) redirect("/login");

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Real Time Monitoring:
        <br className="" />
        <span className="orange_gradient text-center">No More Missed Violations</span>
      </h1>

      <p className="desc text-center">
        RedSight sees everything, so you don't have to.
      </p>

      <Feed />
    </section>
  );
}
