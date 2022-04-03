import { useState, useEffect } from "react";
import { GetMovieReviews } from "../../../services/Api";
import s from "./Reviews.module.css";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  //   console.log(GetMovieReviews);
  useEffect(() => {
    GetMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul className={s.list}>
      {reviews.map((item) => (
        <li className={s.reviews} key={item.id}>
          {item.content}
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
