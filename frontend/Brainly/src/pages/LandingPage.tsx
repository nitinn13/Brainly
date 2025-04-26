import { useState } from 'react';
import { Brain, Globe, Lock, ArrowRight, Menu, X, BookOpen, Zap, Users } from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-emerald-600">MindSpace</span>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Features</a>
              <a href="#how-it-works" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">How It Works</a>
              <a href="#pricing" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Pricing</a>
              
              <NavLink to="/login" className="px-4 py-2 rounded-md text-sm font-medium text-emerald-600 border border-emerald-600 hover:bg-gray-100">
                Log In
              </NavLink>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-emerald-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">How It Works</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Pricing</a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <button className="block w-full text-left px-4 py-2 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md">
                Sign Up
              </button>
              <button className="mt-2 block w-full text-left px-4 py-2 text-base font-medium text-emerald-600 border border-emerald-600 hover:bg-emerald-50 rounded-md">
                Log In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 pb-32 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-semibold tracking-wide text-emerald-600 uppercase">Introducing</span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  Your <span className="text-emerald-600">Second Brain</span> With Social Powers
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Store all your thoughts privately and share the best ones with the world. 
                Organize your mind, connect with like-minded thinkers, and build your knowledge ecosystem.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="sm:flex">
                  <button className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm">
                    Learn More
                  </button>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  No credit card required. Free plan available.
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <img 
                    className="w-full" 
                    src="/api/placeholder/600/400" 
                    alt="Dashboard preview" 
                  />
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <div className="bg-white bg-opacity-75 px-4 py-2 rounded-md">
                      <svg className="h-10 w-10 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-emerald-600 font-medium">Watch Demo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">Features</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              The Best of Both Worlds
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Keep your thoughts organized and share when you're ready.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 border border-gray-200 h-full transition-all duration-300 hover:shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-emerald-600 rounded-md shadow-lg">
                        <Brain className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Private Thought Repository</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Store all your ideas, notes, and thoughts in a secure private space that only you can access.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 border border-gray-200 h-full transition-all duration-300 hover:shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-emerald-600 rounded-md shadow-lg">
                        <Globe className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Global Sharing</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Share selected thoughts with the world and connect with people who think like you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 border border-gray-200 h-full transition-all duration-300 hover:shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-emerald-600 rounded-md shadow-lg">
                        <Lock className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Privacy Controls</h3>
                    <p className="mt-5 text-base text-gray-500">
                      You decide what stays private and what goes public. Full control over your content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">How It Works</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Simple. Powerful. Connected.
            </p>
          </div>

          <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Capture Your Thoughts</h3>
              <p className="mt-2 text-base text-gray-500">
                Write down ideas, notes, or any thoughts that come to mind in your private space.
              </p>
            </div>

            {/* Step 2 */}
            <div className="mt-10 lg:mt-0 relative">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Organize & Refine</h3>
              <p className="mt-2 text-base text-gray-500">
                Tag, categorize, and connect your thoughts to build your personal knowledge network.
              </p>
            </div>

            {/* Step 3 */}
            <div className="mt-10 lg:mt-0 relative">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Share & Connect</h3>
              <p className="mt-2 text-base text-gray-500">
                Choose which thoughts to share globally and connect with like-minded thinkers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="pricing" className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to build your</span>
                  <span className="block">second brain?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-emerald-100">
                  Start for free, no credit card required. Our basic plan gives you enough space to organize your thoughts and start sharing with the world.
                </p>
                <a
                  href="#"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-emerald-600 hover:bg-gray-50"
                >
                  Sign up for free
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/api/placeholder/600/480"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-emerald-600">MindSpace</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2025 MindSpace, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}