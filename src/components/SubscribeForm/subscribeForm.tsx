"use client";

import Input from "../Input/input";
import Button from "../Button/button";
import { useState } from "react";

export default function SubscribeForm() {
  const [name, setName] = useState("");

  return (
    <div className="w-5/12 max-[1024px]:w-11/12 h-screen p-5 bg-transparent flex flex-col justify-center items-center">
      <h1 className="text-black self-start text-xl mb-5">
        Formulário Newsletter
      </h1>
      <Input
        label="Nome"
        placeholder="joão gabriel"
        type="text"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        style={{ marginBottom: 20 }}
      />

      <Input
        label="Email"
        placeholder="você@exemplo.com"
        type="text"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        style={{ marginBottom: 20 }}
      />

      <Button>Enviar</Button>
    </div>
  );
}
