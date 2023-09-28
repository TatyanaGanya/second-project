import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ isCheck, changeShot }) {
  return (
    <>
      <form noValidate className="search-form" name="SearchForm">
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          required
        />
        <button className="search-form__submit">Найти</button>
      </form>
      {/* <span className="search__error">Введите ключевое слово</span> */}
      <FilterCheckbox isCheck={isCheck} changeShot={changeShot}/>
    </>
  );
}

export default SearchForm;
