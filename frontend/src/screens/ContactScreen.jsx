const ContactScreen= () => {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full relative">
          <img
            src="/homeImgs/contact-banner.jpg" 
            alt="Contact Banner"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h1 className="text-4xl md:text-3xl font-bold text-yellow-500 drop-shadow-lg">
              Get In Touch With Us
            </h1>
          </div>
        </div>
  
        {/* Contact Details & Form */}
        <div className="w-full max-w-5xl px-6 py-12 space-y-12">
          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-yellow-500">Contact Details</h2>
              <p className="text-gray-300">
                We&apos;d love to hear from you! Reach out to us using the details below, or drop us a message
                using the form.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <i className="fas fa-phone-alt text-yellow-500"></i>
                  <span>+1 (234) 5364-342 </span>
                </p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-envelope text-yellow-500"></i>
                  <span>contact@QuickBite.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-yellow-500"></i>
                  <span>123 Food Street, India</span>
                </p>
              </div>
            </div>
  
            {/* Contact Form */}
            <form className="space-y-6">
              <h2 className="text-3xl font-bold text-yellow-500">Send Us a Message</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg shadow-lg text-black font-bold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactScreen;
  