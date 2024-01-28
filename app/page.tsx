import Converter from '@/components/converter'

export default function Home() {
	return (
		<main className='container flex min-h-screen flex-col max-w-screen-2xl pt-12'>
			<div className='flex items-center justify-between'>
				<div className='text-center md:text-start w-full ml-1 md:w-1/2'>
					<h1 className='text-5xl md:text-start md:text-6xl lg:text-7xl xl:text-8xl font-bold'>
						Live currency converter
					</h1>
					<p className='my-2'>Currency Exchange Rates Calculator</p>
				</div>
			</div>
			<Converter />
		</main>
	)
}
