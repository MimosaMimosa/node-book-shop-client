import { useId, useState } from "react";

const Genres = ({ lists, title, index, handleChange }) => {
	const defaultId = useId();
	const [checked, setChecked] = useState(defaultId);

	return (
		<>
			<h3 className='font-serif font-bold text-lg'>{title}</h3>
			<div className='flex items-center mb-4 mt-4'>
				<input
					checked={defaultId === checked}
					id={defaultId}
					onChange={() => {
						handleChange("");
						setChecked(defaultId);
					}}
					type='radio'
					className=' w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
				/>
				<label
					htmlFor={defaultId}
					className='ml-3 text-md text-gray-900 dark:text-gray-300'
				>
					All
				</label>
			</div>
			{lists.map((list, i) => (
				<div className='flex items-center mb-4 mt-4' key={list._id}>
					<input
						checked={list._id === checked}
						value={list._id}
						id={list._id}
						type='radio'
						onChange={(e) => {
							setChecked(list._id);
							handleChange(e.target.value);
						}}
						className='cursor-pointer w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
					/>
					<label
						htmlFor={list._id}
						className='ml-3 text-md text-gray-900 dark:text-gray-300 cursor-pointer'
					>
						{list.name}
					</label>
				</div>
			))}
		</>
	);
};

export default Genres;
