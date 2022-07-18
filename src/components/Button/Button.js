import styles from './Button.module.css';

const Button = ({ children, className, active, ...props }) => {
  const activeButton = active ? styles.active : '';

  return (
    <button className={`${styles.button} ${activeButton}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
