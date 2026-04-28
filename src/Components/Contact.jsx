import React from 'react'

const Contact = () => {
    return (
        <div id='contact'>
            <section class="px-4 md:px-8 mt-6 ">
                <div class="max-w-6xl max-lg:max-w-2xl mx-auto">
                    {/* Heading */}
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className='text-4xl md:text-6xl font-bold text-gray-200'>
                            Contact Me
                        </h2>
                        <p className='pt-4 text-lg  text-gray-400'>
                            Have a question, need support, or want to discuss your next project? ready to help
                        </p>
                    </div>

                    <div class="grid lg:grid-cols-2 items-start gap-20 mt-10">
                        <form class="space-y-6">
                            <div>
                                <label for="name"
                                    class="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Name</label>
                                <input type="text" id="name" name="name" placeholder="John doe"
                                    required class="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-700 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                            </div>
                            <div>
                                <label for="email"
                                    class="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Email</label>
                                <input type="email" id="email" name="email" placeholder="john@readymadeui.com"
                                    required class="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-700 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                            </div>
                            <div>
                                <label for="phone" class="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Phone
                                    number</label>
                                <input type="text" id="phone" name="phone" placeholder="+11800-259-854"
                                    required class="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-700 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                            </div>
                            <div>
                                <label for="company"
                                    class="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Company</label>
                                <input type="text" id="company" name="company" placeholder="XYZ pvt. ltd."
                                    required class="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-700 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                            </div>
                            <div>
                                <label for="message"
                                    class="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Message</label>
                                <textarea placeholder="Write message" rows="6" type="text" id="message" name="message"
                                    class="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-700 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"></textarea>
                            </div>

                            <button type="submit" className='border border-gray-700 text-gray-300 rounded-md px-4 py-2 hover:bg-zinc-300 hover:text-zinc-800 cursor-pointer'>
                                Send Message
                            </button>
                        </form>

                        <div className="">
                            <img src="https://i.pinimg.com/736x/b9/41/b8/b941b8453486e3d07674b9ab1c81fe84.jpg" alt="" className='h-screen w-full object-cover rounded-md'   decoding="async" loading='lazy'/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
