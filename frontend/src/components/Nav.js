import { NavLink } from "react-router-dom";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const Navigate = useNavigate();
  // const auth=localStorage.getItem("user")
  return (
    <header className="w-[100%] max-w-[100vw">
      <Navbar fluid={true} rounded={true} className="bg-blue-00">
        <Navbar.Brand>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="sachin shivcoder logo"
          />
          <span className="self-center text-[12px]  font-semibold  text-red-500">
            Shivcoder (Sachin Sangwan)
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          ></Dropdown>
          <Navbar.Toggle />
        </div>
        {/* navbar middle section */}
        <Navbar.Collapse>
          {localStorage.getItem("user") ? (
            <div className="flex justify-between space-x-20">
              <Navbar.Link active={true}>
                <NavLink to="/" className=" text-red-500">
                  Products
                </NavLink>
              </Navbar.Link>

              <Navbar.Link>
                <li>
                  <NavLink to="/add" className="text-red-500">
                    Add Products
                  </NavLink>
                </li>
              </Navbar.Link>

              {/* <Navbar.Link>
                <li>
                  <NavLink to="/update" className="text-red-500">
                    Update Products
                  </NavLink>
                </li>
              </Navbar.Link> */}

              {/* <Navbar.Link>
                <li>
                  <NavLink to="/delete" className="text-red-500">
                    Delete Products
                  </NavLink>
                </li>
              </Navbar.Link> */}

              <Navbar.Link>
                <li>
                  <NavLink to="/profile" className="text-red-500">
                    Profile
                  </NavLink>
                </li>
              </Navbar.Link>

              <Navbar.Link>
                <NavLink
                  to="/signup"
                  onClick={() => {
                    localStorage.clear();
                    Navigate("/signup");
                  }}
                  className="text-red-500"
                >
                  LogOut {JSON.parse(localStorage.getItem("user")).Name}
                </NavLink>
              </Navbar.Link>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Navbar.Link>
                <li>
                  <NavLink to="/signup" className="text-red-500">
                    SignUp
                  </NavLink>
                </li>
              </Navbar.Link>

              <Navbar.Link>
                <li>
                  <NavLink to="/login" className="text-red-500">
                    LogIn
                  </NavLink>
                </li>
              </Navbar.Link>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Nav;
