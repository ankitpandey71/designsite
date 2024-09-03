const Footer = () => {
  return (
    <footer className=" bg-gradient-to-l from-slate-400 to-slate-900 text-orange-300 p-4 text-center mt-auto">
      <div className="container mx-auto p-4 pt-6 pb-6">
        <p className="text-lg">2023 My Company</p>
        <p className="text-sm">All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-orange-300 hover:text-gray-900">
            Terms of Service
          </a>
          <a href="#" className="text-orange-300 hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="#" className="text-orange-300 hover:text-gray-900">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
