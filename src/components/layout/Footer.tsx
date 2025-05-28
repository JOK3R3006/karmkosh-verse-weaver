
import { Link } from "react-router-dom";
import { Store, Twitter, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">KarmKosh</span>
            </Link>
            <p className="text-gray-600 text-sm">
              The ultimate platform for creators to sell digital products and build communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/marketplace" className="text-gray-600 hover:text-purple-600 transition-colors">Marketplace</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</Link></li>
              <li><Link to="/integrations" className="text-gray-600 hover:text-purple-600 transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* For Creators */}
          <div>
            <h3 className="font-semibold mb-4">For Creators</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/creators" className="text-gray-600 hover:text-purple-600 transition-colors">Get Started</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-purple-600 transition-colors">Resources</Link></li>
              <li><Link to="/community" className="text-gray-600 hover:text-purple-600 transition-colors">Community</Link></li>
              <li><Link to="/case-studies" className="text-gray-600 hover:text-purple-600 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-gray-600 hover:text-purple-600 transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-purple-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 KarmKosh. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-600">Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
