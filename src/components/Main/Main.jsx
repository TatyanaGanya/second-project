import "./Main.css";
import Error from "../Error/Error.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Profile from "../Profile/Profile.jsx";
import Movies from "../Movies/Movies.jsx";
import { Link } from "react-router-dom";
import globus from "../../images/globus.svg";
import foto from "../../images/portfolio_foto.jpeg";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";

function Main({ name, setLoggedIn }) {


  return (
    <main class="main-page">
      {
        {
          home: (
            <>
              <section className="about">
                <img src={globus} alt="Фильмы" className="about__img" />
                <h1 className="about__title">
                  Учебный проект студента факультета Веб&#8209;разработки.
                </h1>
                <p className="about__suptitle">
                  Листайте ниже, чтобы узнать больше про этот проект и его
                  создателя.
                </p>
                <a href="#project" className={"about__button"}>
                  Узнaть больше
                </a>
              </section>

              <section className="project" id={"project"}>
                <h2 className="project__title">О проекте</h2>
                <div className="project__about">
                  <h3 className="project__subtitle">
                    Дипломный проект включал 5 этапов
                  </h3>
                  <p className="project__description">
                    Составление плана, работу над бэкендом, вёрстку, добавление
                    функциональности и финальные доработки.
                  </p>

                  <h3 className="project__subtitle">
                    На выполнение диплома ушло 5 недель
                  </h3>
                  <p className="project__description">
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                    было соблюдать, чтобы успешно защититься.
                  </p>
                </div>

                <div className="project__time">
                  <div className="project__time_first">1 неделя</div>
                  <div className="project__time_next">4 неделя</div>

                  <p className="project__text">Back-end</p>
                  <p className="project__text">Front-end</p>
                </div>
              </section>

              <section className="techno">
                <h2 className="techno__title">Технологии</h2>
                <h3 className="techno__subtitle">7 технологий</h3>
                <p className="techno__description">
                  На курсе веб-разработки мы освоили технологии, которые
                  применили в дипломном проекте.
                </p>
                <ul className="techno__lists">
                  <li className="techno__list">HTML</li>
                  <li className="techno__list">CSS</li>
                  <li className="techno__list">JS</li>
                  <li className="techno__list">React</li>
                  <li className="techno__list">Git</li>
                  <li className="techno__list">Express.js</li>
                  <li className="techno__list">mongoDB</li>
                </ul>
              </section>

              <section className="about-me ">
                <h2 className="about-me__title">Студент</h2>

                <div className="portfolio">
                  <div>
                    <h2 className="portfolio__title">Татьяна</h2>
                    <p className="portfolio__suptitle">
                      Фронтенд-разработчик, 36 лет
                    </p>
                    <p className="portfolio__description">
                      Я родилась и живу в Санкт-Петербрге, закончила факультет
                      культуры СПГУПС. Я люблю слушать музыку, а ещё увлекаюсь
                      сноубордом. Недавно начал кодить. После того, как прошёл
                      курс по веб-разработке, начал заниматься фриланс-заказами
                      и ушла с постоянной работы.
                    </p>
                    <Link
                      to={"https://tatyanaganya.github.io/"}
                      className="portfolio__button"
                    >
                      Github
                    </Link>
                  </div>

                  <img src={foto} alt="Фото" className="portfolio__img" />
                </div>

                <p className="portfolio__more">Портфолио</p>
                <Link
                  to={"https://tatyanaganya.github.io/russian-travel/"}
                  className="portfolio__link"
                >
                  Статичный сайт
                  <button className="portfolio__link__button"></button>
                </Link>
                <Link
                  to={"https://tatyanaganya.github.io/mesto-react/"}
                  className="portfolio__link"
                >
                  Адаптивный сайт
                  <button className="portfolio__link__button"></button>
                </Link>
                <Link
                  to={"https://mestofrontent.nomoredomainsicu.ru"}
                  className="portfolio__link"
                >
                  Одностраничное приложение
                  <button className="portfolio__link__button"></button>
                </Link>
              </section>
            </>
          ),
          signin: <Login />,
          movies: (
            <Movies />
          ),
          savedmovies: (
            <SavedMovies />
          ),
          signup: <Register />,
          profile: <Profile />,
          error: <Error />,
        }[name]
      }
    </main>
  );
}

export default Main;
