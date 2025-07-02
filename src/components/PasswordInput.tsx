'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <label className="text-sm font-medium mb-1 block">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="border w-full px-4 py-2 rounded pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-500 cursor-pointer"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Password hints */}
      <div className="text-sm mt-2 space-y-1">
        <p className="text-gray-500 flex items-center gap-2">• Must be at least 8 characters</p>
        <p className="text-gray-500 flex items-center gap-2">• Does not contain your email address</p>
      </div>
    </div>
  )
}
