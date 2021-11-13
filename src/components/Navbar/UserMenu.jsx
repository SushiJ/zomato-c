export default function UserMenu() {
  return (
    <>
      <div className="w-40 shadow-lg h-72 rounded-xl">
        <ul className="space-y-3 font-normal text-left text-gray-400">
          <button className="flex items-center w-full m-2 hover:bg-gray-300">
            Profile
          </button>
          <button className="w-full hover:bg-gray-300">Notifications</button>
          <button className="w-full hover:bg-gray-300">Bookmarks</button>
          <button className="w-full hover:bg-gray-300">Reviews</button>
          <button className="w-full hover:bg-gray-300">Network</button>
          <button className="w-full hover:bg-gray-300">Find Friends</button>
          <button className="w-full hover:bg-gray-300">Setting</button>
          <button className="w-full hover:bg-gray-300">Log out</button>
        </ul>
      </div>
    </>
  );
}
