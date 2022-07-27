import styles from './InputForm.module.css';

const InputForm = ({ label, setData, newKey, ...props }) => (
  <label className={styles.wrapper}>
    <span>{label}</span>
    <input
      className={styles.input}
      {...props}
      onChange={(e) =>
        setData((prev) => ({
          ...prev,
          [newKey]: e.target.value,
        }))
      }
    />
  </label>
);

export default InputForm;
