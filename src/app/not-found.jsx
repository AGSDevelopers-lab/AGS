'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="relative z-20 text-center max-w-2xl mx-auto">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        {/* 404 Header */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[10rem] font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Page Not Found
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto">
            Oops! It seems like you've wandered off the map. The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Suggested Links */}
          <div className="pt-6 space-y-4">
            <p className="text-sm text-gray-400">here are some helpful links instead:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/"
                className="px-8 py-3 bg-white text-gray-900 font-semibold hover:bg-gray-200 transition-colors duration-200 inline-block"
              >
                Back to Home
              </Link>
              <Link
                href="/#services"
                className="px-8 py-3 border border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 inline-block"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="pt-12 space-y-2">
            <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-sm text-gray-500">Let's get you back on track</p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <p className="text-gray-400 text-sm">
            If you think this is an error, feel free to{' '}
            <Link
              href="/#contact"
              className="text-purple-400 hover:text-purple-300 underline transition-colors"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
