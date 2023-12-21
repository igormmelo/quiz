"use client";
import { useState } from "react";
import { Questao } from "./data/listadeperguntas";

const Page = () => {
  const [countindex, setCountIndex] = useState(0);

  const filtrando = (indexitem: number) => {
    if (indexitem === countindex) {
      return (
        <div className="bg-white w-[500px] h-[600px] rounded-lg border-[3px] border-black flex flex-col justify-center items-center" >
          <p className="font-bold mb-[30px] px-[20px] text-center">{Questao[indexitem].quest}</p>
          {Questao[indexitem].options.map((item, index) => (
            <button className="border-black border-[1px] h-[50px] w-[200px] mb-[10px]"
              onClick={() => {
                if (item === Questao[indexitem].response) {
                  alert("Parabens voce acertou");
                } else {
                  alert("Voce errou a questao");
                }
                indexitem = indexitem + 1;
                setCountIndex(countindex + 1);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="w-screen h-screen bg-[#81D9F1] flex flex-col justify-center items-center">
        {Questao.map((item, index) => filtrando(index))}
    </div>
  );
};
export default Page;
