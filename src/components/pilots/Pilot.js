import { useEffect, useState } from 'react';
import styles from './Pilot.module.css';

const Pilot = ({ data }) => {
  const [pilot, setPilot] = useState(null);

  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((data) => {
        setPilot(data);
      });
  }, [data]);

  return (
    pilot && (
      <div className={styles.pilot}>
        <span>Name: {pilot.name}</span>
        <span>Height: {pilot.height}cm</span>
        <span>Eye color: {pilot.eye_color}</span>
        <span>Skin color: {pilot.skin_color}</span>
      </div>
    )
  );
};

export default Pilot;
