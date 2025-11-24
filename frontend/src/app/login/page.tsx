// 'use client'
// import Header from '@/components/common/header/Header'
// import { useAuth } from '@/context/AuthContext'
// import axios from 'axios'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import React, { useState } from 'react'

// const Login = () => {
//   const { login } = useAuth();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   })
//   const [loading, setLoading] = useState(false)
//   const [message, setMessage] = useState("")
//   // const router = useRouter()

//   const handleChange = (e: any) => {
//     setFormData({
//       ...formData, [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     setLoading(true);
//     setMessage("");

//     try {
//       await login(formData);

//     } catch (err: any) {
//       console.error(err);

//       const errorMsg =
//         err.response?.data?.message ||
//         err.response?.data?.error ||
//         "Login failed. Please check your credentials.";

//       setMessage(errorMsg);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className='w-full'>
//       <div className='w-[80%] mx-auto  '>
//         <Header />
//       </div>
//       <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-9 my-12  sm:pr-8 lg:pr-[135px]">

//         <div className="bg-[#CBE4E8] flex justify-center w-full items-center lg:max-w-[705px] lg:max-h-[781px]  lg:mr-[80px]">
//           <div className="w-full max-w-[700px] mt-8 sm:mt-12 lg:mt-[75px]">
//             <Image
//               src="/beatsnoop.png"
//               width={800}
//               height={706}
//               alt="Beat Snoop"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>


//         <section className="w-full max-w-md my-auto flex flex-col justify-between mx-auto">

//           <div className="mb-6">
//             <h1 className="text-2xl sm:text-3xl font-medium text-black tracking-wide leading-tight px-2">
//               Log in to Exclusive
//             </h1>
//             <h3 className="text-sm sm:text-base text-black mt-2 px-2">
//               Enter your details below
//             </h3>
//           </div>


//           <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

//             <input
//               onChange={handleChange}
//               type="email"
//               name="email"
//               value={formData.email}
//               placeholder="Email or Phone Number"
//               className="border-b border-gray-400 text-black w-full p-2 focus:outline-none"
//               required
//             />
//             <input
//               onChange={handleChange}
//               type="password"
//               name='password'
//               value={formData.password}
//               placeholder="Password"
//               className="border-b border-gray-400 text-black w-full p-2 focus:outline-none"
//               required
//             />
//             <div className="w-full flex justify-between items-center mt-8">
//               <button className="w-[153px] h-14 rounded text-base text-white bg-[#DB4444] font-medium">
//                 {loading ? "Loging In..." : "Login"}
//               </button>
//               {message && (
//                 <p className="text-center mt-4 text-sm text-red-600">{message}</p>
//               )}
//             </div>
//           </form>




//         </section>
//       </div>
//     </div>


//   )
// }

// export default Login

'use client'

import Header from '@/components/common/header/Header'
import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'
import React, { useState } from 'react'

const Login = () => {
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      await login(formData)
      // No need to redirect here, AuthContext already handles it
    } catch (err: any) {
      console.error(err)
      setMessage(
        err.response?.data?.message ||
        err.response?.data?.error ||
        'Login failed. Please check your credentials.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-full'>
      <div className='w-[80%] mx-auto'>
        <Header />
      </div>

      <div className='w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-9 my-12 sm:pr-8 lg:pr-[135px]'>
        <div className='bg-[#CBE4E8] flex justify-center w-full items-center lg:max-w-[705px] lg:max-h-[781px] lg:mr-[80px]'>
          <div className='w-full max-w-[700px] mt-8 sm:mt-12 lg:mt-[75px]'>
            <Image
              src='/beatsnoop.png'
              width={800}
              height={706}
              alt='Beat Snoop'
              className='w-full h-auto object-contain'
            />
          </div>
        </div>

        <section className='w-full max-w-md my-auto flex flex-col justify-between mx-auto'>
          <div className='mb-6'>
            <h1 className='text-2xl sm:text-3xl font-medium text-black tracking-wide leading-tight px-2'>
              Log in to Exclusive
            </h1>
            <h3 className='text-sm sm:text-base text-black mt-2 px-2'>
              Enter your details below
            </h3>
          </div>

          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email or Phone Number'
              className='border-b border-gray-400 text-black w-full p-2 focus:outline-none'
              required
            />
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
              className='border-b border-gray-400 text-black w-full p-2 focus:outline-none'
              required
            />

            <div className='w-full flex justify-between items-center mt-8'>
              <button
                type='submit'
                disabled={loading}
                className='w-[153px] h-14 rounded text-base text-white bg-[#DB4444] font-medium disabled:opacity-50'
              >
                {loading ? 'Logging In...' : 'Login'}
              </button>
              {message && (
                <p className='text-center mt-4 text-sm text-red-600'>{message}</p>
              )}
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Login
