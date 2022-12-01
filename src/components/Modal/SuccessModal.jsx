import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const SuccessModal = ({
	open = false,
	setOpen,
}) => {
	const cancelButtonRef = useRef(null);
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				initialFocus={cancelButtonRef}
				onClose={() => false}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<Dialog.Panel className='py-10 relative transform overflow-hidden rounded-[2.5em] bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm'>
								<CheckCircleIcon
									sx={{
										color: "rgb(14 159 110 / var(--tw-bg-opacity))",
										fontSize: "120px",
									}}
								/>
								<h3 className='fond-bold text-lg mt-5'>
									Amazing !
								</h3>
								<p className='text-gray-500 mt-3'>
									Item is successfully added to order list.
								</p>
								<button
									onClick={() => {
										setOpen(false);
									}}
									type='button'
									className='text-white rounded-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br mt-5 focus:outline-none   font-medium text-sm px-28 py-4 text-center mr-2 mb-2'
								>
									Back to Cart
								</button>
								<div>
									<Link to='/orders'>
										<span className='text-red-500 block mt-5'>
											Go to my order list.
										</span>
									</Link>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default SuccessModal;
