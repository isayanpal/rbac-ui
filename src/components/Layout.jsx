import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <aside className='w-64 b-gray-800 text-white p-4'>
        <h1 className='text-2xl font-bold text-blue-600'>RBAC Dashboard</h1>
      </aside>
      <nav>
        <ul className='mt-4'>
            <li>
                <a href="#" className='block py-2 hover:bg-slate-700'>Users</a>
            </li>
            <li>
                <a href="#" className='block py-2 hover:bg-slate-700'>Roles</a>
            </li>
        </ul>
      </nav>
      <main className='flex-1 p-6'>{children}</main>
    </div>
  )
}
