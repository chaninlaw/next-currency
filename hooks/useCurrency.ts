import { useState } from 'react'

export const useCurrency = (defaultChoice: string, defaultValue: number) => {
	const [choice, setChoice] = useState(defaultChoice)
	const [value, setValue] = useState<number>(defaultValue)

	return {
		choice,
		setChoice,
		value,
		setValue,
	}
}
