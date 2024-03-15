import { Link } from "react-router-dom";

function ScrollBar() {
  return (
    <div className="bg-cor3 fixed top-20 h-full w-44 md:w-64  ">
      <ul className="ml-4 mt-8 flex flex-col gap-10 text-sm md:text-lg md:gap-16 md:mt-16 lg:gap-10 lg:mt-12">
        <li className="">
          <Link to="/GPU">Placas de Vídeo (GPU)</Link>
        </li>
        <li className="">
          <Link to="/CPU">Processadores (CPU)</Link>
        </li>
        <li className="">
          <Link to="/MOBO">Placa Mãe</Link>
        </li>
        <li className="">
          <Link to="/Extra">Periféricos</Link>
        </li>
        <li className="">
          <Link to="/HDD">Storage (HD/SSD)</Link>
        </li>
        <li className="">
          <Link to="/DDRM">Memória RAM (DDR4/DDR5)</Link>
        </li>
        <li className="">
          <Link to="/Gabinete">Gabinete</Link>
        </li>
        <li className="">
          <Link to="/Fonte">Fontes</Link>
        </li>
      </ul>
    </div>
  );
}
export default ScrollBar;
