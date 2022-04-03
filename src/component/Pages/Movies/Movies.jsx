import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import s from "./Movies.module.css";
import { GetSearchMovies } from "../../../services/Api";
const Movies = () => {
  const history = useHistory();

  const [value, setValue] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const value = e.target.elements[0].value;
    // console.log(value);

    try {
      const { data } = await GetSearchMovies(value);

      // console.log(data);
      const { id } = data.results[0];

      console.log(history);
      history.push(`/movies/${id}`);
    } catch {
      alert("We don't have such movie. Sorry!");
    }
  };
  return (
    <div className={s.color}>
      <form onSubmit={onSubmit} action="" className={s.form}>
        <input
          name="movie"
          type="text"
          className={s.input}
          placeholder="Enter movie name"
        />
        <button type="submit" className={s.button}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Movies;
