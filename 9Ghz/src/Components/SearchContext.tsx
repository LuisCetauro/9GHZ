import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
  produtosFiltrados: any[];
  setProdutosFiltrados: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [produtosFiltrados, setProdutosFiltrados] = useState<any[]>([]);

  return (
    <SearchContext.Provider value={{ produtosFiltrados, setProdutosFiltrados }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export { SearchProvider, useSearch };
