import React from "react";
import Styles from "./Styles.css";
import Filter from "./Filter";
import FilterName from "./FilterName";

const Header = props => {
  const characters = props.characters;
  const statusOnClick = props.statusOnClick;
  const nameFilter = props.nameFilter;
  return (
    <div className="Filtros">
      <FilterName nameFilter={nameFilter} />
      <Filter statusOnClick={statusOnClick} />
    </div>
  );
};
export default Header;
//en el body hay dos opciones. Que te muestre una cosa cuando este seleccionado
//y otro no.
//Tener un estado que sea maximizar caracter.
