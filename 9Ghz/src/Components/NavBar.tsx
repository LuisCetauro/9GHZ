import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import DB from "../DB";
import { useState } from "react";
import { useSearch } from "./SearchContext";

interface Item {
  id: number;
  nome: string;
}

function NavBar() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { setProdutosFiltrados } = useSearch();

  const searchProducts = (searchTerm: string) => {
    const produtosFiltrados: Item[] = DB.filter((item: Item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProdutosFiltrados(produtosFiltrados);
    console.log(produtosFiltrados);
  };
  const homedirection = () => {
    navigate("/");
  };

  const superclick = () => {
    const searchTerm = input;
    searchProducts(searchTerm);
    navigate("/Searchresult");
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      superclick();
      console.log("Enter pressionado!");
    }
  };

  return (
    <div className="bg-cor3 fixed top-0 flex flex-row  border-b-8 border-cor6 h-20 w-full lg:gap-8">
      <img
        className="w-12 h-12 md:w-20 md:h-16 "
        src="/SRC/IMG/fakelogo.png"
        alt="Market Logo"
        onClick={homedirection}
      />

      <input
        className="h-12 mt-2 ml-4 mr-4 rounded-2xl md:w-96 md:ml-12 md:mr-12  lg:w-full"
        type="text"
        placeholder="O que voce está procura?"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={superclick}
        className="border-2 border-cor6 p-1  mt-2 mb-2 rounded-3xl md:mr-12  "
      >
        Search
      </button>

      <Link to="/Cart">
        <img src="/SRC/IMG/cart.png" className="float-right w-12 mt-3 ml-4 " />
      </Link>
    </div>
  );
}

export default NavBar;
