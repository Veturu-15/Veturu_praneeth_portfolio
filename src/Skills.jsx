import React from 'react';
import New from './New';

function Skills() {
  return (
    <div className="flex min-h-screen">
      <div className="fixed left-0 top-0 bottom-0 w-[10%] bg-gray-800">
      <New/>
      </div>
      {/* Content Section */}
      <div className="ml-[10%] flex flex-col w-full bg-black text-white p-10">
        <h1 className="text-3xl font-semibold mb-10 flex justify-center items-center">My Skills</h1>
        {/* Technical Skills */}
            <h1 className='text-3xl justify-start items-start flex'>Technical Skills:</h1>
            <div className='flex h-100 w-50'>
            <div className="relative h-[250px] w-[250px]">
              <img  className=' cursor-pointer hover:bg-blue-500 p-5 h-[250px] w-[250px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd2rMcfI56SZEenhvautbZl_xUsPSHaktNw&s" alt="Html" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"  >
                    <span className="text-white text-xl font-bold">95%</span>
                </div>
           </div>
            <div className="relative h-[250px] w-[250px]">
            <img src="https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg" alt="css" className="cursor-pointer hover:opacity-75 p-5 h-full w-full rounded-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"  >
                    <span className="text-white text-xl font-bold">95%</span>
                </div>
            </div>
            <div className="relative h-[250px] w-[250px]">
            <img src="https://campus.epam.com/static/plan/4462/selfstudy03375353.png" alt="Javascripts"  className='cursor-pointer hover:bg-blue-500 p-5 h-[250px] w-[250px] rounded-full' />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"  >
                    <span className="text-white text-xl font-bold">70%</span>
                </div></div>
                <div className="relative h-[250px] w-[250px]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="React"   className='cursor-pointer hover:bg-blue-500 p-5 h-[250px] w-[250px] rounded-full' />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"  >
                    <span className="text-white text-xl font-bold">70%</span>
                </div></div>
           
            </div>
            <div className='flex h-100 w-50'>
            <div className="relative h-[250px] w-[250px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzAicjrHuGWhcqpDgjnM8zp1mT1ZcUJ8Ssw&s" alt="Wordpress"  className='cursor-pointer hover:bg-blue-500 p-5 h-[250px] w-[250px] rounded-full' aria-level={80} />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"  >
                    <span className="text-white text-xl font-bold">85%</span>
                </div></div>
                <div className="relative h-[250px] w-[250px]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png" alt="Photoshop"  className='cursor-pointer hover:bg-blue-500 p-5 h-[250px] w-[250px] rounded-full' />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"  >
                    <span className="text-white text-xl font-bold">80%</span>
                </div></div>
                <div className="relative h-[250px] w-[250px]">
                <img src="https://cdn.pixabay.com/photo/2021/02/03/12/28/adobe-illustrator-5977785_1280.png" alt="Illustartor"  className='cursor-pointer hover:bg-blue-500 p-5 h-[250px] w-[250px] rounded-full' />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"  >
                    <span className="text-white text-xl font-bold">50%</span>
                </div></div>
                <div className="relative h-[250px] w-[250px]">
                <img src="https://blog.greggant.com/images/posts/2019-04-25-figma/Figma.png" alt="Figma"  className='cursor-pointer hover:bg-blue-500 p-5 h-[250px] w-[250px] rounded-full' />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"  >
                    <span className="text-white text-xl font-bold">80%</span>
                </div></div>
            </div>
            <div className='flex h-100 w-50 gap-4 '>
            <h1 className='mobile-card text-3xl justify-start items-start flex p-4 gap-4'>Soft Skills:</h1>
            <br />
            <h6 className=" cursor-pointer hover:bg-blue-500 text-1xl rounded bg-white text-black p-4  min-w-32 max-w-40 ">Communication</h6>
            <h6 className="cursor-pointer hover:bg-blue-500 text-1xl rounded bg-white text-black p-4 min-w-32 max-w-48 ">Problem Solving</h6>
            <h6 className="cursor-pointer hover:bg-blue-500 text-1xl rounded bg-white text-black p-4 min-w-32 max-w-48 "> Time Management</h6>
            <h6 className="cursor-pointer hover:bg-blue-500 text-1xl rounded bg-white text-black p-4 min-w-32 max-w-48 "> Team Collaboration</h6>
            </div>
      </div>
    </div>
  );
}

export default Skills;
