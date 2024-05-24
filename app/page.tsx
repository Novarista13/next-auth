import { auth } from "@/auth";
import Form from "./components/signin-form";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <div className="grid place-content-center w-full">
        <div className="min-w-[400px] mt-5 bg-[#F8FAE5] border border-gray-200 rounded-lg shadow mx-auto">
          <div className="max-w-[300px] mx-auto my-7">
            {session?.user ? (
              <div className="text-center my-7">
                <p className="text-[16px] my-3">You've Singed In !</p>
                <p className="text-[12px] text-[#4c4c4c]">Enjoy Our WebSite!</p>
              </div>
            ) : (
              <>
                <div className="text-center my-7">
                  <p className="text-[16px] my-3">Welcome Back !</p>
                  <p className="text-[12px] text-[#4c4c4c]">
                    Sign in to continue to Our WebSite!
                  </p>
                </div>
                <Form />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
