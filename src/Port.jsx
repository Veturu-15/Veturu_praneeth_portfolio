import React from 'react';
import New from './New';

function Port() {
  const handlePreview = (url) => {
    window.open(url, '_blank');
  };

  const handleSourceCode = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidenav */}
      <div className="fixed top-0 left-0 h-full w-[10%] bg-gray-800">
        <New />
      </div>

      {/* Main Content */}
      <div className="ml-[10%] flex-grow p-6 bg-black">
        {/* Image Set 1 */}
        <div className="flex flex-row gap-6">
          <div className="relative group w-[700px] h-[300px]">
            <img src="Html.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            {/* Overlay with buttons */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
 <a href="https://veturu-15.github.io/website/" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
  
  {/* Wrap the "Source Code" button with an anchor tag for the link */}
  <a
    href="https://github.com/Veturu-15/website"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all"
  >
    Source Code
  </a>
</div>

          </div>
          <div className="relative group w-[700px] h-[300px]">
            <img src="js.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            {/* Overlay with buttons */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="https://veturu-15.github.io/javascript/" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
  
  {/* Wrap the "Source Code" button with an anchor tag for the link */}
  <a
    href="https://github.com/Veturu-15/javascript"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all"
  >
    Source Code
  </a>
            </div>
          </div>
        </div>

        {/* Image Set 2 */}
        <div className="flex flex-row gap-6 mt-6">
          <div className="relative group w-[700px] h-[300px]">
            <img src="React.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href=" https://veturu-15.github.io/react/" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
  
  {/* Wrap the "Source Code" button with an anchor tag for the link */}
  <a
    href="https://github.com/Veturu-15/javascript"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all"
  >
    Source Code
  </a>
            </div>
          </div>
          <div className="relative group w-[700px] h-[300px]">
            <img src="Reactmovies.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href=" https://veturu-15.github.io/React-movie/" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
  
  {/* Wrap the "Source Code" button with an anchor tag for the link */}
  <a
    href="https://github.com/Veturu-15/React-movie"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all"
  >
    Source Code
  </a>
            </div>
          </div>
        </div>

        {/*Image set3*/}
        <div className="flex flex-row gap-6 mt-6">
          <div className="relative group w-[700px] h-[300px]">
            <img src="wordpress.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href=" https://dev-kowshini.pantheonsite.io/" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
            </div>
          </div>
          <div className="relative group w-[700px] h-[300px]">
            <img src="woocommerce.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="https://dev-ammu02.pantheonsite.io/" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
            </div>
          </div>
        </div>
        {/* image sets 4 */}
        <div className="flex flex-row gap-6 mt-6">
          <div className="relative group w-[700px] h-[300px]">
            <img src="poster1.jpg" alt="" className="w-full h-full object-fullcover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
            </div>
          </div>
          <div className="relative group w-[700px] h-[300px]">
          <img src="poster2.jpg" alt="" className="w-full h-full object-fullcover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
            </div>
          </div>
        </div>
        {/* {image set5 } */}
        <div className="flex flex-row gap-6 mt-6">
          <div className="relative group w-[700px] h-[300px]">
          <img src="poster3.jpg" alt="" className="w-full h-full object-fullcover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
            </div>
          </div>
          <div className="relative group w-[700px] h-[300px]">
          <img src="weblayout.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
            </div>
          </div>
        </div>
            {/* {image set6 } */}

        <div className="flex flex-row gap-6 mt-6">
          <div className="relative group w-[700px] h-[300px]">
          <img src="Figma1.jpg" alt="" className="w-[300px] h-[300px] object-fullcover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
            </div>
          </div>
          <div className="relative group w-[700px] h-[300px]">
          <img src="figma2.jpg" alt="" className="w-[300px] h-[300px] object-fullcover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="" target='_blank' rel="noopener noreferrer"
    className="px-4 py-2 bg-white text-black rounded-lg m-2 hover:bg-gray-300 transition-all">
    Preview
    </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Port;
