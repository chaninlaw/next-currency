import { StarIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export function RateButton() {
	return (
		<Button size={'default'} variant={'outline'}>
			<StarIcon className='md:mr-2' />
			<span className='hidden md:inline'>Rate me</span>
		</Button>
	)
}
