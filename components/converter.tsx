import { apiCurrencies } from '@/api/currencies'
import { ConverterCardWrapper } from './converter-card-wrapper'
import { Suspense } from 'react'

export default async function Converter() {
	// const currencies = await apiCurrencies.get({ currencies, base_currency })
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ConverterCardWrapper />
			</Suspense>
		</>
	)
}
