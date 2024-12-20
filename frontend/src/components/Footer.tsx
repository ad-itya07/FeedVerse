const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-center text-sm text-white">
      <div>© {new Date().getFullYear()} FeedVerse – Your Universe of Feeds.</div>
      <div className="mt-2">
        <a href="#" className="text-white hover:underline mx-2">
          About
        </a>
        <a href="#" className="text-white hover:underline mx-2">
          Contact
        </a>
        <a href="#" className="text-white hover:underline mx-2">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
