
'use client'
import Header from '@/components/common/header/Header';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const SignUp = () => {
  const {register} = useAuth()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await register(formData);
      setMessage("Account created successfully!");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <Header />
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-9 my-12 sm:pr-8 lg:pr-[135px]">

        <div className="bg-[#CBE4E8] flex justify-center items-center w-full lg:max-w-[705px] lg:max-h-[781px] lg:mr-[80px]">
          <div className="w-full max-w-[700px] mt-8 sm:mt-12 lg:mt-[75px]">
            <Image src="/beatsnoop.png" width={700} height={606} alt="Beat Snoop" className="w-full h-auto object-contain" />
          </div>
        </div>


        {
          message === "Account created successfully!" ?

            (
              <div className='w-full max-w-md my-auto flex flex-col gap-4 mx-auto '>
                <div className="flex flex-col justify-center items-center gap-2 text-sm md:text-base w-full h-[150px] shadow-md">
                  <h1>Welcome!</h1>
                  <h1 className="text-red-500 font-semibold text-5xl">{formData.name}</h1>
                  <p className='text-[20px]'>{formData.email}</p>
                </div>
                <Link href='/login' >
                  <button
                    className="w-full h-14 rounded text-white bg-[#DB4444] font-medium"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            ) :
            (
              <section className="w-full max-w-md my-auto flex flex-col mx-auto">

                <div className="mb-6 px-2">
                  <h1 className="text-2xl sm:text-3xl font-medium text-black">Create an account</h1>
                  <h3 className="text-sm sm:text-base text-black mt-2">Enter your details below</h3>
                </div>


                {/* Form */}
                <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-b border-gray-400 p-2"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email or Phone Number"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-b border-gray-400 p-2"
                    required
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border-b border-gray-400 p-2"
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 rounded text-white bg-[#DB4444] font-medium"
                  >
                    {loading ? "Creating..." : "Create Account"}
                  </button>
                </form>

                <div className="w-full h-14 flex justify-center items-center gap-2 rounded border border-gray-400 mt-6">
                  <Image src="/icon-google.png" width={24} height={24} alt="Google Icon" />
                  <span className="text-base">Sign up with Google</span>
                </div>

                <div className="text-sm flex justify-center gap-2 mt-4">
                  <span>Already have an account?</span>
                  <Link href='/login' className="text-blue-600 hover:underline">Log in</Link>
                </div>
              </section>
            )
        }


      </div>
    </div>
  );
};

export default SignUp;
