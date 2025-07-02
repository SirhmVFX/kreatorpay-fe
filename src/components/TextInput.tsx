import React from 'react'

interface TextInputProps {
  type?: string
  placeholder: string
  label?: string
  optional?: boolean
}

export default function TextInput({ type = 'text', placeholder, label, optional }: TextInputProps) {
  return (
    <div>
      {label && (
        <label className="text-sm font-medium mb-1 block">
          {label}
          {optional && <span className="text-gray-400 ml-1">Optional</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="border w-full px-4 py-2 rounded mb-2"
      />
    </div>
  )
}
