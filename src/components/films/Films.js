import ButtonForm from '../buttons/ButtonForm';
import Film from './Film';

const Films = ({ urlFilmsArray, setFilms, setPilots, initialData }) => {
  const handleFilms = (urlFilmsArray) => {
    if (!urlFilmsArray.length) {
      setFilms((prev) => ({
        data: <span>No Films</span>,
        toggleShow: !prev.toggleShow,
      }));

      setPilots(initialData);
    } else {
      const filmsRendereds = urlFilmsArray.map((el, index) => (
        <Film key={index} data={el} />
      ));

      setFilms((prev) => ({
        data: filmsRendereds,
        toggleShow: !prev.toggleShow,
      }));

      setPilots(initialData);
    }
  };
  return (
    <>
      <ButtonForm onClick={() => handleFilms(urlFilmsArray)}>
        Show Films
      </ButtonForm>
    </>
  );
};

export default Films;
