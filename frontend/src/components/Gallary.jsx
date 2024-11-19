const Gallery = () => {
  const dishes = [
    { id: 1, img: "/homeImgs/momo.jpg", name: "Authentic Momo" },
    { id: 2, img: "/homeImgs/ramen.jpg", name: "Ramen" },
    { id: 3, img: "/homeImgs/quinoSalad.jpg", name: "Quinao Salad" },
    { id: 4, img: "/homeImgs/speghetti.jpg", name: "Speghetti" },
    { id: 5, img: "/homeImgs/wraps.jpg", name: "Wraps" },
  ];

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold mb-8">
        Newly Launched Dishes
      </h1>
      <div className="space-y-8">
        {/* First Row: 2 Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {dishes.slice(0, 2).map((dish) => (
            <div
              key={dish.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-[550px] object-cover group-hover:brightness-75 transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <h3 className="text-xl font-semibold text-white">
                  {dish.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* Second Row: 3 Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {dishes.slice(2).map((dish) => (
            <div
              key={dish.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-[330px] object-cover group-hover:brightness-75 transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <h3 className="text-xl font-semibold text-white">
                  {dish.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
