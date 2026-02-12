import React from 'react'
import icon1 from '../../assets/images/nav1.svg';
import icon2 from '../../assets/images/nav2.svg';
import sun from '../../assets/images/sun.svg';
import time from '../../assets/images/time.svg';
import bell from '../../assets/images/bell.svg';
import box from '../../assets/images/box.svg';
import serch from '../../assets/images/search.svg';

const Topbar = () => {
  return (
    <div className='h-[68px] w-[300px] flex'>
      {/*left side nav*/}
   <div className='w-[269px] h-[28px] flex items-center gap-[9px] ml-[28px] mt-[20px] mb-[20px]'>

  <img src={icon1} alt='' className='w-4 h-4'/> 
  <img src={icon2} alt='' className='w-4 h-4'/>

  <p className='text-black/40 leading-none'>Dashboards</p>
  <p className='text-black/40 leading-none'>/</p>
  <p className='leading-none'>Default</p>

</div> 
                                    {/*right side nav*/}

                                       <div  className='w-[316px] h-[28px] gap-[20px]  flex ml-[325px] mt-[20px] mb-[20px] '>
                                          
                                          {/*search bar with some icons*/}
                                      
                                        <div className='w-[160px] h-[28px] rounded-[16px] gap-1 opacity-100 pt-1 pr-2 pb-1 pl-2 flex border border-gray-100 bg-gray-100'>
                                      <button className='cursor-pointer'><img src={serch} alt=''className='h-5 w-5'/></button>      
                                            <input type='text' placeholder='Search' className='bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 flex w-[47px] h-[20px]'/>
                                             <span class="text-gray-400 text-sm w-[20px] h-[16px] rounded-[4px] opacity-100 border-[0.5px] pl-2 pr-2 pb-4 ml-10">
                                                 /
                                             </span>
                                             </div>
                                             {/*icons styles*/}
                                              <div className='w-[136px] h-[28px] rounded-[8px]  opacity-100 flex'>
                                                <div className='h-[16px] w-[16px] flex gap-2 mt-1 gap-7'>
                                               <img src={sun} alt=''/>
                                               <img src={time} alt=''/>
                                               <img src={bell} alt=''/>
                                               <img src={box} alt=''/>
                                               </div>
                                              </div>
      

                                             </div>
    </div>
  )
}

export default Topbar