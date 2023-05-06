const Header = () => {
  return (
    <header>
      <nav className="container mx-auto px-12 flex justify-between py-4 items-center fixed top-0 left-0 right-0 z-50">
        <div className="text-black text-3xl font-bold">WORKX</div>
        <div className="flex">
          <button className="btn secondary">Sign In</button>
          <button className="btn primary">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
