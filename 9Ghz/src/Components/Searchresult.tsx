import Footer from "./Footer";
import ItemImageHolder from "./ItemImageHolder";
import { useSearch } from "./SearchContext";

function ResultMain() {
  const { produtosFiltrados } = useSearch();

  return (
    <>
      <div className="w-screen flex flex-col mt-12 pb-16">
        <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((produto) => (
              <ItemImageHolder key={produto.id} id={produto.id} />
            ))
          ) : (
            <div className="mt-80 md:mt-96 md:ml-24 md:text-2xl">
              Nenhum produto foi encontrado.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResultMain;
