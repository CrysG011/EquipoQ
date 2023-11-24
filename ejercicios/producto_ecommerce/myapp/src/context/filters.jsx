import { createContext, useState } from "react";
import PropTypes from "prop-types";

//El que tenemos que consumir
export const FiltersContext = createContext();
//El que nos prevee de acceso al contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 250,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
