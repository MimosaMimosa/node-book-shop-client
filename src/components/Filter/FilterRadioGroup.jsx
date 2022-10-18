import { useState } from "react";

const Genres = ({ lists,title}) => {
	const [checked,setChecked] = useState(0)
	return (
		<>
			<h3 className='font-serif font-bold text-lg'>{title}</h3>
			{lists.length && lists[0].map((list, i) => (
				<div className='flex items-center mb-4 mt-4' key={list._id}>
					<input
						checked={i === checked}
						value={list.name}
						id={list._id}
						type='radio'
						onChange={()=>setChecked(()=> Number(i))}
						className=' w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
					/>
					<label
						htmlFor={list._id}
						className='ml-3 text-md text-gray-900 dark:text-gray-300'
					>
						{list.name}
					</label>
				</div>
			))}
		</>
	);
};

export default Genres;
