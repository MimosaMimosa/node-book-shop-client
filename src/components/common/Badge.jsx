const Badge = ({ code, children }) => {
	switch (code) {
		case 1:
			return (
				<span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900'>
					{children}
				</span>
			);
		case 2:
			return (
				<span className='bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900'>
					{children}
				</span>
			);
		default:
			return (
				<span className='bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900'>
					{children}
				</span>
			);
	}
};

export default Badge;
