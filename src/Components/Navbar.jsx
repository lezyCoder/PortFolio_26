const Navbar = () => {
    return (
        <nav className='flex items-center justify-between text-gray-400 py-4'>

            <div className="logo">
                <p className="w-16 h-16 rounded-full border flex items-center justify-center text-2xl hover:bg-gray-300">VSM</p>
            </div>
            <ul className='flex gap-8 items-center border border-gray-700 p-4 rounded-3xl'>
                {["home", "services", "about", "skills", "projects"].map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item}`}
                            className="relative text-gray-300 hover:text-white transition 
                   after:content-[''] after:absolute after:left-0 after:-bottom-1 
                   after:w-0 after:h-0.5 after:border-b-2 after:border-dashed 
                   after:border-gray-400 after:transition-all after:duration-300 
                   hover:after:w-full"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>

            <button className='border border-gray-700 rounded-md px-4 py-2 hover:bg-zinc-300 hover:text-zinc-800 cursor-pointer'>
                <a href="#contact">Let's talk</a>
            </button>

        </nav>
    )
}

export default Navbar;