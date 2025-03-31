'use client';  // Força o componente a ser renderizado no lado do cliente

import Head from "next/head";
import MainPage from "../../src/modules/components/MainPage";

export default function Page() {
  // Simulando as notícias como uma variável de exemplo
  const news = [
    {
      title: "Notícia 1",
      description: "Descrição da Notícia 1",
      url: "https://example.com/noticia1",
    },
    {
      title: "Notícia 2",
      description: "Descrição da Notícia 2",
      url: "https://example.com/noticia2",
    },
  ];

  return (
    <>
      <Head>
        <title>InfoNotícia</title>
        <meta name="title" content="InfoNotícia" />
        <link rel="icon" type="shortcut icon" href="/favicon.svg" />
      </Head>

      {/* Passando as notícias diretamente como props para o componente MainPage */}
      <MainPage news={news} />
    </>
  );
}
