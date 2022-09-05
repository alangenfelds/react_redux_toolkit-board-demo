import { useSelector } from "react-redux";
import { useGetPostsQuery } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    const { ids } = posts;
    content = ids.map((id) => (
      <PostsExcerpt key={id} postId={id} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
