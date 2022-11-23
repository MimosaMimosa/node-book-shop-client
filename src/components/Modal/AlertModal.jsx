import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const AlertModal = ({
	open = false,
	setOpen,
	handleAction,
	loader = false,
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
							<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
								<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
									<div className='sm:flex sm:items-start'>
										<div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
											<ShoppingCartIcon
												className='h-6 w-6 text-green-600'
												aria-hidden='true'
											/>
										</div>
										<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
											<Dialog.Title
												as='h3'
												className='text-lg font-medium leading-6 text-gray-900'
											>
												Shopping Cart.
											</Dialog.Title>
											<div className='mt-2'>
												<p className='text-sm text-gray-500'>
													Are you sure you want to
													deactivate your account? All
													of your data will be
													permanently removed. This
													action cannot be undone.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 focus:ring-0'>
									{!loader ? (
										<>
											<button
												type='button'
												className='inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none  focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
												onClick={() => handleAction()}
											>
												OK
											</button>
											<button
												type='button'
												className='mt-3 focus:ring-0 inline-flex w-full justify-center rounded-md border border-gray-300 bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none  focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
												ref={cancelButtonRef}
												onClick={() => setOpen(false)}
											>
												Cancel
											</button>
										</>
									) : (
										<button
											type='button'
											className='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed'
											disabled=''
										>
											<svg
												className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
											>
												<circle
													className='opacity-25'
													cx='12'
													cy='12'
													r='10'
													stroke='currentColor'
													strokeWidth='4'
												></circle>
												<path
													className='opacity-75'
													fill='currentColor'
													d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
												></path>
											</svg>
											Processing...
										</button>
									)}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default AlertModal;
