import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

export function ConverterInput() {
	return (
		<div className='flex max-w-sm items-center space-x-2'>
			<div className='flex rounded-md border border-1 border-ring group focus:ring-2 focus:ring-ring focus-within:ring-2 focus-within:ring-ring focus-visible:ring-2 focus-visible:ring-ring'>
				<Input
					placeholder='Amount'
					type='number'
					className='border-0 focus:outline-none focus:ring-none focus-visible:outline-none focus-visible:ring-0'
				/>
				<Separator orientation='vertical' className='h-[unset] my-2' />
				<Select defaultValue='USD'>
					<SelectTrigger className='border-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus:ring-0'>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='USD'>USD</SelectItem>
						<SelectItem value='THB'>THB</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
