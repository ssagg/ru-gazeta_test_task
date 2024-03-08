import styles from "./Button.module.css";

type Button = {
  onClick: () => void;
  children?: number | string;
};

const Button: React.FC<Button> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
