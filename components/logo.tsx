export function Logo() {
	return (
		<div className='text-2xl font-black'>
			<span
				className={`
      bg-clip-text text-transparent 
      bg-gradient-to-r from-slate-400 from-5% via-indigo-950 via-50% to-blue-950 to-80%
      dark:from-slate-800 dark:from-5% dark:via-slate-600 dark:via-30% dark:to-white dark:to-80%
      `}
			>
				G-Next
			</span>
		</div>
	)
}
