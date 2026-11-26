
import React, { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Lock, Mail, GraduationCap } from 'lucide-react'
import { Link , Navigate} from 'react-router-dom';

import { post } from '../../axios/apiClient';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../Redux/loadingSlice'

interface LoginProps {}

interface LoginState {
  username: string
  password: string
}

const Login: React.FC<LoginProps> = () => {

  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState<LoginState>({
    username: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false)

  // Handle username and password changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const loginUser = async () => {
      try {
          dispatch(setLoading(true));
          const response = await post('/api/auth/login', {
            email: formData.username,
            password: formData.password,
          });

          /*localStorage.setItem("logedInUser_eduSpace_codeStack", JSON.stringify(response.data.user));
          localStorage.setItem("logedInUser_eduSpace_codeStack_accessToken", response.data.token);
          localStorage.setItem("logedInUser_eduSpace_codeStack_accessToken_exp", response.data.randomExpire);
          
          window.location.href= '/';*/
          console.log(response);
          
      } catch (err: any) {
        if (err.response) {
          if (err.response.status === 400) {
            alert('Username or Password can not be empty');
          } else if (err.response.status === 401) {
            alert('Invalid Username or Password');
          } else if (err.response.status === 500) {
            alert('Server Error');
          } 
        } else {
          alert('Network Error');
        }
      } finally {
          dispatch(setLoading(false));
      }
    };



  // Handle Sign In
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(setLoading(true));
    loginUser();
    //https://codestackserver.site/api/auth/login

    
  }

  return (
    <div className="min-h-screen bg-black/85 backdrop-blur-xl flex items-center justify-center">
      <div className="min-h-screen w-full flex items-center justify-center bg-[#262626] px-4 py-6 font-sans">

        <div className="w-full max-w-[440px] overflow-hidden rounded-2xl bg-white shadow-xl">

          {/* Teacher Header */}
          <header className="relative bg-blue-900 px-6 py-5">

            <div className="flex items-center gap-3">

              <div className="shrink-0 rounded-full bg-[#F5C518] p-[2px]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ipds-4f914.firebasestorage.app/o/Thoughtful%20Portrait%20on%20Blue%20Gradient.png?alt=media&token=d49aa924-1fd2-42fd-8c0f-29df5f9397bd"
                  alt="Kasun Perera"
                  className="h-14 w-14 rounded-full border-2 border-[#0B1F4D] object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-lg font-semibold leading-tight text-white">
                  Kasun Perera
                </p>

                <p className="mt-1 truncate text-xs font-medium text-[#F5C518]">
                  B.Sc. (Computer Science)
                </p>

                <p className="mt-0.5 truncate text-xs text-white/70">
                  ICT Teacher · A/L & O/L Classes
                </p>
              </div>

              <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/80">
                <GraduationCap className="h-5 w-5" />
              </div>

            </div>

            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#F5C518]" />

          </header>

          {/* Login Form */}
          <div className="px-6 pb-7 pt-6 sm:px-8">

            <h1 className="text-center text-base font-semibold text-slate-500">
              Secure Learning Management Portal
            </h1>

            <form className="mt-6 space-y-5" onSubmit={handleLogin}>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Username
                </label>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />

                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                    className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>

                  <Link to='/forgot-password'
                    className="text-xs font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-[18px] w-[18px]" />
                    ) : (
                      <Eye className="h-[18px] w-[18px]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Sign In */}
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-800 text-sm font-semibold text-white shadow-md transition hover:brightness-105 active:scale-[0.98]"
              >
                Sign in
                <ArrowRight className="h-4 w-4" />
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
