import React from 'react';

const HomeScreen = () => {
    return (
        <div className='h-screen border-2 border-red-400'>
        <div
        style={{backgroundImage: 
            'url("https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD?quality=auto-medium&amp;format=auto")'
         }}
         className='flex flex-col h-screen item-center justify-between bg-center bg-cover '
        >
            <div className='flex flex-col items-center justify-between h-full'>
            <div className='pt-48 text-center'>
            <h1 className='text-4xl'>Model 3</h1>
            <p>Order Online for{""}  
                <span className='underline'> touchless delivery</span>
                </p>
            </div>
            {/* Button div */}
            <div className=' flex text-center mb-24 gap-16'>
                <button className='border-2 py-2 px-4 rounded-3xl text-sm'>Custom Order</button>

                <button className='border-2 py-2 px-4 rounded-3xl text-sm'>Demo Drive</button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default HomeScreen;
