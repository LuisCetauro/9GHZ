import { useNavigate } from "react-router-dom";
import { useSearch } from "./SearchContext";
// @ts-ignore
import DB from "../DB";

interface Item {
  id: number;
  nome: string;
}

const Banner = () => {
  const a = ["banner1", "banner2", "banner3", "banner4"];
  const { setProdutosFiltrados } = useSearch();
  const i = Math.floor(Math.random() * 4);
  const navigate = useNavigate();

  const searchProducts = (searchTerm: string) => {
    const produtosFiltrados: Item[] = DB.filter((item: Item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProdutosFiltrados(produtosFiltrados);
    console.log(produtosFiltrados);
  };

  const termosDePesquisa = ["intel", "ryzen", "rtx", "rx"];

  const redirect = () => {
    const searchTerm = termosDePesquisa[i];
    if (searchTerm) {
      searchProducts(searchTerm);
      navigate("/Searchresult");
    } else {
      console.error("Não foi possível encontrar esse banner");
    }
  };

  return (
    <div className="hidden md:block w-3/5 ml-72 mt-24 2xl:ml-80 ">
      <img
        className="h-48 lg:w-full  "
        src={`../SRC/IMG/${a[i]}.png`}
        onClick={redirect}
        alt={`Banner ${i + 1}`}
      />
    </div>
  );
};

export default Banner;
