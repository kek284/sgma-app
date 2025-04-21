import { useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();
  return <div>🖼 Пост #{id}</div>;
};

export default PostPage;
