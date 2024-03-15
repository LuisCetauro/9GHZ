import ItemImageHolder from "./ItemImageHolder";

function ExtraMain() {
  return (
    <div className="w-screen flex flex-col mt-12 pb-16">
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={43} />
        <ItemImageHolder id={44} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={45} />
        <ItemImageHolder id={46} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={47} />
        <ItemImageHolder id={48} />
      </div>
    </div>
  );
}
export default ExtraMain;
