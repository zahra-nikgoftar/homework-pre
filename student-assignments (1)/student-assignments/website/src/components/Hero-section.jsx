export default function HeroSection() {
  return (
    <section className="flex justify-start items-start px-5 sm:px-100 lg:px-400 flex flex-col lg:flex-row justify-between items-center mb-25 gap-8">
      <div className="flex justify-start items-start flex flex-col justify-between gap-4 lg:w-1/2 order-2 lg:order-1">
        <h1 className="flex justify-start items-start text-2xl font-bold text-gray-800 mb-2 md:text-4xl xl:text-6xl">
          Scalable Apps <br /> with frameworks
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptate et neque earum iste hic consequatur nulla deserunt
          architecto numquam!
        </p>
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button class="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md">
            Download for Free
          </button>
          <button class="bg-white border border-black text-black px-6 py-2 rounded-md hover:bg-gray-100">
            Github Repo
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-end order-1 lg:order-2">
        <img
          src="/images/hero-source.svg"
          alt="Hero Illustration"
          className="max-w-full"
        />
      </div>
    </section>
  );
}
