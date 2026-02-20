import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 md:py-20 bg-black/10 border-t border-white/5 text-gray-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="mb-8 text-lg font-semibold text-gray-300">AI Precision</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Precision. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
