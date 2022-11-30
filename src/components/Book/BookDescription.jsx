const BookDescription = ({ book }) => {
	return (
		<div>
			<h2 className='font-bold text-3xl font-serif'>{book?.name}</h2>
			<p>{book?.description}</p>
		</div>
	);
};

export default BookDescription;
