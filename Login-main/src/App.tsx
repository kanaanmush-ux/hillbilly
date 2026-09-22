import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{ backgroundColor: '#1aacab', fontFamily: "'Baloo 2', sans-serif" }}
    >
      <div className="w-full max-w-sm flex flex-col items-center gap-6">

        {/* Logo */}
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center border-2 border-dashed border-[#3b7ea0] shadow-md"
          style={{ backgroundColor: '#f5e6c8' }}
        >
          <span className="text-3xl font-extrabold tracking-tight select-none">
            <span style={{ color: '#e07838' }}>K</span>
            <span style={{ color: '#3b7ea0' }}>M</span>
          </span>
        </div>

        {!submitted ? (
          <>
            {/* Heading */}
            <div className="w-full">
              <h1
                className="text-2xl font-extrabold uppercase tracking-wide"
                style={{ color: '#e07838' }}
              >
                Forgot Password?
              </h1>
              <p className="text-white text-xs font-semibold uppercase tracking-widest mt-1 opacity-90">
                No worries, we'll send you reset instructions.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              {/* Email Input */}
              <label className="sr-only" htmlFor="email">Email address</label>
              <div
                className="flex items-center gap-3 px-5 py-4 rounded-2xl"
                style={{ backgroundColor: '#e07838' }}
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2.5}
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 7l10 7 10-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="ENTER EMAIL"
                  required
                  className="flex-1 bg-transparent text-white font-bold uppercase tracking-wider placeholder:text-white/80 outline-none text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-extrabold uppercase tracking-widest text-sm transition-opacity hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: '#f5e6c8', color: '#e07838' }}
              >
                Reset Password
              </button>
            </form>

            {/* Back to sign in */}
            <a
              href="#"
              className="text-white text-sm font-semibold uppercase tracking-widest hover:underline opacity-90"
            >
              ← Back to Sign In
            </a>
          </>
        ) : (
          <>
            {/* Success state */}
            <div className="w-full text-center flex flex-col items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#e07838' }}
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1
                className="text-2xl font-extrabold uppercase tracking-wide"
                style={{ color: '#e07838' }}
              >
                Check Your Email!
              </h1>
              <p className="text-white text-xs font-semibold uppercase tracking-widest opacity-90 px-2">
                We sent a password reset link to<br />
                <span className="text-[#f5e6c8]">{email}</span>
              </p>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full py-4 rounded-2xl font-extrabold uppercase tracking-widest text-sm transition-opacity hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: '#f5e6c8', color: '#e07838' }}
            >
              Resend Email
            </button>

            <a
              href="#"
              className="text-white text-sm font-semibold uppercase tracking-widest hover:underline opacity-90"
            >
              ← Back to Sign In
            </a>
          </>
        )}
      </div>
    </div>
  )
}
