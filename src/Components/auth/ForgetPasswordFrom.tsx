import React, { useState } from 'react'
import { MailIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ValidationErrors {
  email?: string
}

const ForgetPasswordFrom = () => {
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  // Validate email
  const validateForm = () => {
    const newErrors: ValidationErrors = {}
    let valid = true

    if (!email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    // API call here
    setTimeout(() => {
      setSuccessMessage("Password reset link has been sent to your email.")
      setIsSubmitting(false)
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-1">Forgot Password</h2>
        <p className="text-gray-200">We will email you a password reset link</p>
      </div>

      <div className="space-y-4">
        {/* EMAIL FIELD */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className="h-5 w-5 text-gray-300" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors({})
              }}
              className={`bg-white/20 text-white placeholder-gray-300 block w-full pl-10 pr-3 py-2.5 border 
                ${errors.email ? 'border-red-500' : 'border-gray-400'} 
                rounded-lg focus:outline-none focus:ring-2 
                ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
              placeholder="your@email.com"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* SUCCESS MESSAGE */}
        {successMessage && (
          <p className="text-green-400 text-sm">{successMessage}</p>
        )}

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm 
            text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
            focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
        >
          {isSubmitting ? "Sending link..." : "Send Reset Link"}
        </button>

        {/* BACK TO LOGIN 
        <div className="text-center text-sm">
          <Link
            to="/login"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            Back to Login
          </Link>
        </div>*/}
      </div>
    </form>
  )
}

export default ForgetPasswordFrom;