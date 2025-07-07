'use client'

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const VerifyEmail = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Backspace') {
      event.preventDefault();
      const newCode = [...code];

      if (code[index] === '') {
        if (index > 0) {
          newCode[index - 1] = '';
          setCode(newCode);
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        newCode[index] = '';
        setCode(newCode);
      }
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newCode = [...code];

    for (let i = 0; i < 6; i++) {
      newCode[i] = pasted[i] || '';
    }

    setCode(newCode);

    const nextIndex = pasted.length >= 6 ? 5 : pasted.length;
    inputRefs.current[nextIndex]?.focus();
  };

  const isCodeComplete = code.every((digit) => digit !== '');

  const handleVerify = () => {
    const enteredCode = code.join('');
    console.log('Entered code:', enteredCode);
    // Add API call here
  };

  const handleResend = () => {
    console.log('Resend clicked');
    // Add resend logic here
  };

  useEffect(() => {
    if (isCodeComplete) {
      handleVerify();
    }
  }, [code]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Illustration Section */}
      <div className="hidden md:block w-1/4 relative">
        <Image
          src="/assets/portfolio-bg.png"
          alt="Kreatorpay Illustration"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-3/4 p-6 flex flex-col justify-center items-center">
        <div className="max-w-md w-full text-center bg-white p-8 rounded-xl shadow-lg border border-purple-100">
          {/* Logo */}
          <div className="w-10 h-10 rounded-md mx-auto mb-4" />

          <h1 className="text-2xl font-bold mb-2">Please check your email</h1>
          <p className="text-sm text-gray-600 mb-6">
            We've sent a code to{' '}
            <span className="font-medium">akpengbe1234@gmail.com</span>
          </p>

          {/* Code input */}
          <div className="flex justify-between gap-2 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-14 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            ))}
          </div>

          {/* Verify button */}
          <button
            onClick={handleVerify}
            disabled={!isCodeComplete}
            className={`w-full py-2 rounded-lg text-white font-medium transition ${
              isCodeComplete
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Verify
          </button>

          {/* Resend link */}
          <p className="text-sm text-gray-500 mt-4">
            Didn’t receive an email?{' '}
            <button
              onClick={handleResend}
              className="text-purple-600 hover:underline font-medium"
            >
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
