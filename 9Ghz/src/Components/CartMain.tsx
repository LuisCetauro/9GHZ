import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
// @ts-ignore
import DB from "../DB"; // Certifique-se de importar seu banco de dados
import { useQuantidade } from "./QuantiudadeContext";
import { Link } from "react-router-dom";

interface Obj {
  obj: {};
  id: number;
}

function CartMain() {
  const { cart, setCart } = useCart();
  const { quantidade } = useQuantidade();
  const [total, setTotal] = useState(0);
  const [cash, setCash] = useState(true);
  const [box, setBox] = useState("openbox1");
  const [box2, setBox2] = useState("openbox2");

  const getItemsInCart = (cartIds: number[]) => {
    return cartIds.map((itemId, index) => {
      const item = DB.find((obj: Obj) => obj.id === itemId);
      const quantidadeItem = quantidade[index];
      return { ...item, quantidade: quantidadeItem };
    });
  };
  const itemsInCart = getItemsInCart(cart);

  useEffect(() => {
    const cartTotal = itemsInCart.reduce(
      (acc, item) => acc + item.preço * item.quantidade,
      0
    );
    setTotal(cartTotal);
  }, [itemsInCart]);

  const deleteItem = (itemId: number) => {
    const updatedCart = cart.filter((cartItemId) => cartItemId !== itemId);
    setCart(updatedCart);
  };

  const handleBuyMethod = () => {
    setCash(true);
    setBox("openbox1");
    setBox2("openbox2");
  };
  const handleBuyMethod2 = () => {
    setCash(false);
    setBox2("openbox1");
    setBox("openbox2");
  };

  return (
    <>
      <div className="w-screen flex flex-col mt-12 pb-16 ">
        <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
          <ul>
            {itemsInCart.map((item) => (
              <li className="border-4 border-cor1 p-2 mb-1 rounded-xl">
                {item ? (
                  <div>
                    <h1>{item.nome}</h1>
                    <h3>Preço do item: {item.preço}</h3>
                    <h3>Quantidade:{item.quantidade}</h3>
                    <h3>Valor total do item:{item.preço * item.quantidade}</h3>
                    <div className="flex flex-row mt-4">
                      <img
                        className="w-6 h-6"
                        src="../SRC/IMG/del.png"
                        alt="Delete"
                        onClick={() => deleteItem(item.id)}
                      />
                      <p className="ml-6 -mt-2">Remover do carrinho</p>
                    </div>
                  </div>
                ) : (
                  "Item não encontrado"
                )}
              </li>
            ))}
          </ul>
          <div>
            <h3>Forma de pagamento:</h3>
            <div className="">
              <div className="flex flex-row gap-8">
                <div className="flex flex-col">
                  <button onClick={handleBuyMethod}>Pix</button>
                  <img
                    className="w-6 h-6"
                    src={`SRC/IMG/${box2}.png`}
                    onClick={handleBuyMethod}
                  />
                </div>
                <div>
                  <button onClick={handleBuyMethod2}>Cartão</button>
                  <img
                    className="w-6 h-6"
                    src={`SRC/IMG/${box}.png`}
                    onClick={handleBuyMethod2}
                  />
                </div>
              </div>
            </div>

            <div>
              {cash ? (
                <h2>Valor no Pix:{(total * 0.8).toFixed(2)}</h2>
              ) : (
                <h2>Valor nas demais formas:{total.toFixed(2)}</h2>
              )}
            </div>
            <Link to="/Ty">
              <button
                className=" bg-cor3 border-cor6 border-4 p-2 rounded-full mb-2 -ml-1"
                onClick={() => {
                  console.log(cart);
                }}
              >
                Compre já
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartMain;
