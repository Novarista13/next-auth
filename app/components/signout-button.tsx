import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        className=" bg-[#43766C] text-[#F8FAE5] inline hover:ring-2 hover:ring-[#F8FAE5] focus:ring-2 focus:ring-[#F8FAE5] font-medium rounded-lg text-small p-2 focus:outline-none float-right"
        type="submit"
      >
        Sign Out
      </button>
    </form>
  );
}
