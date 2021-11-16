import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from './store/asyncReducers/customers'

const App = () => {
	const dispatch = useDispatch()
	const customers = useSelector(state => state.customers.customers)

	const addCustomer = name => {
		const customer = {
			name,
			id: Date.now(),
		}
		dispatch(addCustomerAction(customer))
	}
	const removeCustomer = id => {
		dispatch(removeCustomerAction(id))
	}

	return (
		<div className="container">
			{
				customers.length ? (
					<div className='p-3'>
						{ customers.map(customer => {
							return (
								<div
									onClick={ () => {
										removeCustomer(customer.id)
									} }
									key={ customer.id }
									className='fs-3 my-2 p-2 text-center text-white border border-2'>
									{ customer.name }
								</div>
							)
						}) }
					</div >
				) : <h2 className='my-3 text-center'>Clients not found</h2>
			}
			<div
				style={ { bottom: '25px' } }
				className='position-fixed start-50 translate-middle-x d-flex justify-content-center gap-4'>
				<button
					onClick={ () => addCustomer(String(prompt('Enter name'))) }
					className='btn btn-lg btn-primary'>
					Add client
				</button>
				<button
					onClick={ () => dispatch(fetchCustomers()) }
					className='btn btn-lg btn-warning'>
					Get clients from the database
				</button>
			</div>
		</div >
	)
}
export default App