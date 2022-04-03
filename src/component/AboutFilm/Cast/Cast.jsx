import { useState, useEffect } from "react";
import { IMAGE } from "../../Pages/Home/Home";
import { GetMovieCredits } from "../../../services/Api";
import s from "./Case.module.css";
import url from "../../../static/default-image.jpg";

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState("");

  useEffect(() => {
    GetMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={s.listCast}>
      {cast &&
        cast.map((item) => (
          <li className={s.cast} key={item.id}>
            <img
              src={item.profile_path ? `${IMAGE}${item.profile_path}` : url}
              width="200"
              height="270"
              alt=""
            />
            <p className={s.nameActor}>{item.name}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
