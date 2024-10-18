const Header = () => {
    return (
      <header className="bg-gradient-to-r from-stone-700 via-stone-900 to-black text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-4xl font-extrabold tracking-tight"> NexaVision Labs</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="/" className="hover:text-indigo-400 transition duration-300 ease-in-out text-lg">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition duration-300 ease-in-out text-lg">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition duration-300 ease-in-out text-lg">Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition duration-300 ease-in-out text-lg">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  