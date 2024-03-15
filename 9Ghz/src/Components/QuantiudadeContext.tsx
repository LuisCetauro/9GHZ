import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuantidadeContextType {
  quantidade: number[];
  quantidadeAdicionada: (number: number) => void;
  setQuantidade: React.Dispatch<React.SetStateAction<number[]>>;
}

const QuantidadeContext = createContext<QuantidadeContextType>({
  quantidade: [],
  quantidadeAdicionada: () => {},
  setQuantidade: () => {},
});

const QuantidadeProvider = ({ children }: { children: ReactNode }) => {
  const [quantidade, setQuantidade] = useState<number[]>([]);

  const quantidadeAdicionada = (number: number) => {
    setQuantidade((prevQuantidade) => [...prevQuantidade, number]);
  };

  return (
    <QuantidadeContext.Provider
      value={{ quantidade, quantidadeAdicionada, setQuantidade }}
    >
      {children}
    </QuantidadeContext.Provider>
  );
};

const useQuantidade = () => {
  const context = useContext(QuantidadeContext);
  if (!context) {
    throw new Error(
      "useQuantidade deve ser usado dentro de um QuantidadeProvider"
    );
  }
  return context;
};

export { QuantidadeProvider, useQuantidade };
