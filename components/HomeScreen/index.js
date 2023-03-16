import React from 'react';


const HomeScreen = () => {
    return (
        <div className='h-screen overflow-y scroll snap-y snap-mandatory scroll-smooth'>
        <div
        style={{backgroundImage: 
            'url("https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD?quality=auto-medium&amp;format=auto")'
         }}
         id="model3"

         className='flex flex-col h-screen item-center justify-between bg-center bg-cover snap-start snap-always'
        >
            <div className='flex flex-col items-center justify-between h-full font-montserrat'>
            <div className='pt-48 text-center'>
            <h1 className='text-4xl'>Model 3</h1>
            <p>
            Order Online for{""}  
                <span className='underline'> touchless delivery</span>
                </p>
            </div>
            {/* Button div */}
            <div className=' flex text-center mb-24 gap-8'>
                <button className='  bg-[#393c41] w-48 text-white py-1 px-4 rounded-3xl text-xs'>Custom Order</button>
                <button className=' w-48  text-[#393c41] bg-white py-1 px-4 rounded-3xl text-xs'>Demo Drive</button>
            </div>
            <a  href="#modelY" className='absolute bottom-4 animate-bounce'>
            <div className='absolute bottom-4 animate-bounce'>
            <svg
            xmlns="http://ww.w3.org/2000/svg"
            width="48"
            height="33"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap='round'
            strokeLinejoin='round'
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            </div>
            </a>
            </div>
        </div>


        {/* Model Y */}
        <div
        style={{backgroundImage: 
            'url("https://tesla-cdn.thron.com/delivery/public/image/tesla/81d6bbcd-e260-4176-86c4-cbd5033f9431/bvlatuR/std/1200x628/Model-Y-Social-EMEA-LHD?quality=auto-medium&format=auto")'
         }}
         id="modelY"
         className='flex flex-col h-screen items-center justify-between bg-center bg-cover font-montserrat snap-start snap-always'
        >
            <div className='flex flex-col items-center justify-between h-full'>
            <div className='pt-48 text-center'>
            <h1 className='text-4xl'>Model Y</h1>
            
            </div>
            {/* Button div */}
            <div className=' flex text-center mb-24 gap-8'>
                <button className='  bg-[#393c41] w-48 text-white py-1 px-4 rounded-3xl text-xs'>Custom Order</button>

                <button className=' w-48  text-[#393c41] bg-white py-1 px-4 rounded-3xl text-xs'>Demo Drive</button>
            </div>
            <a  href="#modelS" className='fixed bottom-4 right-4 animate-bounce scroll-smooth'>
            <div className='absolute animate-bounce'>
            <svg
            xmlns="http://ww.w3.org/2000/svg"
            width="48"
            height="33"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap='round'
            strokeLinejoin='round'
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            </div>
            </a>
            </div>
        </div>
         {/* Model S */}
        <div
        style={{backgroundImage: 
            'url("https://tesla-cdn.thron.com/delivery/public/image/tesla/58949946-f4bf-4908-b707-18b2fa6020a5/bvlatuR/std/2880x1800/Homepage-Model-S-Desktop-LHD?quality=auto-medium&amp;format=auto")'
         }}
         id="modelS"
         className='flex flex-col h-screen item-center justify-between bg-center bg-cover font-montserrat snap-start snap-always'
        >
            <div className='flex flex-col items-center justify-between h-full'>
            <div className='pt-48 text-center'>
            <h1 className='text-4xl'>Model S</h1>
            <p>Order Online for{""}  
                <span className='underline'> touchless delivery</span>
                </p>
            </div>
            {/* Button div */}
            <div className=' flex text-center mb-24 gap-8'>
                <button className='  bg-[#393c41] w-48 text-white py-1 px-4 rounded-3xl text-xs'>Custom Order</button>

                <button className=' w-48  text-[#393c41] bg-white py-1 px-4 rounded-3xl text-xs'>View Inventory</button>
            </div>
            </div>
        </div>

        {/* Model X */}
        <div
        style={{backgroundImage: 
            'url("https://tesla-cdn.thron.com/delivery/public/image/tesla/a4fd80a1-095e-4ce1-8db1-95b3ff880c26/bvlatuR/std/2880x1800/Model-X-Main-Hero-Desktop-RHD?quality=auto-medium&amp;format=auto%C2%A0")'
         }}
         id="modelX"

         className='flex flex-col h-screen item-center justify-between bg-center bg-cover font-montserrat snap-start snap-always'
        >
            <div className='flex flex-col items-center justify-between h-full'>
            <div className='pt-48 text-center'>
            <h1 className='text-4xl'>Model X</h1>
            <p>Order Online for{""}  
                <span className='underline'> touchless delivery</span>
                </p>
            </div>
            {/* Button div */}
            <div className=' flex text-center mb-24 gap-8'>
                <button className='  bg-[#393c41] w-48 text-white py-1 px-4 rounded-3xl text-xs'>Custom Order</button>

                <button className=' w-48  text-[#393c41] bg-white py-1 px-4 rounded-3xl text-xs'>View Inventory</button>
            </div>
            </div>
        </div>

        {/* Solar Panel */}
        <div
        style={{backgroundImage: 
            'url("https://tesla-cdn.thron.com/delivery/public/image/tesla/45992f1c-a33a-4a04-b1f0-338aff182f8e/bvlatuR/std/2880x1800/_25-Hero-D")'
         }}
         id="solarPanels"

         className='flex flex-col h-screen item-center justify-between bg-center bg-cover font-montserrat snap-start snap-always'
        >
            <div className='flex flex-col items-center justify-between h-full'>
            <div className='pt-48 text-center'>
            <h1 className='text-4xl'>Solar Panels</h1>
            <p>Order Online for{""}  
                <span className='underline'> touchless delivery</span>
                </p>
            </div>
            {/* Button div */}
            <div className=' flex text-center mb-24 gap-8'>
                <button className='  bg-[#393c41] w-48 text-white py-1 px-4 rounded-3xl text-xs'>Order Now</button>

                <button className=' w-48  text-[#393c41] bg-white py-1 px-4 rounded-3xl text-xs'>Learn More</button>
            </div>
            </div>
        </div>
        {/* Solar Roofs */}
        <div
        style={{backgroundImage: 
            'url("https://tesla-cdn.thron.com/delivery/public/image/tesla/5299492b-ead4-4a79-a96e-02a030c0bbc4/bvlatuR/std/0x0/tesla_solar_roof")'
         }}
         id="solarRoofs"

         className='flex flex-col h-screen item-center justify-between bg-center bg-cover font-montserrat snap-start snap-always'
        >
            <div className='flex flex-col items-center justify-between h-full'>
            <div className='pt-48 text-center'>
            <h1 className='text-4xl'>Solar Roofs</h1>
            <p>Order Online for{""}  
                <span className='underline'> touchless delivery</span>
                </p>
            </div>
            {/* Button div */}
            <div className=' flex text-center mb-24 gap-8'>
                <button className='  bg-[#393c41] w-48 text-white py-1 px-4 rounded-3xl text-xs'>Order Now</button>

                <button className=' w-48  text-[#393c41] bg-white py-1 px-4 rounded-3xl text-xs'>Learn More</button>
            </div>
            </div>
        </div>
        {/* Accessories */}
        <div
        style={{backgroundImage: 
            'url("https://www.teslarati.com/wp-content/uploads/2022/09/tesla-destination-charging-1-scaled.jpg")'
         }}
         id="accessories"
         className='flex flex-col h-screen item-center justify-between bg-center bg-cover font-montserrat snap-start snap-always'
        >
            <div className='flex flex-col items-center justify-between h-full'>
            <div className='pt-48 text-center'>
            <h1 className='text-4xl'>Accessories</h1>
            </div>
            {/* Button div */}
            <div className=' flex text-center mb-24 gap-8'>
                <button className='  bg-[#393c41] w-48 text-white py-1 px-4 rounded-3xl text-xs'>Shop Now</button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default HomeScreen;
