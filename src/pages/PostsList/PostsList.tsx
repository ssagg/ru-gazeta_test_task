import { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { TPost } from "../../models/models";
import { getPosts } from "../../api/Api.ts";
import styles from "./PostsList.module.css";
import { useNavigate } from "react-router-dom";

type PostsList = {
  posts: TPost[];
  setPosts: React.Dispatch<React.SetStateAction<TPost[]>>;
};
const PostsList = ({ posts, setPosts }: PostsList) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  const fetchPosts = () => {
    if (!posts.length) {
      setIsLoading(false);
      getPosts()
        .then((json) => {
          setPosts(json);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  return (
    <section className={styles.container}>
      {isLoading
        ? "Loading..."
        : currentPosts.map((post: TPost) => {
            return (
              <Card
                key={post.id}
                post={post}
                onClick={() => navigate(`/post/${post.id}`)}
              />
            );
          })}
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default PostsList;
