import { Route, Routes } from "react-router-dom";

import { APP_ROUTES } from "./constants/constants";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Post from "./pages/Post/Post";
import PostsList from "./pages/PostsList/PostsList";
import { TPost } from "./models/models";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState<TPost[]>([]);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path={APP_ROUTES.INDEX}
          element={<PostsList posts={posts} setPosts={setPosts} />}
        />
        <Route path={`${APP_ROUTES.POST}/:id`} element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
