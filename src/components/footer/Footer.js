import { Link } from 'react-router-dom';
import footerSections from './footerSections'; 
import logoPng from './../../assets/logopng.png';

export default function Footer() {

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
       
        <img  className="inline-block h-32 w-32 " src={logoPng} alt='logo-footer' />
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {footerSections.map((section, index) => (
              <div key={index} className="col-span-2 sm:col-span-1">
                <p className="font-medium text-secondary">{section.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to="#" className="text-white transition hover:opacity-75">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">&copy; 2025. Metrobi. All rights reserved.</p>
            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <Link to="#" className="text-gray-500 transition hover:opacity-75">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-500 transition hover:opacity-75">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-500 transition hover:opacity-75">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
