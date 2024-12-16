import Link from "next/link";
function Cart () {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="relative bg-cover bg-center h-[316px] w-[1540px]" style={{ backgroundImage: "url('/image_20.png')", }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center">            
            <div>
            <img src="/Logo101.png" alt="logoo" className="w-[79px] h-[79px]" />
              <h1 className="text-4xl font-bold text-black mb-2">Cart</h1>
              <p className="text-gray-600 text-sm">Home &gt; Cart</p>
            </div>
          </div>
        </div>
        
        {/* Cart Content */}
        <div className="container mx-auto p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Table */}
            <div className="w-full lg:w-3/4">
              <table className="w-[901px] border-collapse">
                <thead>
                  <tr className="bg-[#F9F1E7] text-gray-700">
                    <th className="p-4 text-left">Product</th>
                    <th className="p-4 text-left">Price</th>
                    <th className="p-4 text-left">Quantity</th>
                    <th className="p-4 text-left">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 flex items-center">
                      <img src="/Image_26.png" alt="Asgaard sofa" className="w-[111px] h-[90px] rounded mr-4" />
                      <span className="text-gray-700">Asgaard sofa</span>
                    </td>
                    <td className="p-4 text-gray-700">Rs. 250,000.00</td>
                    <td className="p-4">
                      <input
                        type="number"
                        defaultValue={1}
                        className="w-16 border border-gray-300 rounded text-center"
                      />
                    </td>
                    <td className="p-4 text-gray-700">Rs. 250,000.00</td>
                    <td className="p-4">
                      <button>
                        <img src="/Vector (1).png" alt="Remove" className="w-[21px] h-[21.88px]" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            {/* Cart Totals */}
            <div className="w-full lg:w-1/4 bg-[#F9F1E7] p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-700 mb-4 pb-8 text-center">Cart Totals</h2>
              <div className="flex justify-between mb-2 pb-5">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-700">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between mb-6 pb-3">
                <span className="text-gray-700 font-bold">Total</span>
                <span className="text-[#B88E2F] font-bold">Rs. 250,000.00</span>
              </div>
              <button className="w-full py-2  mb-6 bg-[#F9F1E7] text-black border border-black font-semibold rounded-lg hover:bg-amber-700">
                Check Out
              </button>
            </div>   
          </div>   

          <div className="flex justify-evenly items-center mt-16 w-full space-x-7 p-20 h-[270px] bg-[#F9F1E7]">
                  
                  < div className="">
                  <img src="/trophy 1.png" alt="Picture of the author" className="w-[60px] h-[60px]" />
                  
                    <h4 className=" font-bold">High Quality</h4>
                    <p className="text-[#898989]">crafted from top materials</p>
                  </div>
                  <div>
                  <img src="/guarantee.png" alt="Picture of the author" className="w-[60px] h-[60px]" />
                    <h4 className="font-bold">Warranty Protection</h4>
                    <p className="text-[#898989]">Over 2 years</p>
                  </div>
                  <div>
                  <img src="/shipping.png" alt="Picture of the author" className="w-[60px] h-[60px]" />
                    <h4 className="font-bold">Free Shipping</h4>
                    <p className="text-[#898989]">Order over 150 $</p>
                  </div>
                  <div>
                  <img src="/customer-support.png" alt="Picture of the author" className="w-[60px] h-[60px]" />
                    <h4 className="font-bold">24 / 7 Support</h4>
                    <p className="text-[#898989]">Dedicated support</p>
                  </div>
                </div>      
        </div>
      </div>
    );
  }
export default Cart;