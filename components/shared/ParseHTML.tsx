"use client";

import React, { useEffect } from "react";

import Prism from "prismjs";
import parse from "html-react-parser";

import "prismjs/components/prism-markup";
import "prismjs/components/prism-cshtml";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-php";
import "prismjs/components/prism-go";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-scala";
import "prismjs/components/prism-elixir";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-nginx";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-vim";
import "prismjs/components/prism-haskell";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-erlang";
import "prismjs/components/prism-clojure";
import "prismjs/components/prism-groovy";
import "prismjs/components/prism-coffeescript";
import "prismjs/components/prism-ocaml";
import "prismjs/components/prism-powershell";

interface Props {
  data: string;
}

const ParseHTML = ({ data }: Props) => {
  useEffect(() => {
    Prism.highlightAll(true);
  }, []);

  console.log(data);

  return <div>{parse(data)}</div>;
};

export default ParseHTML;
