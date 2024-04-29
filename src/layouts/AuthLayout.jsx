import { Navigate, Outlet, Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const AuthLayout = () => {
  const { user, logout } = useAuthContext();

  return user ? (
    <>
      <nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://www.laravel.com" className="flex items-center">
            Laravel
          </a>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 mt-4 rounded-lg md:mt-0 md:flex-row md:sapce-x-8 md:text-sm md:font-medium">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {user ? (
                <li>
                  <button
                    onClick={logout}
                    className="block py-2 pl-3 pr-4 text-white rounded"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block py-2 pl-3 pr-4 text-white"
                      aria-current="page"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="block py-2 pl-3 pr-4 text-white"
                      aria-current="page"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthLayout;
