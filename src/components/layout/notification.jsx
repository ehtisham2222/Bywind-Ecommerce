import React from 'react'
import man from '../../assets/images/man.svg';
import kakroch from '../../assets/images/kakroch.svg';
import last from '../../assets/images/lasticon.svg';
import r1 from  '../../assets/images/r1.svg';
import r2 from  '../../assets/images/r2.svg';
import r3 from  '../../assets/images/r3.svg';
import f4 from '../../assets/images/f4.svg';
import f5 from '../../assets/images/f5.svg';
import img1 from '../../assets/images/img1.svg';
import img2 from '../../assets/images/img2.svg';
import img3 from '../../assets/images/img3.svg';
import img4 from '../../assets/images/img4.svg';
import img5 from '../../assets/images/img5.svg';
import img6 from '../../assets/images/img6.svg';
const Notification = () => {
  return (
    <div className='w-70 h-full '>
       {/*notification*/}
       <div className='w-[248px] h-[260px] gap-1 justify-center mt-[16px]  '>
          <div className='w-[248px] h-[36px] rounded-[12px] '>
                 <div className='w-[240px] h-[20px]'>
                   <p>Notification</p>
                 </div>
                 {/*1*/}
                 <div className='w-[248px] h-[52px] rounded-[12px] p-[8px] gap-2 flex  hover:bg-blue-200 cursor-pointer mt-[4px]'>
                       <div className="w-[24px] h-[24px] rounded-[8px] p-[4px] opacity-100 bg-[#E6F1FD] transition-transform duration-200 ease-in-out hover:scale-90">
                          <img src={kakroch} alt='' className='h-[16px] w-[16px]'/>
                       </div>
                       <div className='w-[200px] h-[36px] rounded-[12px] transition-transform duration-200 ease-in-out hover:scale-90 '>
                           <p className='text-sm'>You fixed a bug.</p>
                           <p className='text-xs text-black/40 '>Just now</p>
                       </div>
                 </div>
                   {/*2*/}
                 <div className='w-[248px] h-[52px] rounded-[12px] p-[8px] gap-2 flex hover:bg-blue-200 cursor-pointer'>
                       <div className="w-[24px] h-[24px] rounded-[8px] p-[4px] opacity-100 bg-[#E6F1FD] transition-transform duration-200 ease-in-out hover:scale-90">
                          <img src={man} alt='' className='h-[16px] w-[16px]'/>
                       </div>
                       <div className='w-[200px] h-[36px] rounded-[12px] transition-transform duration-200 ease-in-out hover:scale-90'>
                           <p className='text-sm'>New user registeRed.</p>
                           <p className='text-xs text-black/40'>59 minutes ago</p>
                       </div>
                 </div>
                    {/*3*/}
                 <div className='w-[248px] h-[52px] rounded-[12px] p-[8px] gap-2 flex hover:bg-blue-200 cursor-pointer'>
                       <div className="w-[24px] h-[24px] rounded-[8px] p-[4px] opacity-100 bg-[#E6F1FD] transition-transform duration-200 ease-in-out hover:scale-90">
                          <img src={kakroch} alt='' className='h-[16px] w-[16px]'/>
                       </div>
                       <div className='w-[200px] h-[36px] rounded-[12px] transition-transform duration-200 ease-in-out hover:scale-90 '>
                           <p className='text-sm'>You fixed a bug.</p>
                           <p className='text-xs text-black/40'>12 hours ago</p>
                       </div>
                 </div>
                    {/*4*/}
                 <div className='w-[248px] h-[52px] rounded-[12px] p-[8px] gap-2 flex hover:bg-blue-200 cursor-pointer'>
                       <div className="w-[24px] h-[24px] rounded-[8px] p-[4px] opacity-100 bg-[#E6F1FD] transition-transform duration-200 ease-in-out hover:scale-90">
                          <img src={last} alt='' className='h-[16px] w-[16px]'/>
                       </div>
                       <div className='w-full min-w-0 h-[36px] rounded-[12px] opacity-100 transition-transform duration-200 ease-in-out hover:scale-90'>
                           <p className='text-sm'>Andi Lane subscribed to you.</p>
                           <p className='text-xs text-black/40'>Today, 11:59 AM</p>
                       </div>
                 </div>

          </div>
            </div>
                   {/*activities*/}
                  <div className='relative w-[248px] h-[316px] flex flex-col gap-[4px] opacity-100'>
                  
                          {/* vertical strip */}
                          <div className="absolute left-[20px] top-[47px] w-[1px] h-[245px] bg-black/10 rounded-full"></div>
                  
                          {/* activities heading */}
                          <div className="w-[248px] h-[36px] rounded-[12px] flex items-center gap-[8px] pt-[8px] pr-[4px] pb-[8px] pl-[4px] opacity-100">
                            <div className="w-[240px] h-[20px] rounded-[12px]">
                              <h1>Activities</h1>
                            </div>
                          </div>
                  
                          {/* 1 */}
                          <div className="w-[248px] h-[52px] rounded-[12px] p-[8px] gap-[8px] opacity-100 flex hover:bg-blue-200 cursor-pointer">
                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                              <img src={r1} alt='' />
                            </div>
                            <div className="w-[200px] min-w-0 h-[36px] rounded-[12px] opacity-100 transition-transform duration-200 ease-in-out hover:scale-90">
                              <p className='text-sm break-words'>Changed the style.</p>
                              <p className='text-xs text-gray-500'>Just now</p>
                            </div>
                          </div>
                  
                          {/* 2 */}
                          <div className="w-[248px] h-[52px] rounded-[12px] p-[8px] gap-[8px] opacity-100 flex hover:bg-blue-200 cursor-pointer">
                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                              <img src={r2} alt='' />
                            </div>
                            <div className="w-full min-w-0 h-[36px] rounded-[12px] opacity-100 transition-transform duration-200 ease-in-out hover:scale-90">
                              <p className='text-sm break-words'>Released a new version.</p>
                              <p className='text-xs text-gray-500'>59 minutes ago</p>
                            </div>
                          </div>
                  
                          {/* 3 */}
                          <div className="w-[248px] h-[52px] rounded-[12px] p-[8px] gap-[8px] opacity-100 flex hover:bg-blue-200 cursor-pointer ">
                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                              <img src={r3} alt='' />
                            </div>
                            <div className="w-[200px] min-w-0 h-[36px] rounded-[12px] opacity-100 transition-transform duration-200 ease-in-out hover:scale-90">
                              <p className='text-sm break-words'>Submitted a bug.</p>
                              <p className='text-xs text-gray-500'>12 hours ago</p>
                            </div>
                          </div>
                  
                          {/* 4 */}
                          <div className="w-[248px] h-[52px] rounded-[12px] p-[8px] gap-[8px] opacity-100 flex hover:bg-blue-200 cursor-pointer">
                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                              <img src={f4} alt='' />
                            </div>
                            <div className="w-full min-w-0 h-[36px] rounded-[12px] opacity-100 transition-transform duration-200 ease-in-out hover:scale-90">
                              <p className='text-sm break-words'>Modified A data in Page X.</p>
                              <p className='text-xs text-gray-500'>Today, 11:59 AM</p>
                            </div>
                          </div>
                  
                          {/* 5 */}
                          <div className="w-[248px] h-[52px] rounded-[12px] p-[8px] gap-[8px] opacity-100 flex hover:bg-blue-200 cursor-pointer">
                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                              <img src={f5} alt='' />
                            </div>
                            <div className="w-full min-w-0 h-[36px] rounded-[12px] opacity-100 transition-transform duration-200 ease-in-out hover:scale-90">
                              <p className='text-sm break-words'>Deleted a page in Project X.</p>
                              <p className='text-xs text-gray-500'>Feb 2, 2026</p>
                            </div>
                          </div>
                        </div>
                          {/*contact main frame*/}
                              <div className='w-[248px] h-[300px] gap-[4px] opacity-100 mt-[16px]'>
                                <div className='w-[248px] h-[36px] rounded-[12px] gap-[8px] pt-[8px] pr-[4px] pb-[8px] pl-[4px]'>
                                  <div className='w-[240px] h-[20px] rounded-[12px]'>
                                    <h1>Contacts</h1>
                                  </div>
                                </div>
                                   {/*1*/}
                                   <div className='w-[248px] h-[40px] rounded-[8px] gap-[8px] p-[8px] flex cursor-pointer'>
                                            {/*icon*/}
                                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <img src={img1} alt='' />
                                              </div>
                                              {/*text*/}
                                                <div className='w-[84px] h-[20px] rounded-[12px] flex transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <p className='text-sm'>Natali Craig</p>
                                                </div>
                                   </div>
                                   {/*2*/}
                                   <div className='w-[248px] h-[40px] rounded-[8px] gap-[8px] p-[8px] flex cursor-pointer'>
                                            {/*icon*/}
                                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <img src={img2} alt='' />
                                              </div>
                                              {/*text*/}
                                                <div className='w-[84px] h-[20px] rounded-[12px] flex transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <p className='text-sm'>Drew Cano</p>
                                                </div>
                                   </div>
                                     {/*3*/}
                                   <div className='w-[248px] h-[40px] rounded-[8px] gap-[8px] p-[8px] flex cursor-pointer'>
                                            {/*icon*/}
                                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <img src={img4} alt='' />
                                              </div>
                                              {/*text*/}
                                                <div className='w-[84px] h-[20px] rounded-[12px] flex transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <p className='text-sm'>Andi Lane</p>
                                                </div>
                                   </div>
                                     {/*4*/}
                                   <div className='w-[248px] h-[40px] rounded-[8px] gap-[8px] p-[8px] flex cursor-pointer'>
                                            {/*icon*/}
                                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <img src={img5} alt='' />
                                              </div>
                                              {/*text*/}
                                                <div className='w-[93px] h-[20px] rounded-[12px] flex  transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <p className='text-sm'>Koray Okumus</p>
                                                </div>
                                   </div>
                                     {/*5*/}
                                   <div className='w-[248px] h-[40px] rounded-[8px] gap-[8px] p-[8px] flex cursor-pointer'>
                                            {/*icon*/}
                                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <img src={img3} alt='' />
                                              </div>
                                              {/*text*/}
                                                <div className='w-[89px] h-[20px] rounded-[12px] flex transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <p className='text-sm'>Kate Morrison</p>
                                                </div>
                                   </div>
                                     {/*6*/}
                                   <div className='w-[248px] h-[40px] rounded-[8px] gap-[8px] p-[8px] flex  cursor-pointer'>
                                            {/*icon*/}
                                            <div className='w-[24px] h-[24px] rounded-full overflow-hidden relative z-10 flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <img src={img6} alt='' />
                                              </div>
                                              {/*text*/}
                                                <div className='w-[84px] h-[20px] rounded-[12px] flex transition-transform duration-200 ease-in-out hover:scale-90'>
                                                  <p className='text-sm'>Melody Macy</p>
                                                </div>
                                   </div>
                              </div>

    </div>
  )
}

export default Notification