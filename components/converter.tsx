import { ConverterCardWrapper } from './converter-card-wrapper'
import { Suspense } from 'react'

export default async function Converter() {
	const response = await fetch(
		new URL('/api/currencies', process.env.URL).href,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
	const currencies = await response.json()

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ConverterCardWrapper currencies={currencies.data} />
			</Suspense>
		</>
	)
}
