const RedirectionButton = () => {
  return (
    <button className="relative flex items-center bg-white text-black border border-gray-300 px-4 py-2 rounded-md overflow-hidden group hover:bg-gray-100 transition-all duration-300">
      {/* Icon */}
      <span className="material-icons text-lg">add</span>

      {/* Text */}
      <span className="absolute left-0 ml-2">Add Item</span>
    </button>
  );
};

export default RedirectionButton;
