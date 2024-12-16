

function Blog () {
    return(
        <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="relative bg-cover bg-center h-[316px] w-[1540px]" style={{ backgroundImage: "url('/image_20.png')", }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center">            
            <div>
            <img src="/Logo101.png" alt="logoo" className="w-[89px] h-[89px] ml-1" />
              <h1 className="text-4xl font-bold text-black mb-2">Blog</h1>
              <p className="text-black text-sm">Home &gt; Blog</p>
            </div>
          </div>
        </div>

    <div className="bg- min-h-screen">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="flex justify-between items-center py-4 border-b">
          <div className="text-2xl font-bold"></div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="border rounded px-3 py-1 focus:outline-none"
            /> 
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-8 mt-8">
          {/* Blog Posts */}
          <div className="col-span-9 space-y-8">
            {/* Post 1 */}
            <div className="bg-white rounded shadow p-4">
              <img
                src="/Image_34.png"
                alt="Blog Image"
                className="rounded"
              />
              <div className="mt-4">
                <p className="text-[#9F9F9F] text-sm pb-3"> Admin | 20 Oct 2022 | Wood
                </p>
                <h2 className="text-2xl font-bold">Going all-in with millennial design</h2>
                <p className="text-[#9F9F9F] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
                in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit 
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <a
                  href="#"
                  className="text-black font-semibold mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded shadow p-4">
              <img
                src="Image_35.png"
                alt="Blog Image"
                className="rounded"
              />
              <div className="mt-4">
                <p className="text-gray-500 text-sm pb-3">Admin | 20 Oct 2022 | Handmade</p>
                <h2 className="text-2xl font-bold">Exploring new ways of decorating</h2>
                <p className="text-[#9F9F9F] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam
                ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
                in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit 
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <a
                  href="#"
                  className="text-black font-semibold mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white rounded shadow p-4">
              <img
                src="/Image_36.png"
                alt="Blog Image"
                className="rounded"
              />
              <div className="mt-4">
                <p className="text-[#9F9F9F] text-sm pb-3">Admin | 20 Oct 2022 | Wood</p>
                <h2 className="text-2xl font-bold">
                  Handmade pieces that took time to make
                </h2>
                <p className="text-[#9F9F9F] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam 
                ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis 
                in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit 
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <a
                  href="#"
                  className="text-black font-semibold mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex space-x-3 justify-center mt-8">
              <button className="px-4 py-2 bg-[#B88E2F] text-white rounded">
                1
              </button>
              <button className="px-3 py-1 border rounded">2</button>
              <button className="px-3 py-1 border rounded">3</button>
              <button className="px-3 py-1 border rounded">Next</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-span-3">
            {/* Categories */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-7">
                <li>
                  <a href="#" className="text-[#9F9F9F] hover:text-blue-500">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#9F9F9F] hover:text-blue-500">
                    Wood
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#9F9F9F] hover:text-blue-500">
                    Handmade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#9F9F9F] hover:text-blue-500">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#9F9F9F] hover:text-blue-500">
                    Others
                  </a>
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-4 rounded shadow mt-8">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-10">
                <li>
                  <img
                    src="/Image_31.png"
                    alt=""
                    className="inline-block mr-2 rounded"
                  />
                  <span>Exploring new ways 
                  of decorating
                  </span>
                  <span>2</span>
                </li>
                <li>
                  <img
                    src="/Image_32.png"
                    alt=""
                    className="inline-block mr-2 rounded"
                  />
                  <span>Exploring new ways of decorating</span>
                </li>
                <li>
                  <img
                    src="/Image_33.png"
                    alt=""
                    className="inline-block mr-2 rounded"
                  />
                  <span>Handmode pleaces that took time to make</span>
                </li>
                <li>
                  <img
                    src="/Image_37.png"
                    alt=""
                    className="inline-block mr-2 rounded"
                  />
                  <span>Modern home in melan</span>
                </li>
                <li>
                  <img
                    src="/Image_38.png"
                    alt=""
                    className="inline-block mr-2 rounded"
                  />
                  <span>Colorfull office redesighn</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
          {/* Footer */}
          <div className="flex justify-between p-20 w-full mr-12 mb-5 h-[270px] items-center mt-12 bg-[#FAF3EA] text-center">
          <div className="">
            <img src="/trophy 1.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold">High Quality</h4>
            <p className="text-[#898989]">Crafted from top materials</p>
          </div>
          <div>
          <img src="/guarantee.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold ">Warranty Protection</h4>
            <p className="text-[#898989]">Over 2 years</p>
          </div>
          <div>
          <img src="/shipping.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold">Free Shipping</h4>
            <p className="text-[#898989]">Order over 150$</p>
          </div>
          <div>
          <img src="/customer-support.png" alt="Picture of the authore" className="w-[60px] h-[60px] ml-10" />
            <h4 className="font-bold">24 / 7 Support</h4>
            <p className="text-[#898989]">Dedicated support</p>
          </div>
        </div>
    </div>
    </div>
    )
}
export default Blog;