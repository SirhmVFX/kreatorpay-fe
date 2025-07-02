'use client'

import Link from 'next/link'
import TextInput from '@/components/TextInput'
import PasswordInput from '@/components/PasswordInput'
import CheckboxInput from '@/components/CheckboxInput'
import Image from 'next/image'

export default function signup() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Illustration Section */}
      <div className="hidden md:block w-1/4 relative">
        <Image
          src="/assets/portfolio-bg.png"
          alt="Kreatorpay Illustration"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col justify-start w-full md:w-3/4 px-8 py-12 text-gray-700">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-gray-700">Kreatorpay</h1>
          </div>

          <h2 className="text-3xl font-bold mb-2">Create your account</h2>
          <p className="text-sm mb-6 text-gray-500">
            Have an account?{' '}
            <Link href="/login" className="text-indigo-600 hover:underline">
              Log in now
            </Link>
          </p>

          {/* Social Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer">
              <span>Continue with Google</span>
            </button>
            <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer">
              <span>Continue with GitHub</span>
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 mb-6">
            or with email and password
          </div>

          {/* Form */}
          <form className="space-y-4">
            <TextInput
              type="email"
              placeholder="We recommend using your work email"
              label="Email Address"
            />
            <TextInput placeholder="First Name" label="First Name" />
            <TextInput placeholder="Last Name" label="Last Name" />
            <PasswordInput />
            <CheckboxInput />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 cursor-pointer mt-2"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
