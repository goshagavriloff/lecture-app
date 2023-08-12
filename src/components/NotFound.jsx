import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    
  return (
    <div className="flex-auto">
        <div className="sm:px-8 flex h-full items-center pt-16 sm:pt-32">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        <div className="flex flex-col items-center">
                        <p className="text-base font-semibold text-zinc-400 indigo:text-zinc-500">404</p>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 indigo:text-zinc-100 sm:text-5xl">Page not found</h1>
                        <p className="mt-4 text-base text-zinc-600 indigo:text-zinc-400">Sorry, we couldn’t find the page you’re looking for.</p>
                        <Link className='inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 indigo:bg-zinc-800/50 indigo:text-zinc-300 indigo:hover:bg-zinc-800 indigo:hover:text-zinc-50 indigo:active:bg-zinc-800/50 indigo:active:text-zinc-50/70 mt-4' to='javascript:history.go(-1)'>Go back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotFound