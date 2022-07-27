import styles from './ButtonForm.module.css';

const ButtonForm = ({ children }) => (
  <button className={styles.button}>{children}</button>
);

export default ButtonForm;
