import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import { useEffect, useState } from "react";
import { saveMovies } from "../../utils/constants.jsx";

function SavedMovies() {

  const [saveMovie, setSaveMovie] = useState([]);

  const [isCheckMoviesSave, setIsCheckMoviesSave] = useState(true);

  useEffect(() => {
    setSaveMovie(saveMovies);
  }, []);

  function onCheckMoviesSave() {
    if (isCheckMoviesSave) {
      setIsCheckMoviesSave(false);
      console.log(saveMovie)
      setSaveMovie(saveMovie.filter((element) => element.duration > 40));
    } else {
      setIsCheckMoviesSave(true);
      console.log(saveMovie)
      setSaveMovie(saveMovies);
    }
  }

  return (
    <>
      <SearchForm isCheck={isCheckMoviesSave} changeShot={onCheckMoviesSave} />
      <MoviesCardList movies={saveMovie} />
    </>
  );
}
export default SavedMovies;
