'use client'

import {
	Select,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectContent,
} from '@/components/ui/select'
import { locales } from '@/data/locale'
import { useLocalStorage } from 'usehooks-ts'

export function ToggleLocales() {
	const [locale, setLocale] = useLocalStorage('locale', 'en')

	return (
		<Select value={locale} onValueChange={setLocale}>
			<SelectTrigger className='w-fit'>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{locales.map((locale) => (
					<SelectItem key={locale.code} value={locale.code}>
						{locale.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
