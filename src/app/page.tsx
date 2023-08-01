"use client"

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiEmotionHappyLine } from "react-icons/ri";

export default function Home() {

  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        {isRegistered ? (
          <>
          <div className="w-[80%] md:w-4/12 flex flex-col justify-center items-center text-center">
            <h1 className="text-[8rem] font-bold mb-4"><RiEmotionHappyLine/></h1>
            <h1>Parabéns!! O seu email <span className="font-semibold">{email}</span> foi registrado com sucesso.</h1>
          </div>
          </>
        ) : (
          <>
            <HiOutlineMailOpen className="text-[10rem] text-white mb-4" />

            <div className="w-[80%] md:w-4/12 text-center">
              <h1 className="text-[2rem] font-bold mb-4">Hey, Espere!! 🤚</h1>
              <h1 className="font-extralight mb-4">Se inscreva agora e não perca mais as novidades do mundo de tecnologia</h1>
            </div>

            <form className="w-[80%] md:w-4/12 flex flex-col md:flex-row justify-center items-center">
              <div className="relative w-full md:w-[75%]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 p-2 pointer-events-none">
                  <MdEmail className="w-5 h-5 text-gray-400" />
                </div>
                <input value={email} onChange={(e: any) => setEmail(e.target.value)} type="email" className="block w-full h-[2.5rem] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="name@example.com" required />
              </div>

              <button onClick={() => {
                if (email && isValidEmail(email)) {
                  setIsRegistered(true);
                }
              }}
                type="submit" className="w-full md:w-[25%] h-[2.5rem] text-white font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm ml-0 md:ml-2 mt-3 md:mt-0 flex justify-center items-center">Registrar</button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
