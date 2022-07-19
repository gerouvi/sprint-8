import { useState } from 'react';
import styles from './Ship.module.css';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Ship = () => {
  const location = useLocation();

  const selectedShip = location.state;

  const [widthPicture, setWidthPicture] = useState(styles.img__default);
  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.ship}>
        <div className={styles.ship__img}>
          <img
            className={widthPicture}
            src={`https://starwars-visualguide.com/assets/img/starships/${selectedShip.image}.jpg`}
            alt="error"
            onError={(e) => {
              e.target.src =
                'https://starwars-visualguide.com/assets/img/placeholder.jpg';
              setWidthPicture(styles.img__small);
            }}
          />
        </div>

        <div className={styles.ship__data}>
          <h1 className={styles.ship__title}> {selectedShip.data.name}</h1>
          <p className={styles.ship__description}>
            {selectedShip.data.starship_class}
          </p>
          <div className={styles.ship__bottom}>
            <ul className={styles.ship__dataColumn}>
              <li className={styles.ship__element}>
                {' '}
                Model: {selectedShip.data.model}
              </li>
              <li className={styles.ship__element}>
                Manufacurer: {selectedShip.data.manufacturer}
              </li>
              <li className={styles.ship__element}>
                Cost in credits: {selectedShip.data.cost_in_credits}
              </li>
            </ul>
            <ul className={styles.ship__dataColumn}>
              <li className={styles.ship__element}>
                Length: {selectedShip.data.length}
              </li>
              <li className={styles.ship__element}>
                Atmosphere speed: {selectedShip.data.max_atmosphering_speed}
              </li>
              <li className={styles.ship__element}>
                Crew: {selectedShip.data.crew}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ship;

// import { useState } from 'react';
// import styles from './Ship.module.css';
// import { useLocation } from 'react-router-dom';

// const Ship = () => {
//   const location = useLocation();

//   const id = location.state.id;

//   fetch(`https://swapi.dev/api/starships/${id}`).then((res) =>
//     console.log(res)
//   );

//   const selectedShip = location.state;

//   const [widthPicture, setWidthPicture] = useState(styles.img__default);

//   return (
//     <div className={styles.ship}>
//       <div className={styles.ship__img}>
//         <img
//           className={widthPicture}
//           src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
//           alt="error"
//           onError={(e) => {
//             e.target.src =
//               'https://starwars-visualguide.com/assets/img/placeholder.jpg';
//             setWidthPicture(styles.img__small);
//           }}
//         />
//       </div>

//       <div className={styles.ship__data}>
//         <h1 className={styles.ship__title}> {selectedShip.data.name}</h1>
//         <p className={styles.ship__description}>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eveniet
//           perspiciatis amet nihil placeat magni, facere molestias impedit in,
//           accusamus nulla cupiditate itaque repudiandae vel, aspernatur animi
//           nisi veniam eligendi delectus. Ea quae placeat facere aliquid labore!
//           Iste quaerat repudiandae rerum minus ipsam, repellendus enim
//           recusandae maiores est tempora nisi adipisci esse molestiae nobis
//           labore placeat possimus cum nulla deleniti beatae! Quibusdam
//           voluptatibus, ipsum aliquid molestiae iusto, adipisci dolorum porro!
//         </p>
//         <div className={styles.ship__bottom}>
//           <ul className={styles.ship__dataColumn}>
//             <li className={styles.ship__element}>
//               {' '}
//               Model: {selectedShip.data.model}
//             </li>
//             <li className={styles.ship__element}>
//               Manufacurer: {selectedShip.data.manufacturer}
//             </li>
//             <li className={styles.ship__element}>
//               Cost in credits: {selectedShip.data.cost_in_credits}
//             </li>
//           </ul>
//           <ul className={styles.ship__dataColumn}>
//             <li className={styles.ship__element}>
//               Length: {selectedShip.data.length}
//             </li>
//             <li className={styles.ship__element}>
//               Atmosphere speed: {selectedShip.data.max_atmosphering_speed}
//             </li>
//             <li className={styles.ship__element}>
//               Crew: {selectedShip.data.crew}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ship;
