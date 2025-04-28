export type RedirectionButtonProps = {
  href: string;
};

const RedirectionButton = () => {
  return (
    <a
      href="https://github.com"
      target="_blank"
      className=" text-black hover:ring-4 hover:ring-gray-200 rounded-full p-2 text-center inline-flex items-center hover:cursor-pointer bg-white transition-all ease-in-out duration-300"
      rel="noreferrer"
    >
      <i className="fa-solid fa-arrow-right -rotate-45 "></i>
    </a>
  );
};

export default RedirectionButton;
