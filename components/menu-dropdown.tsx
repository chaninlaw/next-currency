'use client'

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export function MobileMenuDropdown() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size={'icon'} variant={'ghost'}>
					<HamburgerMenuIcon />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Theme</SheetTitle>
					<SheetDescription>
						<RadioGroup className='flex justify-evenly'>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='light' id='light' />
								<Label htmlFor='light'>Light</Label>
							</div>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='dark' id='dark' />
								<Label htmlFor='dark'>Dark</Label>
							</div>
						</RadioGroup>
					</SheetDescription>
					<SheetTitle>Languages</SheetTitle>
					<SheetDescription>
						<RadioGroup>
							<RadioGroup className='flex justify-evenly'>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem value='en' id='en' />
									<Label htmlFor='en'>English</Label>
								</div>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem value='th' id='th' />
									<Label htmlFor='th'>Thai</Label>
								</div>
							</RadioGroup>
						</RadioGroup>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
