"use client"

import { Trophy, Users, Calendar, Award, BookOpen, Camera, Music } from "lucide-react"

interface AnimatedLoaderProps {
  type?: 'cards' | 'spinner' | 'dots' | 'pulse'
  count?: number
}

const iconComponents = [Trophy, Users, Calendar, Award, BookOpen, Camera, Music]

export default function AnimatedLoader({ type = 'cards', count = 6 }: AnimatedLoaderProps) {
  if (type === 'spinner') {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-purple-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
      </div>
    )
  }

  if (type === 'dots') {
    return (
      <div className="flex justify-center items-center py-12 space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    )
  }

  if (type === 'pulse') {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    )
  }

  // Default cards loader
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => {
        const IconComponent = iconComponents[index % iconComponents.length]
        
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg animate-pulse group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image placeholder */}
            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <IconComponent className="h-12 w-12 text-gray-400 animate-pulse" />
              </div>
            </div>
            
            {/* Content placeholders */}
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              
              {/* Details placeholders */}
              <div className="space-y-2 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                </div>
              </div>
              
              {/* Button placeholder */}
              <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mt-4 animate-pulse"></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
