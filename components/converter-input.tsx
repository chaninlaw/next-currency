'use client'

import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useEffect, useState } from 'react'

interface ConverterInputProps {
	currencyList: string[]
	choice: {
		value: string
		setValue: (value: string) => void
	}
	input: {
		value: string
		setValue: (value: string) => void
	}
}

export function ConverterInput({
	currencyList,
	choice,
	input,
}: ConverterInputProps) {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		input.setValue(e.target.value)
	}

	return (
		<div className='flex max-w-sm items-center space-x-2'>
			<div
				lang='en-US'
				className='flex rounded-md border border-1 border-ring group focus:ring-2 focus:ring-ring focus-within:ring-2 focus-within:ring-ring focus-visible:ring-2 focus-visible:ring-ring'
			>
				<Input
					placeholder='Enter amount'
					type='number'
					min='0'
					step='0.01'
					inputMode='numeric'
					pattern='[0-9]+([.][0-9]+)?'
					className='border-0 focus:outline-none focus:ring-none focus-visible:outline-none focus-visible:ring-0'
					value={input.value}
					onChange={onChange}
				/>
				<Separator orientation='vertical' className='h-[unset] my-2' />
				<Select value={choice.value} onValueChange={choice.setValue}>
					<SelectTrigger className='border-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus:ring-0'>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{currencyList.map((currency) => (
							<SelectItem key={currency} value={currency}>
								{currency}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
