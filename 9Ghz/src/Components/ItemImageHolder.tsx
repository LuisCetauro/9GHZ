// @ts-ignore
import DB from "../DB";
import { Link } from "react-router-dom";

interface Props {
  id: number;
}

interface Objeto {
  id: number;
}

function ItemImageHolder(Props: Props) {
  const item = DB.find((obj: Objeto) => obj.id === Props.id);

  return (
    <>
      <div className=" border-8 border-cor6 mb-6 rounded-2xl 2xl:w-3/5">
        <Link to={`/Item/${Props.id}`}>
          <div>
            <h1 className="text-center w-4/5 ">{item.nome}</h1>
            <img src={`../SRC/IMG/${item.source.extraimg1}`} className="" />
          </div>
        </Link>
      </div>
    </>
  );
}
export default ItemImageHolder;
