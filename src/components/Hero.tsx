
export const Hero = () => {
  return (
    <>
      <div className="relative bg-[url('../../public/img/hero.jpg')] bg-cover bg-center p-0 pb-20 pt-40 md:h-auto h-screen">
        {/* Gradient Overlay gctg */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/60"></div>
        
        {/* Content Section */}
        <div className="relative flex flex-col place-items-center justify-center text-center py-20 sm:py-32">
  <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
      INpower Laptop Repairing Center.
    </h1>
    <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-gray-200">
      Expert repairs and upgrades to keep your laptop running like new.
    </p>
    <div className="mt-8 flex justify-center">
      <a
        href=""
        target="_blank"
        rel="noopener"
        className="md:px-6 px-4 py-2 md:py-3 md:text-lg font-bold bg-sky-400  border-blue-900 border-2 text-blue-900 rounded-md shadow-4xl transition duration-300 hover:scale-105 hover:text-sky-400 hover:border-sky-400 hover:bg-blue-900">
        Get Your Laptop Fixed Today
      </a>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default Hero;
