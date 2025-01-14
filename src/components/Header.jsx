import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      id="home"
      className="bg-black text-white py-4 shadow-lg relative z-50"
      style={{ fontFamily: "'Black Ops One', sans-serif", color: "#E5E5E5" }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center h-6">
          <img
            src="Logo/dow_logo_transparent.png"
            alt="Dust of War Logo"
            style={{ maxWidth: "150px" }} // לשינוי רוחב מקסימלי
          />
          {/* <svg
            width="161"
            height="31"
            viewBox="0 0 161 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-8 md:h-10"
          >
            <path
              d="M160.5 0H0.174988V31H160.5V0Z"
              fill="url(#pattern0_64_14)"
            />
            <defs>
              <pattern
                id="pattern0_64_14"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_64_14"
                  transform="matrix(0.00628931 0 0 0.0325269 0 -0.00416666)"
                />
              </pattern>
              <image
                id="image0_64_14"
                width="159"
                height="31"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAAfCAYAAAD5qx84AAAFbElEQVR4Ae1aO5LbOhDcC4g8lg+yl/AVfIO9gA/g/KUbO32hErLKmQPJtZlfNYUGG8MZEFJpP/bDVrEGAgaDmZ7Gh+A+PPS/jkBHoCPQEegIdAQ6Ah2BjkBHoCPQEfhzETjNw9fzPP72nl/T+OXPjax7vovAaR4+7Sq9ksJ5Gr55pGPd/558p2n8h2CIPAIY+V3MXMzmV8rXXcye5vHzeRqeT/P4E/HdxeiVRs7T+D3Cj/UR+dzVchperAunefhBW1lO43fVcyfANHxTnXcr30I+BPoRCQigQbicCPj5XuRzttpWX87T4VFjYBmTSomCCcY2SsSvOqdp+JdtlNaO6r9p+VbyLYFMw/ObOrsz2HkejwSYsjXhO6avbub4Kq/xxV/V1hXrPB+ewt1pOjzS4fM0vBQ+GHJS711kRD7rTBQo9VrsKAgs24TgjCbAHwO7WHl/6HmO9qxEf7URbXWMg9L4sRw7NhhMw4vdATY6sgImP/IEqfmiPktMx+wf4sLxQuyzTJ/c9u22vFk9aSdL0wc+RHEyps2xw7HxsBckg40GY3uLnRyMAIZ+2cblrKYzNSQfbC0kTbPcs73o3EA+j3iwFWHAZNeSQl90dWaiGL9Klzjz+Js6sAPsvG0ViYeee96bD0/Zxs4LUYGpIU+ExVIfnHc114sPLaSBYjQYA2mxUwSTCEiHlnOO2SKWRE2HR4yNR1bE/AKEevjg2WbC1Tfq028rl6Rv/fBXPp1E6SUM9mu+tJIPftnz68XuhTxpjKNLsPRy4hFT41VcIp+1XnebKM6onnZ0on6YlS9wOm8zKRmfoaeP2XrzlpaDlZVVgY/KQUJKP/wbgrwqwTbHV8mJFo1t6zdbF8g+Dc+KVbRCepMIZLRj1H6r7yxjbPRRH9gGyXbo6EQTnRXLFrBrg9H5FjviQF65mJAgmNVRDlSRXrC0X+lWNLXEEejcn3zz4clitqw+BfkPT+4KedlSy8l45RWLHRu/Sa4gX7kdoHr5QF0GPAByVUia0WA01GLHCwb9YCOawV4f1LEfx4f0gvX0tI8tt8QR6NydfCmmPFGJRUE2nK+cMxZWuY2f8hbMuHHcQW7tgx2F46mEHvpGfGB78r0k/+WYsnJr46BVSF5GgzGIFjsaBMvol23gU1Rw3qJ+Ic0h+G8kn3duUwwu5+DtCgkcNWf2/g+Ye1szbWtf1kGSXHvttA89fTAm8/1hznx0qAaIgpDLQsC/knyVb8PAYFnhglWq2E3MnSwO/hlDeXFi3R659tqZz6psWbFgIBqMxlvsMDCVuvLRViQ9cqGO+l77NfZhpyWOQOdVtt1o+8sYpnOcF3t6E05b33rFgjg9fYtVHkPICR6gf8QHtjMnVRkAmRPKztFgbG+x4wXDgNMsBVDFQ/uQHmCoo47XTvvU2ZMtcbg65ttrLdY9H2y7d8WU7adznOtTugvEFmxttmCVx3hr8kVkKxySpRzkKQ7C4jD6RPZIjvB7ZrokTv3LA+zyhWE9Qyxbyc6ZEXZsIvR3dMFciwHJRfxqp8ApYcFYVa+l7N7lLZfs63fcYosV7BGvd8XikU99jvJF/PbaW+IKt5nIOB0sLgvTSGHiQIjoY7l94RDgOBZkmtkr+ZyEw40lCRUCErwaOFEcLiaBH+o7y7eSLyIW7vw0Du9lDT77uVr+80e/Jq1v1ZV8ET8XC3khUb/CckrqOvAl+Tf/S9UmcZIcJkGlTUjgT0k+sekFViMgwfP6ad0mDm/1rvihMbJsY9Xx9sr+rmLOcc6Vy+Vfy/z/aXRxkpjot0ridxfy7QXd2zsCHYGOQEegI9AR6Ah0BDoCHYGOQEegI9AR6Ah0BDoCHYEPjcB/5gbIOPRSt6EAAAAASUVORK5CYII="
              />
            </defs>
          </svg> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-10">
          {/* <a
            href="#home"
            className="font-bold text-lg hover:text-yellow-400 transition duration-200"
          >
            Home
          </a> */}
          <a
            href="#about"
            className="font-bold text-lg hover:text-yellow-400 transition duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-bold text-lg hover:text-yellow-400 transition duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white space-y-4 p-4">
          {/* <a
            href="#home"
            className="block font-bold text-lg hover:text-yellow-400 transition duration-200"
          >
            Home
          </a> */}
          <a
            href="#about"
            className="block font-bold text-lg hover:text-yellow-400 transition duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block font-bold text-lg hover:text-yellow-400 transition duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
