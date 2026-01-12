import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-20">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-4xl font-semibold text-orange-500">
            Contact
          </h1>
          <p className="mt-3 text-gray-600 max-w-xl leading-relaxed">
            If you’d like to collaborate, discuss ideas, or just have a thoughtful
            conversation around technology, feel free to reach out.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          
          {/* LEFT — INFO */}
          <div className="space-y-10 text-gray-800">
            
            <div>
              <h3 className="text-sm uppercase tracking-wide text-gray-500">
                Location
              </h3>
              <p className="mt-2 text-lg">India</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wide text-gray-500">
                Email
              </h3>
              <p className="mt-2 text-lg">
                alewashruti@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wide text-gray-500">
                Online
              </h3>
              <div className="mt-3 flex gap-6 text-lg">
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  className="hover:text-orange-500 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  className="hover:text-orange-500 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed max-w-sm">
              I enjoy connecting with people who care about building meaningful
              products and growing through learning.
            </p>
          </div>

          {/* RIGHT — FORM */}
          <div className="border bg-orange-50 rounded-2xl p-10 shadow-sm">
            <form className="space-y-4">
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-block px-5 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition"
              >
                Send message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
