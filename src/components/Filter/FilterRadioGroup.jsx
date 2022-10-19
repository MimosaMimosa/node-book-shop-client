import { useId, useState } from "react";


const Genres = ({ lists,title,index, handleChange}) => {
	const defaultId = useId();
	const [checked,setChecked] = useState(defaultId)

	return (
		<>
			<h3 className='font-serif font-bold text-lg'>{title}</h3>
			<div className='flex items-center mb-4 mt-4'>
					<input
						checked={defaultId === checked}
						id={defaultId}
						onChange={()=>{
							handleChange('')
							setChecked(defaultId)
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
			{lists.length && lists[index].map((list, i) => (
				<div className='flex items-center mb-4 mt-4' key={list._id}>
					<input
						checked={i === checked}
						value={list._id}
						id={list._id}
						type='radio'
						onChange={(e)=>{
							setChecked(()=> Number(i))
							handleChange(e.target.value)
						}}
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
