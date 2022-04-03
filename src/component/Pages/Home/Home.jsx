import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetTrending } from "../../../services/Api";
import s from "./home.module.css";
export const IMAGE = "https://image.tmdb.org/t/p/w500";
const Home = () => {
  const [trends, setTrends] = useState(null);

  const fetchTrends = async () => {
    const {
      data: { results },
    } = await GetTrending();

    setTrends(results);
  };
  useEffect(() => {
    fetchTrends();
  }, []);

  return (
    <>
      <h1 className={s.mainTitle}>Trending today</h1>
      <ul className={s.wrapListTrends}>
        {trends &&
          trends.map((trend) => (
            <li key={trend.id} className={s.listTrends}>
              <Link to={`/movies/${trend.id}`}>
                <img
                  src={`${IMAGE}${trend.backdrop_path}`}
                  width="380"
                  alt=""
                />
                <h3 className={s.title}>{trend.original_title}</h3>{" "}
                <p className={s.text}>{trend.overview}</p>
                <div className={s.wrapYearRating}>
                  <span className={s.years}>{trend.release_date}</span>
                  <span>
                    {trend.vote_average}
                    <span className={s.hardColor}>&#9829;</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
