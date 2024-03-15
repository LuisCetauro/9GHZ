import { useParams } from "react-router-dom";
// @ts-ignore
import DB from "../DB";
import Banner from "./Banner";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useQuantidade } from "./QuantiudadeContext";
import Footer from "./Footer";

interface Obj {
  obj: {};
  id: number;
}
interface SourceType {
  imagesArray: string[];
}
function IndividualItem() {
  const { id } = useParams<{ id?: string }>();
  const itemId = parseInt(id ?? "", 10);
  const item = DB.find((obj: Obj) => obj.id === itemId);

  const [buyable, setBuyable] = useState(true);

  const extractImages = (source: SourceType) => {
    return source.imagesArray || Object.values(source);
  };

  const imagensArray = extractImages(item.source);

  const [indiceImagem, setIndiceImagem] = useState(0);

  const imagemAnterior = () => {
    setIndiceImagem((prevIndice) =>
      prevIndice > 0 ? prevIndice - 1 : imagensArray.length - 1
    );
  };

  const imagemProxima = () => {
    setIndiceImagem((prevIndice) =>
      prevIndice < imagensArray.length - 1 ? prevIndice + 1 : 0
    );
  };
  const [number, setNumber] = useState(1);
  const { addToCart } = useCart();
  const { quantidade, quantidadeAdicionada } = useQuantidade();

  const handleBuyNow = () => {
    setBuyable(false);
    if (buyable === true) {
      addToCart(itemId);
      quantidadeAdicionada(number);
    } else {
      console.log("item clicado");
      console.log({ quantidade });
    }
  };

  const increaseBuyNumber = () => {
    setNumber(number + 1);
  };

  const decreaseBuyNumber = () => {
    if (number === 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <Banner />
      <div className="ml-20 mt-28 pb-20 md:w-96 md:ml-40 lg:ml-96 lg:mt-16 2xl:mt-40 ">
        <div className=" lg:flex lg:flex-row float-right  md:-mr-20 2xl:-mr-40 ">
          <div className="lg:mr-20  2xl:w-full 2xl:-mt-20">
            <div className="ml-12 2xl:w-full ">
              <img
                className="w-52 2xl:w-96"
                src={`../SRC/IMG/${imagensArray[indiceImagem]}`}
                alt="Imagem Principal"
              />

              <div className="-ml-2 flex flex-row gap-4  md:ml-4 lg:mt-12 lg:ml-0 2xl:ml-20 2xl:mt-0 ">
                <button
                  onClick={imagemAnterior}
                  className="bg-cor3 ml-6 border-cor6 border-4  p-2 rounded-full  "
                >
                  Anterior
                </button>
                <button
                  onClick={imagemProxima}
                  className="bg-cor3 border-cor6 border-4 p-2 rounded-full"
                >
                  Próxima
                </button>
              </div>
              <div className=" 2xl:ml-4 ">
                {buyable ? (
                  <div className="flex flex-row ml-10 mt-4 mb-4 gap-4 md:ml-16 lg:ml-12 2xl:ml-28">
                    <button
                      className="bg-cor3 border-cor6 border-4 p-2 rounded-full"
                      onClick={increaseBuyNumber}
                    >
                      +
                    </button>
                    <h1 className=" bg-cor3 border-cor6 border-4 p-2 rounded-full  w-8">
                      {number}
                    </h1>
                    <button
                      className="bg-cor3 border-cor6 border-4 p-2 rounded-full"
                      onClick={decreaseBuyNumber}
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <h1></h1>
                )}
                <div className="lg:pb-12">
                  {buyable ? (
                    <button
                      className="bg-cor3 border-cor6 border-4 p-2 rounded-full ml-4 lg:mb-20 lg:ml-6 2xl:ml-20 2xl:p-4"
                      onClick={handleBuyNow}
                    >
                      Adicionar ao carrinho
                    </button>
                  ) : (
                    <h1 className="ml-20 mt-2 2xl:pb-14 2xl:ml-28">
                      Item já adicionado
                    </h1>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-44 float-right text-center mr-5 mt-2 pb-24 md:mr-8  lg:w-96 lg:-mr-60  2xl:text-xl ">
            <h1 className="mt-2 mb-2">Marca: {item.marca}</h1>
            <h1 className="mt-2 mb-2">Modelo: {item.modelo}</h1>
            {item.key === "gpu" || item.key === "cpu" || item.key === "ddrm" ? (
              <h1>Clock Máximo: {item.clock}</h1>
            ) : (
              <h1></h1>
            )}
            <h1 className="mt-2 mb-2">{item.nome}</h1>
            <h2 className="mt-2 mb-2">
              Preço: R${(item.preço * number).toFixed(2)}
            </h2>
            <h2 className="pb-3">
              No pix: R${(item.preço * 0.8 * number).toFixed(2)}
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default IndividualItem;
