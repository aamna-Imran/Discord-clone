
function Navbar() {
  return (
   
    <div className=" Hero-section py-5  max-container padding-container">
      <div className="flex justify-between items-center">
        <img src="logo.svg" alt="logo" width={130} />

        <ul className=" gap-10 text-white hidden lg:flex text-[15px]">
          <li className="font-semibold hover:underline">
            <a href="/"></a>Download
          </li>
          <li className="font-semibold hover:underline">
            <a href="/"></a>Nitro
          </li>
          <li className="font-semibold hover:underline">
            <a href="/"></a>Discover
          </li>
          <li className="font-semibold hover:underline">
            <a href="/"></a>Safety
          </li>
          <li className="font-semibold hover:underline">
            <a href="/"></a>Blog
          </li>
          <li className="font-semibold hover:underline">
            <a href="/"></a>Support
          </li>
          <li className="font-semibold hover:underline">
            <a href="/"></a>Career
          </li>
        </ul>
        <div className="flex">
          <button className="py-2 px-4 rounded-full bg-white font-semibold text-[14px] hover:shadow-xl hover:text-blue-700">
            Login
          </button>
          <img
            src="menu.svg"
            alt="menu"
            width={40}
            className="flex lg:hidden ml-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
