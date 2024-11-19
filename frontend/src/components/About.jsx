const About = () => {
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold mb-8">About Us</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
        <div className="p-8 max-w-lg">
          <p className="text-xl leading-relaxed">
            Welcome to<strong className="text-yellow-600"> QuickBite</strong>,
            where we serve delicious, freshly prepared meals made from the
            finest ingredients. Whether you&apos;re craving a quick bite or a
            full meal, we offer a wide variety of dishes to suit every taste.
            Enjoy the convenience of having your favorite meals delivered
            straight to your door with our fast and reliable delivery service.
            At<strong className="text-yellow-600"> QuickBite</strong>,
            we&apos;re committed to providing an exceptional dining experience,
            both in-house and at home. Taste the difference in every bite!
          </p>
        </div>
        <div className="p-8">
          <img
            src="/homeImgs/about.jpg"
            alt="Restaurant"
            className="w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
