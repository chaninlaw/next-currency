'use client'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ConverterInput } from '@/components/converter-input'
import { formatDate, toTowDigitStr } from '@/lib/utils'
import { useCurrency } from '@/hooks/useCurrency'
import { useMemo } from 'react'

const defaultFromChoice = 'USD'
const defaultToChoice = 'THB'
export function ConverterCardWrapper({
	currencies,
}: {
	currencies: { data: Record<string, number> }
}) {
	const currencyList = Object.keys(currencies.data)
	const from = useCurrency(defaultFromChoice, 1)
	const to = useCurrency(defaultToChoice, currencies.data[defaultToChoice])
	const rate = useMemo(
		() => currencies.data[from.choice] / currencies.data[to.choice],
		[currencies.data, from.choice, to.choice]
	)

	const onInputChange = (inputType: 'form' | 'to', value: string) => {
		if (inputType === 'form') {
			from.setValue(+value)
			to.setValue(+value / rate)
		} else {
			from.setValue(+value * rate)
			to.setValue(+value)
		}
	}

	const onChoiceChange = (choiceType: 'form' | 'to', value: string) => {
		const newRate =
			choiceType === 'form'
				? currencies.data[value] / currencies.data[to.choice]
				: currencies.data[from.choice] / currencies.data[value]
		if (choiceType === 'form') {
			to.setValue(from.value / newRate)
			from.setChoice(value)
		} else {
			from.setValue(to.value * newRate)
			to.setChoice(value)
		}
	}

	return (
		<Card>
			<CardHeader>
				<CardDescription>1 {from.choice} equals</CardDescription>
				<CardTitle>
					{toTowDigitStr(1 / rate)} {to.choice}
				</CardTitle>
				<CardDescription>{formatDate()}</CardDescription>
			</CardHeader>
			<CardContent className='w-full flex flex-col'>
				<div className='flex flex-col space-y-2'>
					{/* "From" currency input */}
					<ConverterInput
						currencyList={currencyList}
						choice={{
							value: from.choice,
							setValue: onChoiceChange.bind(null, 'form'),
						}}
						input={{
							value: from.value.toString(),
							setValue: onInputChange.bind(null, 'form'),
						}}
					/>
					{/* "To" currency input, now editable */}
					<ConverterInput
						currencyList={currencyList}
						choice={{
							value: to.choice,
							setValue: onChoiceChange.bind(null, 'to'),
						}}
						input={{
							value: to.value.toString(),
							setValue: onInputChange.bind(null, 'to'),
						}}
					/>
				</div>
			</CardContent>
		</Card>
	)
}
