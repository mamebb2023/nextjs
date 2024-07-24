import Question from "@/components/forms/Question";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const mongoUser = await getUserById({ userId: "clerk12345" });
  console.log(mongoUser);
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default page;
