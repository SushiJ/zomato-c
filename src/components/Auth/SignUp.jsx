import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { FcGoogle } from "react-icons/fc";

export default function SignUp({ isOpen, setIsOpen }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const handleChange = (event) => {
    setUserData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                ></Dialog.Title>

                <div className="flex flex-col w-full gap-3 mt-2">
                  <button className="flex items-center justify-center w-full gap-2 py-2 text-gray-700 bg-white border border-gray-400 rounded-lg hover:bg-gray-100">
                    Sign up with Google <FcGoogle />
                  </button>
                  <form action="" className="flex flex-col gap-3">
                    <div className="flex flex-col w-full gap-2">
                      <label htmlFor="fullName">Full name</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={userData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-zomato-secondary"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="johndoe@email.com"
                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-zomato-secondary"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                      <label htmlFor="email">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-zomato-secondary"
                      />
                    </div>
                    <div className="w-full py-2 text-center text-white rounded-lg bg-zomato-secondary">
                      Sign up
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
