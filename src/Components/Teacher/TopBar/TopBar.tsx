
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Calendar,
  ChevronDown,
  Clock,
  LogOut,
  User,
  Video
} from 'lucide-react'

interface Props {
  name?: string
  role?: string
  liveClock?: boolean
  onProfile?: () => void
  onLogout?: () => void
}

export default function Header({
  name = 'Dilani Fernando',
  role = 'Science Teacher',
  liveClock = true,
  onProfile,
  onLogout
}: Props) {

  // Dropdown state
  const [open, setOpen] = useState(false)

  // Current date and time
  const [now, setNow] = useState(new Date())

  // Update clock every second
  useEffect(() => {
    if (!liveClock) return

    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [liveClock])

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      const menu = document.getElementById('account-menu')

      if (menu && !menu.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', closeMenu)

    return () => {
      document.removeEventListener('mousedown', closeMenu)
    }
  }, [])

  // User initials
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase()

  const firstName = name.trim().split(/\s+/)[0] || 'User'

  // Date format
  const dateLabel = now.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const shortDate = now.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short'
  })

  // Time format
  const timeLabel = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })

  return (
    <div className="min-h-full w-full bg-canvas font-inter">

      <header className="relative z-20 border-b border-line bg-white">

        {/* Main Header */}
        <div className="flex h-16 items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 lg:px-8">

          {/* Brand + Welcome */}
          <div className="flex min-w-0 items-center gap-4">

            <a href="#" className="flex shrink-0 items-center gap-2.5">

              <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-white">
                <Video className="size-[18px]" strokeWidth={2} />
              </span>

              <span className="hidden text-[17px] font-medium tracking-[-0.01em] text-ink sm:block">
                BrightClass
              </span>

            </a>

            <span className="mx-0 hidden h-9 w-px bg-line sm:block" />

            {/* Desktop Welcome */}
            <div className="hidden min-w-0 leading-tight sm:block">

              <p className="truncate text-[15px] font-light text-ink/80">
                Welcome back, <span className="font-normal text-ink">{name}</span>
              </p>

              <p className="truncate text-[13px] font-light text-subtle">
                {role}
              </p>

            </div>

            {/* Mobile Welcome */}
            <div className="min-w-0 leading-tight sm:hidden">

              <p className="truncate text-[15px] font-light text-ink/80">
                Welcome back, <span className="font-normal text-ink">{name}</span>
              </p>
              <p className="truncate text-[13px] font-light text-subtle">{role}</p>

            </div>

          </div>

          {/* Desktop Date and Time + Account */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">

            {/* Desktop Date and Time */}
            <div className="hidden items-center rounded-xl bg-chip px-3.5 py-2.5 md:flex">

              <span className="hidden items-center gap-2 border-r border-line pr-3.5 lg:flex">

                <Calendar className="size-4 text-brand" strokeWidth={1.75} />

                <span className="whitespace-nowrap text-[15px] font-light text-muted">
                  {dateLabel}
                </span>

              </span>

              <span className="flex items-center gap-2 lg:pl-3.5">

                <Clock className="size-4 text-brand" strokeWidth={1.75} />

                <span className="whitespace-nowrap text-[15px] font-medium tabular-nums text-ink">
                  {timeLabel}
                </span>

              </span>

            </div>

            {/* Profile Dropdown */}
            <div id="account-menu" className="relative">

              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label="Open account menu"
                className="flex items-center gap-1.5 rounded-full p-0.5 outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
              >

                <span className="flex size-9 items-center justify-center rounded-full bg-brand-soft text-[14px] font-medium text-brand">
                  {initials}
                </span>

                <ChevronDown
                  className={`size-4 text-muted transition-transform duration-200 ease-out ${
                    open ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2}
                />

              </button>

              {/* Dropdown Animation */}
              <AnimatePresence>

                {open && (

                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: -4, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.97 }}
                    transition={{ duration: 0.16 }}
                    style={{ transformOrigin: 'top right' }}
                    className="absolute right-0 top-[calc(100%+10px)] w-[min(240px,calc(100vw-2rem))] rounded-2xl border border-line bg-white p-2 shadow-[0_12px_32px_-8px_rgba(17,24,39,0.18)]"
                  >

                    {/* User Details */}
                    <div className="px-2.5 pb-3 pt-2 leading-tight">

                      <p className="text-[15px] font-normal text-ink">
                        {name}
                      </p>

                      <p className="mt-0.5 text-[13px] font-light text-muted">
                        {role}
                      </p>

                    </div>

                    {/* Mobile Date and Time 
                    <div className="mx-2.5 mb-2 flex flex-col gap-1.5 rounded-xl bg-chip px-3 py-2.5 md:hidden">

                      <span className="flex items-center gap-2 text-[13px] font-light text-muted">
                        <Calendar className="size-3.5 text-brand" strokeWidth={1.75} />
                        {dateLabel}
                      </span>

                      <span className="flex items-center gap-2 text-[13px] font-medium tabular-nums text-ink">
                        <Clock className="size-3.5 text-brand" strokeWidth={1.75} />
                        {timeLabel}
                      </span>

                    </div>*/}

                    {/* Menu Options */}
                    <div className="border-t border-line pt-2">

                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setOpen(false)
                          onProfile?.()
                        }}
                        className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[15px] font-light text-ink transition-colors duration-150 hover:bg-chip"
                      >

                        <User className="size-4 text-ink/80" strokeWidth={1.75} />

                        My profile

                      </button>

                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setOpen(false)
                          onLogout?.()
                        }}
                        className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[15px] font-light text-danger transition-colors duration-150 hover:bg-red-50"
                      >

                        <LogOut className="size-4" strokeWidth={1.75} />

                        Log out

                      </button>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          </div>

        </div>

        {/* Mobile Date and Time */}
        <div className="flex items-center justify-between border-t border-line px-4 py-2.5 sm:hidden">

          {/* Date - Left */}
          <div className="flex items-center gap-2 text-[13px] font-light text-muted">

            <Calendar className="size-3.5 text-brand" strokeWidth={1.75} />

            <span>
              {shortDate} {now.getFullYear()}
            </span>

          </div>

          {/* Time - Right */}
          <div className="flex items-center gap-2 text-[13px] font-medium tabular-nums text-ink">

            <Clock className="size-3.5 text-brand" strokeWidth={1.75} />

            <span>
              {timeLabel}
            </span>

          </div>

        </div>

      </header>

    </div>
  )
}
