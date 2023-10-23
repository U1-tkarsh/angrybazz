import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const lowernav = [
    { name: "WHY SWIFT TRANSPORT", dropdown: false },
    { name: "FLEET", dropdown: false },
    { name: "COMPANY POLICIES", dropdown: false },
    { name: "ABOUT US", dropdown: false },
    { name: "CONTACT US", dropdown: false },
    { name: "Swift International", dropdown: false },
    { name: "Container Transport Solutions", dropdown: false },
    { name: "Complete Warehousing Solution", dropdown: false },
    { name:  "Call Us At 1300 779 438", dropdown: false },
  ];
  
  const handleMobileMenuToggle = () => {
    // console.log('here')
    setShowMobileMenu(!showMobileMenu);
    // console.log(showMobileMenu)
  };
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setShowMobileMenu(!showMobileMenu);
    navigate('/');
  };

  return (
    <>
      <div>
        <div className=' bg-white flex items-center justify-between px-8 border-b lg:border-none'>
          {/* Hamburger Icon (Moved to the left side) */}
          <div className='lg:hidden'>
          <button
              className='text-[#1f1d5a] float-right font-bold text-xl focus:outline-none'
              onClick={handleMobileMenuToggle}
            >
              <PhoneInTalkOutlinedIcon
                style={{ marginLeft: "12", fontSize: "28" }}
              />
            </button>
            <button
              className='text-[#1f1d5a] float-right font-bold text-xl focus:outline-none'
              onClick={handleMobileMenuToggle}
            >
              ☰
            </button>
          </div>




        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className='w-full bg-white lg:hidden'>
            {lowernav.map((navItem) =>
              navItem.dropdown ? (
                <div
                  onClick={handleMobileMenuToggle}
                  key={navItem.name}
                  className='relative text-sm text-[#1f1d5a] font-medium uppercase cursor-pointer py-1 px-4'
                >
                  {navItem.name}
                  
                </div>
              ) : (
                <NavLink onClick={handleMobileMenuToggle} to={navItem.link} key={navItem.link}>
                  <div className='text-sm text-[#1f1d5a] font-medium uppercase cursor-pointer py-2 px-8 hover:bg-[#1f1d5a] hover:text-white'>
                    {navItem.name}
                  </div>
                </NavLink>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
