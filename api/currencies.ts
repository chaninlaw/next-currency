import axios from 'axios'

const endpoint = 'https://app.freecurrencyapi.com/'

export type CurrencyParams = {
	base_currency?: string
	currencies: string[]
}

export const apiCurrencies = {
	get: (params: CurrencyParams) =>
		axios.get(endpoint, {
			params: {
				...params,
				latest: process.env.FREE_CURRENCIES_API_KEY,
				currencies: params.currencies.join(',').toUpperCase(),
			},
		}),
}
