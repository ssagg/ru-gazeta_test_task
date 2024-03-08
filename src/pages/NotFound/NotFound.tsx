import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h2>Page doesn`t exist</h2>
      <button onClick={() => navigate("/")}>Return to Main page</button>
    </div>
  );
};

export default NotFound;
