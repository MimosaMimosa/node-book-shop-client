import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import ShareIcon from "@mui/icons-material/Share";
import AlertModal from "../../components/Modal/AlertModal";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { postCarts } from "../../redux/reducer/cartSlice";
import { toast } from "react-toastify";

const BookDetails = () => {
	const params = useParams();
	const [book, setBook] = useState({});
	const [open, setOpen] = useState(false);
	const loader = useSelector((state) => state.carts.pending);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleAction = () => {
		dispatch(
			postCarts({
				url: `${process.env.REACT_APP_API_URL}/api/v1/carts`,
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
				setOpen(false);
			});
	};

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
											className='bg-white hover:bg-red-600 hover:text-white text-black rounded-3xl border py-3 px-10'
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
						<div className='flex'>
							<button className='mr-5 rounded-3xl border-1 bg-red-600 text-white py-2 px-10 text-white'>
								Description
							</button>
							<button className='mr-5 rounded-3xl border-2 text-black py-2 px-10'>
								Author
							</button>
							<button className='mr-5 rounded-3xl border-2 text-black py-2 px-10'>
								Comments
							</button>
							<button className='mr-5 rounded-3xl border-2 text-black py-2 px-10'>
								Review
							</button>
						</div>
						<div className='mt-10 leading-8'>
							<p className='font-thin text-neutral-500'>
								Beryl Cook is one of Britain’s most talented and
								amusing artists .Beryl’s pictures feature women
								of all shapes and sizes enjoying themselves
								.Born between the two world wars, Beryl Cook
								eventually left Kendrick School in Reading at
								the age of 15, where she went to secretarial
								school and then into an insurance office. After
								moving to London and then Hampton, she
								eventually married her next door neighbour from
								Reading, John Cook. He was an officer in the
								Merchant Navy and after he left the sea in 1956,
								they bought a pub for a year before John took a
								job in Southern Rhodesia with a motor company.
								Beryl bought their young son a box of
								watercolours, and when showing him how to use
								it, she decided that she herself quite enjoyed
								painting. John subsequently bought her a child’s
								painting set for her birthday and it was with
								this that she produced her first significant
								work, a half-length portrait of a dark-skinned
								lady with a vacant expression and large drooping
								breasts. It was aptly named ‘Hangover’ by
								Beryl’s husband and It is often frustrating to
								attempt to plan meals that are designed for one.
								Despite this fact, we are seeing more and more
								recipe books and Internet websites that are
								dedicated to the act of cooking for one. Divorce
								and the death of spouses or grown children
								leaving for college are all reasons that someone
								accustomed to cooking for more than one would
								suddenly need to learn how to adjust all the
								cooking practices utilized before into a
								streamlined plan of cooking that is more
								efficient for one person creating less.
							</p>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default BookDetails;
