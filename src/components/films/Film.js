import { useEffect, useState } from 'react';
import styles from './Film.module.css';

const Film = ({ data }) => {
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((film) => {
        setFilm(film);
      });
  }, [data]);

  return (
    film && (
      <div className={styles.film}>
        <span>Title: {film.title}</span>
        <span>Director: {film.director}</span>
        <span>Producer: {film.producer}</span>
        <span>Date: {film.release_date}</span>
      </div>
    )
  );
};

export default Film;
