import "./App.css";
import CurrentUserContext from "../../contexs/CurrentUserContext";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <CurrentUserContext.Provider>
      <div className="App">
          <Routes>
{/* авторизация */}
            <Route
              path="/signin"
              element={
              <Main name="signin" setLoggedIn={setLoggedIn} />
            }
            />
{/* регистрация */}
            <Route
              path="/signup"
              element={
              <Main name="signup" setLoggedIn={setLoggedIn} />
            }
            />
{/*  «О проекте» */}
            <Route
              path="/"
              element={
                <>
                  <Header name="home" loggedIn={loggedIn} />
                  <Main name="home" />
                  <Footer />
                </>
              }
            />
{/* Фильмы */}
            <Route
              path="/movies"
              element={
                <>
                  <Header />
                  <Main name="movies" />
                  <Footer />
                </>
              }
            />
{/* Сохранённые фильмы */}
            <Route
              path="/saved-movies"
              element={
                <>
                  <Header />
                  <Main name="savedmovies" />
                  <Footer />
                </>
              }
            />
{/* акаунт */}
            <Route
              path="/profile"
              element={
                <>
                  <Header />
                  <Main name="profile" setLoggedIn={setLoggedIn} />
                </>
              }
            />
{/* ошибка */}
            <Route
              path="*"
              element={
                <>
                  <Main name="error" />
                </>
              }
            />
          </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
