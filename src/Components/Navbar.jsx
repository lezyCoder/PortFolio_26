const Navbar = () => {
    return (
        <nav className='flex items-center justify-between text-gray-400 py-4'>

            <div className="logo">
                <img src="" alt="logo" />
            </div>

            <ul className='flex gap-8 items-center border p-4 rounded-3xl'>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
            </ul>

            <button className='border rounded-xl px-4 py-2 hover:bg-zinc-300 hover:text-zinc-800 cursor-pointer'>
                Let's Talk
            </button>

        </nav>
    )
}

export default Navbar;