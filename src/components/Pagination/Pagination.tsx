import Button from "../Button/Button";
import React from "react";
import styles from "./Pagination.module.css";

type Pagination = {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
}: Pagination) => {
  const pages: Array<number> = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.buttonsContainer}>
      {pages.map((page, index) => {
        return (
          <Button
            key={index}
            onClick={() => setCurrentPage(page)}
            children={page}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
