import ItemImageHolder from "./ItemImageHolder";

function DDRMMain() {
  return (
    <div className="w-screen flex flex-col mt-12 pb-16">
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={13} />
        <ItemImageHolder id={14} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={15} />
        <ItemImageHolder id={16} />
      </div>
      <div className="w-2/4 ml-48 mt-12 md:ml-80 2xl:w-3/5 2xl:flex 2xl:flex-row 2xl:gap-12">
        <ItemImageHolder id={17} />
        <ItemImageHolder id={18} />
      </div>
    </div>
  );
}
export default DDRMMain;
