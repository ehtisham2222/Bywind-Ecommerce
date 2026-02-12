import React, { useState } from 'react'
import Avatar from '../../assets/images/AvatarByewind.svg';
import vector1 from '../../assets/images/Vector-1.svg';
import vector2 from '../../assets/images/vector 2.svg';
import vector4 from '../../assets/images/vector4.svg';
import vector5 from '../../assets/images/Vector 5.svg';
import vector6 from '../../assets/images/Vector6.svg';
import vector3 from '../../assets/images/vector3.svg';
import vector9 from '../../assets/images/vector 9.svg';
import vector7 from '../../assets/images/vector7.svg';
import vector8 from '../../assets/images/vector8.svg';
import  great from '../../assets/images/greaat.svg';
import snow from '../../assets/images/SnowUI Logo.svg';
const Asidebar = () => {
    const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
      /* main div sidebar*/
    <div className='w-[212px] h-full '>
           <div className="flex flex-col gap-2 ml-[16px] mt-[16px] mr-[16px]">
                   <div className="flex items-center gap-2 p-2 rounded-lg">
                     <img src={Avatar} alt="" className="w-6 h-6" />
                     <h1 className="font-poppins text-[17px] font-medium">ByeWind</h1>
                   </div>
                  
                   <div className="flex gap-2">
                     <button className="w-[85px] h-[28px] rounded-[14px]  hover:bg-blue-100 transition font-inter cursor-pointer  text-black/40 ">
                       Favorites
                     </button>
                     <button className="w-[82px] h-[28px] rounded-[14px] text-[15px] hover:bg-blue-100 transition  text-black/10 cursor-pointer borrder-1">
                       Recently
                     </button>
                   </div>
                   <div className="h-9 p-2 rounded-xl hover:bg-blue-200 flex items-center gap-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-90">
                     <img src={vector1} alt="" className="w-[6px] h-[6px]" />
                     <span className="text-[15px]">Overview</span>
                   </div>
           
                   <div className="h-9 p-2 rounded-xl hover:bg-blue-200 flex items-center gap-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-90">
                     <img src={vector1} alt="" className="w-[6px] h-[6px]" />
                     <span className="text-[15px]">Projects</span>
                   </div>
                 </div>
                 <div className="  ml-[16px] mt-[8px] mr-[16px]">
                   <h2 className="font-poppins text-[15px] text-black/40 px-3 mb-2">
                     Dashboard
                   </h2>
           
                   <div className="h-9 p-2 rounded-xl hover:bg-blue-200 flex items-center gap-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-90">
                     <img src={vector2} alt="" className="w-4 h-4 transition-transform duration-200 ease-in-out hover:scale-90" />
                     <span className="text-[15px]">Overview</span>
                   </div>
                   <Dropdown
                     title="eCommerce"
                     icon={vector3}
                     name="ecommerce"
                     openMenu={openMenu}
                     toggleMenu={toggleMenu}
                     className='transition-transform duration-200 ease-in-out hover:scale-90'
                   />
           
                   <Dropdown
                     title="Projects"
                     icon={vector9}
                     name="projects"
                     openMenu={openMenu}
                     toggleMenu={toggleMenu}
    
                   />
                 </div>
                 <div className=" ml-[16px] mt-[8px] mr-[16px]">
                   <h2 className="font-poppins text-[15px] text-black/40 px-3 mb-2">
                     Pages
                   </h2>
                   <div
                     onClick={() => toggleMenu('userProfile')}
                     className="h-9 p-2 rounded-xl hover:bg-blue-200 flex items-center gap-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-90"
                   >
                     <img
                       src={great}
                       alt=""
                       className={`w-[5px] h-[9px] transition-transform  duration-200 ease-in-out hover:scale-90 ${
                         openMenu === 'userProfile' ? 'rotate-90' : ''
                       }`}
                     />
                     <img src={vector4} alt="" className="w-4 h-4 ml-2 transition-transform duration-200 ease-in-out hover:scale-90" />
                     <span className="text-[15px] ml-2">User Profile</span>
                   </div>
                   {openMenu === 'userProfile' && (
                     <div className="ml-6">
                       {['Overview', 'Projects', 'Campaigns', 'Followers', 'Documents'].map(
                         (item) => (
                           <div
                             key={item}
                             className="h-8 px-2 rounded-lg hover:bg-blue-100 flex items-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-90"
                           >
                             <span className="text-[14px]">{item}</span>
                           </div>
                         )
                       )}
                     </div>
                   )}
                   <Dropdown title="Account" icon={vector5} name="account" openMenu={openMenu} toggleMenu={toggleMenu} />
                   <Dropdown title="Corporate" icon={vector6} name="corporate" openMenu={openMenu} toggleMenu={toggleMenu} />
                   <Dropdown title="Blog" icon={vector7} name="blog" openMenu={openMenu} toggleMenu={toggleMenu} />
                   <Dropdown title="Social" icon={vector8} name="social" openMenu={openMenu} toggleMenu={toggleMenu} />
                 </div>
                 <div className=" ml-[16px] mr-[16px] mt-[168px] mb-[20px] flex justify-center">
                   <img src={snow} alt="SnowUI" className="w-20" />
                 </div>
               </div>
             );
           }
           const Dropdown = ({ title, icon, name, openMenu, toggleMenu }) => (
             <>
               <div
                 onClick={() => toggleMenu(name)}
                 className="h-9 p-2 rounded-xl hover:bg-blue-200 flex items-center gap-2 cursor-pointer"
               >
                 <img
                   src={great}
                   alt=""
                   className={`w-[5px] h-[9px] transition-transform ${
                     openMenu === name ? 'rotate-90' : ''
                   }`}
                 />
                 <img src={icon} alt="" className="w-4 h-4 ml-2" />
                 <span className="text-[15px] ml-2">{title}</span>
               </div>
           
               {openMenu === name && <div className="ml-6 h-4"></div>}
             </>
        
        
        
  )


export default Asidebar