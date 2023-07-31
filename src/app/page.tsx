import Input from "@/components/Input/input";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-zinc-900">

        <form className="w-[80%] md:w-[30%]">

          <h1 className="mb-6 text-[1.5rem]">Formulário Newsletter</h1>
          <div className="mb-6">
            <Input label="Seu e-mail" placeholder="name@example.com" type="email" />
          </div>

          <div className="mb-6">
            <Input label="Sua senha" placeholder="********" type="password" />
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
        </form>
      </div>
    </>
  );
}
