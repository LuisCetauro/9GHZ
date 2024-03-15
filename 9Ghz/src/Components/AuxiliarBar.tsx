import { useQuantidade } from "./QuantiudadeContext";
// @ts-ignore
import DB from "../DB";
import { useCart } from "./CartContext";

interface Obj {
  obj: {};
  id: number;
}

function AuxBar() {
  const { cart } = useCart();
  const { quantidade } = useQuantidade();
  const getItemsInCart = (cartIds: number[]) => {
    return cartIds.map((itemId, index) => {
      const item = DB.find((obj: Obj) => obj.id === itemId);
      const quantidadeItem = quantidade[index];
      return { ...item, quantidade: quantidadeItem };
    });
  };
  const itemsInCart = getItemsInCart(cart);

  return (
    <div className="hidden bg-cor3 fixed right-0 top-20 h-full w-60 text-center  lg:block text-sm">
      <h1 className="mt-2 mb-4 border-4 border-cor6 rounded-full p-2 ">
        Carrinho
      </h1>
      <div className="">
        <ul>
          {itemsInCart.map((item) => (
            <li className="w-4/5 ml-6">
              {item ? (
                <div>
                  <h1 className="mt-4">{item.nome}</h1>
                  <h3>Quantidade:{item.quantidade}</h3>
                </div>
              ) : (
                "Item não encontrado"
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AuxBar;
