function BillingPage() {
    return (
       
        <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="relative bg-cover bg-center h-[316px] w-[1540px]" style={{ backgroundImage: "url('/image_20.png')", }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center">            
            <div>
            <img src="/Logo101.png" alt="logoo" className="w-[89px] h-[89px] ml-10" />
              <h1 className="text-4xl font-bold text-black mb-2">CheckOut</h1>
              <p className="text-black text-sm">Home &gt; Cart</p>
            </div>
          </div>
        </div>
    

      <div className="max-w-7xl mx-auto p-6 lg:p-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Billing Details */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">

              <label className="block text-gray-700 font-medium mb-1 ">First Name
               <input type="text" placeholder=""
               className="w-[211px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label> 
               
               <label className="block text-gray-700 font-medium mb-1 ">Last Name
               <input type="text" placeholder=""
                className="w-[211px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
              </div>

              <label className="block text-gray-700 font-medium mb-1 ">Company Name (Optional) <br></br> <br></br>
              <input type="text" placeholder="" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>

              <label className="block text-gray-700 font-medium mb-1 ">Country / Region <br></br> <br></br>
              <input type="text" placeholder="Srilanka" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>

              <label className="block text-gray-700 font-medium mb-1 ">Street adress <br></br> <br></br>
              <input type="text" placeholder="" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>

              
              <label className="block text-gray-700 font-medium mb-1 ">Town/City <br></br> <br></br>
              <input type="text" placeholder="" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
             <label className="block text-gray-700 font-medium mb-1 ">Province <br></br> <br></br>
              <input type="text" placeholder="Wastern Province" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
              <label className="block text-gray-700 font-medium mb-1 ">ZIP Code <br></br> <br></br>
              <input type="text" placeholder="Wastern Province" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
              <label className="block text-gray-700 font-medium mb-1 ">Phone <br></br> <br></br>
              <input type="text" placeholder="" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
              <label className="block text-gray-700 font-medium mb-1 ">Email adress <br></br> <br></br>
              <input type="text" placeholder="" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
              <label className="block text-gray-700 font-medium mb-1 ">
              <input type="text" placeholder="Additional information" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
            </form>
          </div>
  
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6"></h2>
            <div className="border p-6">
              <div className="flex justify-between mb-4">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-[#9F9F9F]">Asgard sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              

              <div className="flex justify-between my-4">
                <span className="font-semibold">Subtotal</span>
                <span className=" text-black">Rs. 250,000.00</span>
              </div>

              <div className="flex justify-between my-4">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
             
              <hr />

              <div className="mt-6 space-y-4 text-[#000000]">
                <div className="">
                  <input type="radio" name="payment" id="bank" defaultChecked />
                  <label htmlFor="bank" className="ml-2 font-medium" >
                    Direct Bank Transfer
                  </label>
                  <p className="text-sm text-[#9F9F9F] mt-2">
                  Make your payment directly into our bank account. Please use 
                  your Order ID as the payment reference. Your order will not be
                   shipped until the funds have cleared in our account.
                  </p>
                </div>

                <div className="text-[#9F9F9F]">
                  <input type="radio" name="payment" id="cod" />
                  <label htmlFor="cod" className="ml-2 font-medium">
                    Direct Bank Transfer
                  </label>
                </div>

                <div className="text-[#9F9F9F]">
                  <input type="radio" name="payment" id="cod" />
                  <label htmlFor="cod" className="ml-2 font-medium">
                    Cash on Delivery
                  </label>
                </div>

                <p className="text-sm text-[#000000] mt-2"> 
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and 
                for other purposes described in our privacy policy.
                </p>

              </div>
              <div className="flex justify-center items-center">
              <button className=" rounded-lg w-[248px] mt-6 py-3 border-2 border-[#000000] text-[#000000] font-bold hover:bg-yellow-700 hover:text-white transition">
                Place order
              </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <div className="flex justify-between p-20 w-full mr-12 h-[270px] items-center mt-12 bg-[#FAF3EA] text-center">
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
    );
  }
  
export default BillingPage;