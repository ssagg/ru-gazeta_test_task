import { TPost } from "../../models/models";
import styles from "./Card.module.css";

type Card = {
  post: TPost;
  onClick: () => void;
};

const Card = ({ post, onClick }: Card) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <p className={styles.id}>ID: {post.id}</p>
      <p className={styles.title}>{post.title}</p>
      <p className={styles.text}>{post.body}</p>
    </div>
  );
};

export default Card;
