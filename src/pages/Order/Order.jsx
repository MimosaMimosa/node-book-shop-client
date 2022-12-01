import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import Badge from "../../components/common/Badge";
import { store } from "../../redux/reducer/orderSlice";
dayjs.extend(relativeTime);

const Order = () => {
	const data = useRouteLoaderData("order");
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.orders.data);
	useEffect(() => {
		/* eslint-disable */
		dispatch(store(data));
	}, []);
	return (
		<>
			<div
				className='container h-[350px] bg-top bg-no-repeat bg-cover'
				style={{
					backgroundImage: 'url("./assets/image/orders.jpg")',
				}}
			></div>
			<div className='container my-5'>
				<div className='overflow-x-auto shadow-md sm:rounded-lg mt-4'>
					<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
						<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
							<tr>
								<th scope='col' className='py-3 px-6'>
									ID
								</th>
								<th scope='col' className='py-3 px-6'>
									status
								</th>
								<th scope='col' className='py-3 px-6'>
									created at
								</th>
								<th scope='col' className='py-3 px-6'>
									address
								</th>
								<th scope='col' className='py-3 px-6'>
									phone
								</th>
								<th scope='col' className='py-3 px-6'>
									amount
								</th>
								<th scope='col' className='py-3 px-6'>
									waiting time
								</th>
							</tr>
						</thead>
						<tbody>
							{orders?.map((order) => {
								return (
									<Fragment key={order._id}>
										<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
											<th
												scope='row'
												className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
											>
												{order._id}
											</th>
											<td className='py-4 px-6'>
												<Badge
													code={order.status?.code}
												>
													{order.status?.label}
												</Badge>
											</td>
											<td className='py-4 px-6'>
												{dayjs().from(
													dayjs(order.createdAt)
												)}
											</td>
											<td className='py-4 px-6'>
												{order.address}
											</td>
											<td className='py-4 px-6'>
												{order.phone}
											</td>
											<td className='py-4 px-6'>
												${order.amount.toFixed(2)}
											</td>
											<td className='py-4 px-6'>
												{order.waiting_time || "...."}
											</td>
											<td className='py-4 px-6'>
												<button
													type='button'
													className='text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 '
												>
													Delete
												</button>
											</td>
										</tr>
									</Fragment>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Order;
