import { createContext, useContext, useState } from 'react';

interface SearchContextType {
  search: string;
  setSearch: (search: string) => void;
}

interface SearchContextProviderProps {
  children: React.ReactNode;
}

const SearchContext = createContext({} as SearchContextType);

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
