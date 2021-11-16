const defaultStore = {
	customers: [],
}

const ADDCUSTOMER = 'ADDCUSTOMER'
const REMOVECUSTOMERS = 'REMOVECUSTOMERS'
const ADDMANYCUSTOMERS = 'ADDMANYCUSTOMERS'

export const customerReducer = (state = defaultStore, action) => {
	switch (action.type) {
		case ADDMANYCUSTOMERS:
			return { ...state, customers: [...state.customers, ...action.payload] }
		case ADDCUSTOMER:
			return { ...state, customers: [...state.customers, action.payload] }
		case REMOVECUSTOMERS:
			return {
				...state,
				customers: state.customers.filter(
					customer => customer.id !== action.payload,
				),
			}
		default:
			return state
	}
}

export const addManyCustomersAction = payload => ({
	type: ADDMANYCUSTOMERS,
	payload,
})
export const addCustomerAction = payload => ({ type: ADDCUSTOMER, payload })
export const removeCustomerAction = payload => ({ type: ADDCUSTOMER, payload })
