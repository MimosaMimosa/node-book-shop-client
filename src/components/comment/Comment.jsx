import { useSelector } from "react-redux";
import CommentInput from "./CommentInput";

const Comment = () => {
	const user = useSelector((state) => state.auth.user);

	return <>{Object.keys(user).length ? <CommentInput /> : null}</>;
};

export default Comment;
