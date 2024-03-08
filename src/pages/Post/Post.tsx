import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/Button/Button";
import { TPost } from "../../models/models";
import { getPost } from "../../api/Api.ts";
import styles from "./Post.module.css";

const Post: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState<TPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPost(id)
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          {data?.title}
          <p>{data?.body}</p>
        </div>
      )}

      <div>
        <Button onClick={() => navigate(-1)} children={"Back"} />
      </div>
    </div>
  );
};

export default Post;
