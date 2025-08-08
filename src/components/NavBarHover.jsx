  const navLinks = () => {
    return (
      <ul className="relative flex w-fit rounded-full border-2 border-emerald-500 bg-transparent p-1">
        <Tab>Home</Tab>
        <Tab>About</Tab>
        <Tab>Projects</Tab>
        <Tab>Services</Tab>
        <Tab>Testimonials</Tab>
      </ul>
    );
  };

 const Tab = ({ children }) => {
    return (
      <li className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-emerald-500 mix-blend-difference md:px-5 md:py-3 md:text-base">
        {children}
        </li>
    );
  };

  const Cursor = () => {
    return <li className="absolute z-0 rounded-full w-36 bg-yellow-400 h-7md:h-12"></li>;