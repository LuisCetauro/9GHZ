import ItemImageHolder from "./ItemImageHolder";
// @ts-ignore
import DB from "../DB";

function Main() {
  const a = DB.length;
  const b = Math.floor(Math.random() * a) + 1;
  const c = Math.floor(Math.random() * a) + 1;
  const d = Math.floor(Math.random() * a) + 1;
  const e = Math.floor(Math.random() * a) + 1;
  const f = Math.floor(Math.random() * a) + 1;
  const g = Math.floor(Math.random() * a) + 1;

  return (
    <div className=" w-screen flex flex-col mt-12 pb-16  ">
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={b} />
        <ItemImageHolder id={c} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={d} />
        <ItemImageHolder id={e} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={f} />
        <ItemImageHolder id={g} />
      </div>
    </div>
  );
}
export default Main;
