import { unstable_noStore } from 'next/cache'
import { NextResponse } from 'next/server'

export const revalidate = 60 * 60 * 60

export async function GET(req: Request) {
	unstable_noStore()
	const endpoint = 'https://api.freecurrencyapi.com/v1/latest'
	const response = await fetch(
		`${endpoint}?apikey=${process.env.FREE_CURRENCIES_API_KEY}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)

	const data = await response.json()

	return NextResponse.json({ data: data.data })
}
