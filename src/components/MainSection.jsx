const MainSection = () => {
    return(
      <div className="center">
        <div className='cont'>
          <div className='item item-1'>
            <div className="relative bg-transparent">
              <div className="bg-transparent pt-8 px-5 text-center">
                <h2 className="bg-transparent text-3xl font-bold">Why Choose Us?</h2>
                <h4 className="bg-transparent text-2xl font-semibold pt-1x">Special Offers</h4>
                <p className="bg-transparent mx-24 pt-1">Sign up now and enjoy your first consultation session with a 20% discount!</p>
              </div>
              <img src="src\assets\doctor.png" alt="" 
                    className="bg-transparent absolute top-[14.5rem] right-11"/>
            </div>
          </div>
          <div className='item item-2'>
            <div className='item-2-l relative'>
              <img src="src\assets\girl.png" alt="" 
                    className="bg-transparent absolute bottom-0 w-[550px]"/>
            </div>
            <div className='item-2-r'>
              <h2 className="bg-transparent text-2xl font-bold mt-5 mb-10">Testimonial</h2>
              &quot;Professional and Empathetic&quot;
              &quot;Working with Dr. Alex Brown at CALMIND has been a transformative experience. His professional and empathetic approach made me feel heard and understood. I highly recommend CALMIND to anyone seeking mental health support.&quot; - Michael T.</div>
          </div>
          <div className='item item-3 text-white py-[10%] px-[7%]'>
            <h4 className="text-2xl font-semibold bg-transparent tracking-tight">Key Features</h4>
            <ul className="bg-transparent text-xl font-light">
              <li className="bg-transparent">Licensed Therapists</li>
              <li className="bg-transparent">24/7 Availability</li>
              <li className="bg-transparent">Secure and Private</li>
              <li className="bg-transparent">Easy Scheduling</li>
              <li className="bg-transparent">Personalized Treatment Plans</li>
              <li className="bg-transparent">Multilingual Support</li>
              <li className="bg-transparent">Affordable Pricing</li>
            </ul>
          </div>
          <div className='item item-4 p-5'>
            <div className="relative bg-transparent h-[100%] center">
              <div className="center bg-transparent flex-col gap-6">
                <img src="src\assets\question-mark.png" alt="" 
                      className="bg-transparent w-[55px] h-[88px]"/>
                <p className="bg-transparent text-white">FAQ</p>
              </div>
              <img src="src\assets\right.png" alt="" 
                    className="bg-transparent absolute bottom-0 right-0 w-[40px] h-auto"/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MainSection