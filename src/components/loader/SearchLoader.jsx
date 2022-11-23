import { createPortal } from "react-dom";
import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
	return (
		<div className='fixed inset-0 bg-gray-500 bg-opacity-[0.2] transition-opacity opacity-100'>
			<div className='fixed inset-0 z-40 overflow-y-auto'>
				<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
					<MagnifyingGlass
						visible={true}
						height='80'
						width='80'
						ariaLabel='MagnifyingGlass-loading'
						wrapperStyle={{}}
						wrapperClass='MagnifyingGlass-wrapper'
						glassColor='#c0efff'
						color='#e15b64'
					/>
				</div>
			</div>
		</div>
	);
};

const SearchLoader = () => createPortal(<Loader/>,document.getElementById('loader'))

export default SearchLoader;
