import { LoginContainer } from "@/components/ui/Login/LoginContainer";
import { RegisterContainer } from "@/components/ui/RegisterContainer/RegisterContainer";

export default async function Home({ searchParams }) {
  const { type } = await searchParams;
  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <div
          className="h-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url(https://imgix.cosmicjs.com/a6e06460-7e03-11ef-915f-61acd7484848-4957136.jpg)",
          }}
        />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl text-white font-semibold mb-4">
          {searchParams && type == "register" && "Registrese"}
          {searchParams && type == "login" && "Inicie sesión"}
        </h1>
        {searchParams && type == "register" && (
          <RegisterContainer />
        )}
        {(searchParams && type == "login") ||
          !type ? (
          <LoginContainer />
        ) : null}
      </div>
    </div>
  );;
}
