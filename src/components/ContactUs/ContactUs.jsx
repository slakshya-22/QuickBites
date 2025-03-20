const ContactUs = () => {
    return (
        <div id="contact" className="bg-white py-16 px-6 mt-[50px] mb-[50px]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#F97316] mb-8 pt-[20px]">📞 Contact Us</h2>
                <p className="text-lg text-[#1E293B] mb-6">
                    Got questions? Reach out to us and we'll get back to you as soon as possible.
                </p>

                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-[#F97316] text-white py-3 rounded-md hover:bg-orange-500 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
