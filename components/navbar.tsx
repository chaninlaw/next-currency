import { ToggleTheme } from '@/components/toggle-theme'
import { ToggleLocales } from '@/components/toggle-locales'
import { Logo } from '@/components/logo'
import { RateButton } from './rate-button'
import { MobileMenuDropdown } from './menu-dropdown'

export function Navbar() {
	return (
		<header className='container flex h-16 max-w-screen-2xl items-center'>
			<div className='flex items-center space-x-4'>
				<Logo />
				{/* <p className='text-sm font-thin place-self-end mb-1 hidden'>
					Currency converter
				</p> */}
			</div>
			<div className='flex flex-1 items-center space-x-2 justify-end'>
				<div className='hidden md:flex'>
					<ToggleLocales />
					<ToggleTheme />
				</div>
				<RateButton />
				<div className='flex md:hidden'>
					<MobileMenuDropdown />
				</div>
			</div>
		</header>
	)
}
