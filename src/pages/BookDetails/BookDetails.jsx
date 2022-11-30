import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import ShareIcon from "@mui/icons-material/Share";
import AlertModal from "../../components/Modal/AlertModal";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { postCarts } from "../../redux/reducer/authSlice";
import Comment from "../../components/comment/Comment";
import AuthorDetail from "../../components/author/AuthorDetail";
import BookDescription from "../../components/Book/BookDescription";

const BookDetails = () => {
	const params = useParams();
	const [book, setBook] = useState({});
	const [open, setOpen] = useState(false);
	const [select, setSelect] = useState("description");
	const [loader, setLoader] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSelect = (e) => {
		setSelect(e.currentTarget.id);
	};

	const handleAction = () => {
		setLoader(true);
		dispatch(
			postCarts({
				data: {
					book: params.id,
					quantity: 1,
				},
			})
		)
			.unwrap()
			.then(() => {
				toast.success("success");
			})
			.catch(({ response: { status } }) => {
				if (status === 401) {
					navigate("/login?reset=true");
				}
			})
			.finally(() => {
				setLoader(false);
				setOpen(false);
			});
	};

	const selectMemo = useMemo(() => {
		switch (select) {
			case "description":
				return <BookDescription book={book}/>;
			case "author":
				return <AuthorDetail author={book.author} />;
			case "comments":
				return <Comment />;
			case "review":
				return <p className='font-thin text-neutral-500'>review</p>;
			default:
				break;
		}
	}, [select, book]);

	useEffect(() => {
		const getBook = async (id) => {
			try {
				const res = await axios(
					`${process.env.REACT_APP_API_URL}/api/v1/books/${id}`
				);
				setBook(res.data.book);
			} catch (error) {
				console.error(error);
			}
		};
		getBook(params.id);
	}, [params.id, navigate]);

	return (
		<>
			<AlertModal
				open={open}
				setOpen={setOpen}
				handleAction={handleAction}
				loader={loader}
			/>
			{Object.keys(book).length ? (
				<>
					<div className='container'>
						<div className='bg-red-600 py-[29px] pl-[80px] pr-[20px]'>
							<div className='flex items-center'>
								<div>
									<img
										src={book.image[0].url}
										alt={book.name}
										className='object-contain h-[427px]'
									/>
								</div>
								<div className='text-white ml-10'>
									<h2 className='text-3xl font-serif font-bold'>
										{book.name}
									</h2>
									<span className='text-xs block mt-1'>
										{book.author.name}
									</span>
									<span className='block mt-10 text-3xl'>
										$<span>{book.price.toFixed(2)}</span>
									</span>
									<div className='flex items-center mt-3'>
										<StarOutlinedIcon
											style={{ color: "white" }}
										/>
										<StarOutlinedIcon
											style={{ color: "white" }}
										/>
										<StarOutlinedIcon
											style={{ color: "white" }}
										/>
										<StarOutlinedIcon
											style={{ color: "white" }}
										/>
										<StarHalfOutlinedIcon
											style={{ color: "white" }}
										/>
										<span className='text-xs ml-1'>
											(120 Review)
										</span>
									</div>
									<div className='flex items-center mt-10'>
										<button
											className='bg-white hover:bg-red-600	00 hover:text-white text-black rounded-3xl border py-3 px-10'
											onClick={() => {
												setOpen(true);
											}}
										>
											Add To Cart
										</button>
										<div className='border-2 w-[50px] h-[50px] rounded-[50%] ml-5 flex items-center justify-center cursor-pointer'>
											<ShareIcon
												style={{ color: "white" }}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='container mt-10'>
						<ul className='flex'>
							<li onClick={handleSelect} id='description'>
								<button
									className={`mr-5 rounded-3xl border-2 py-2 px-10 ${
										select === "description"
											? "bg-red-600 text-white"
											: "bg-inherit"
									}`}
								>
									Description
								</button>
							</li>
							<li onClick={handleSelect} id='author'>
								<button
									className={`mr-5 rounded-3xl border-2 py-2 px-10 ${
										select === "author"
											? "bg-red-600 text-white"
											: "bg-inherit"
									}`}
								>
									Author
								</button>
							</li>

							<li onClick={handleSelect} id='comments'>
								<button
									className={`mr-5 rounded-3xl border-2 py-2 px-10 ${
										select === "comments"
											? "bg-red-600 text-white"
											: "bg-inherit"
									}`}
								>
									Comments
								</button>
							</li>
							<li onClick={handleSelect} id='review'>
								<button
									className={`mr-5 rounded-3xl border-2 py-2 px-10 ${
										select === "review"
											? "bg-red-600 text-white"
											: "bg-inherit"
									}`}
								>
									Review
								</button>
							</li>
						</ul>
						<div className='mt-5 leading-8'>{selectMemo}</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default BookDetails;
