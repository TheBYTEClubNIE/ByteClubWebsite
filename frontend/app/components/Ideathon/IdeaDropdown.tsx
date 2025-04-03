"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownProps {
  title: string
  children: React.ReactNode
  className?: string
  initiallyOpen?: boolean
}

export function Dropdown({ title, children, className, initiallyOpen = false }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen)

  return (
    <div className={cn("rounded-lg border shadow-sm", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg p-4 text-left font-semibold transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{title}</span>
        <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full text-yellow-500">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

