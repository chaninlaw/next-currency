import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ConverterInput } from '@/components/converter-input'

export function ConverterCardWrapper() {
	return (
		<Card>
			<CardHeader>
				<CardDescription>1 Thai Baht equals</CardDescription>
				<CardTitle>0.028 United States Dollar</CardTitle>
				<CardDescription>Jan 28, 11:42 UTC</CardDescription>
			</CardHeader>
			<CardContent className='w-full flex flex-col'>
				<div className='flex flex-col space-y-2'>
					<ConverterInput />
					<ConverterInput />
				</div>
			</CardContent>
		</Card>
	)
}
