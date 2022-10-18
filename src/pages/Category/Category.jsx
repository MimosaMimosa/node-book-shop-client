import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import PageBanner from "../../components/Bannder/PageBanner";
import FilterRadioGroup from "../../components/Filter/FilterRadioGroup";
import Navbar from "../../components/Navbar/Navbar";

const Category = () => {
	const oneTimeComponent = useMemo(() => <PageBanner />, []);
	const [filter, setFilter] = useState([]);

	useEffect(() => {
		Promise.all([
			axios.get("http://localhost:4000/api/v1/categories"),
		]).then((res) => {
            setFilter(()=>{
                return res.map(result => result.data)
            })
        });
	}, []);
	return (
		<>
			<Navbar />
			{oneTimeComponent}
			<div className='flex container mt-10'>
				<div className='w-[33.3333333333%] border-2 border-gray-100 p-10'>
					<FilterRadioGroup
						lists={filter}
						title='Filter by Genres'
					/>
				</div>
			</div>
		</>
	);
};

export default Category;
