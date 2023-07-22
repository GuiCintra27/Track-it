"use client";
import Image from "next/image";
import Link from "next/link";

import { Form } from "../components/form";
import { Main } from "./page.styles";
import { FormEvent, useRef, useState } from "react";

export default function SignIn() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Here, you can handle the file upload using an API call or perform any other actions with the selected file.
    // For example, you can use `FormData` and `fetch` to send the file to the server.
    const formData = new FormData();
    //formData.append('photo', selectedFile);

    // Make your API call or handle the photo upload here...
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Main>
      <Image
        priority
        src="/logo.svg"
        height={180}
        width={180}
        alt="Track It"
        className="logo"
      />

      <Form.Root>
        <Form.Input placeholder="email" />
        <Form.Input placeholder="senha" />
        <Form.Input placeholder="nome" />
        <Form.Label htmlFor="fileInput" onClick={handleClick}>
          Selecionar Arquivo
        </Form.Label>
        <Form.Input
          id="fileInput"
          accept="image/*"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <Form.Button type="submit">Cadastrar</Form.Button>
      </Form.Root>

      <Link href={"/sign-in"}>Já tem uma conta? Faça login!</Link>
    </Main>
  );
}
