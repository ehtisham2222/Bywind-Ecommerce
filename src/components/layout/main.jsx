import React, { useState } from 'react'
import below from '../../assets/images/below.svg';
import up from '../../assets/images/up.svg';
import down from '../../assets/images/down.svg';
import f1 from '../../assets/images/f1.svg';
import f2 from '../../assets/images/f2.svg';
import f3 from '../../assets/images/f3.svg';
import x1 from '../../assets/images/x1.svg';
import t2 from '../../assets/images/t2.svg';
import x3 from '../../assets/images/x3.svg';
import m1 from '../../assets/images/m1.svg';
import m2 from '../../assets/images/m2.svg';
import m3 from '../../assets/images/m3.svg';
import b1 from '../../assets/images/b1.svg';
import b2 from '../../assets/images/b2.svg';
import b3 from '../../assets/images/b3.svg';
import c1 from '../../assets/images/c1.svg';
import c2 from '../../assets/images/c2.svg';
import c3 from '../../assets/images/c3.svg';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
const Main = () => {
const cards = [
    { title: "Views", value: 7265, hoverValue: 7450, percent: "+11.01%", bg: "bg-[#EDEEFC]",arrow: up},
    { title: "Visits", value: 3671, hoverValue: 3890, percent: "-0.03%", bg: "bg-[#E6F1FD]",arrow: down },
    { title: "New Users", value: 156, hoverValue: 200, percent: "+15.03%", bg: "bg-[#EDEEFC]",arrow: up},
    { title: "Active Users", value: 2318, hoverValue: 2500, percent: "+6.08%", bg: "bg-[#E6F1FD]",arrow: up},
  ];
  return (
    <div className='h-[1000px]'>
      {/* Header */}
      <div className='flex justify-between items-center px-[20px] pt-[15px]'>
        <div className="py-[4px] px-[8px]">
          <p>Overview</p>
        </div>
        <div className="flex items-center gap-[6px] mr-[10px]">
          <p>Today</p>
          <img src={below} alt='' className='h-[12px] w-[12px]' />
        </div>
      </div>
      {/* Cards */}
      <div className="flex gap-6 px-[20px] mt-8">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
        {/* graph and  traffic section */}
         <div className='flex'>
<div className="w-[625px] h-[330px] min-w-[625px] rounded-[20px] opacity-100 gap-[16px] p-[24px] bg-[#F8F9FC] mt-[28px] ml-[19px] ">

  {/* Chart Header */}
  <div className="flex justify-between items-center mb-4">
    <div className="flex gap-6 text-sm">
      <p className="font-semibold text-black">Total Users</p>
      <p className="text-gray-400 hover:text-black cursor-pointer">Total Projects</p>
      <p className="text-gray-400 hover:text-black cursor-pointer">Operating Status</p>
    </div>

    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-black"></span>
        <p>This year</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
        <p>Last year</p>
      </div>
    </div>
  </div>
  {/* Chart */}
  <div className="w-full h-[240px]">
    <ResponsiveContainer width="100%" height="100%">
  <LineChart
    data={[
      { name: "Jan", thisYear: 11598, lastYear: 8000 },
      { name: "Feb", thisYear: 9000, lastYear: 14000 },
      { name: "Mar", thisYear: 15000, lastYear: 20000 },
      { name: "Apr", thisYear: 24000, lastYear: 7000 },
      { name: "May", thisYear: 28000, lastYear: 15000 },
      { name: "Jun", thisYear: 18000, lastYear: 23000 },
      { name: "Jul", thisYear: 23000, lastYear: 30000 },
    ]}
  >
    {/* REMOVE GRID */}
    <CartesianGrid vertical={false} stroke="transparent" />

    {/* Axis styling */}
    <XAxis
      dataKey="name"
      axisLine={false}
      tickLine={false}
      tick={{ fill: "#9CA3AF", fontSize: 12 }}
    />

    <YAxis
      axisLine={false}
      tickLine={false}
      tick={{ fill: "#9CA3AF", fontSize: 12 }}
    />

    {/* Custom Tooltip */}
    <Tooltip
      contentStyle={{
        background: "transparent",
        border: "none",
        boxShadow: "none"
      }}
      cursor={{ stroke: "#999", strokeWidth: 1 }}
      formatter={(value) => [`${value.toLocaleString()}`, ""]}
    />

    {/* This Year */}
    <Line
      type="monotone"
      dataKey="thisYear"
      stroke="#000000"
      strokeWidth={2}
      dot={false}
      activeDot={{ r: 6, stroke: "#000", strokeWidth: 2, fill: "#fff" }}
      animationDuration={1000}
    />

    {/* Last Year */}
    <Line
      type="monotone"
      dataKey="lastYear"
      stroke="#3B82F6"
      strokeWidth={2}
      strokeDasharray="4 4"
      dot={false}
      animationDuration={1000}
          />

                    </LineChart>
                </ResponsiveContainer>

                   </div>

           </div>
             {/*traffic by website*/}
<div className="w-[202px] h-[330px] min-w-[200px] max-w-[272px] rounded-[20px] p-6 gap-4 opacity-100 ml-[25px] mt-[28px] mr-[2px] bg-[#F9F9FA]">
              {/*text*/}
               <div className='w-[145px h-[20px] rounded-xl transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer'>
                     <p>Traffic by Website</p>
               </div>
                 {/*content*/}
                 <div className='w-[154px] h-[246px] flex gap-4'>
                    {/*left content*/}
                    <div class="w-[57px] h-[246px] rounded-[12px] flex flex-col justify-between opacity-100 pt-2 pb-2 ">
                           <p className='transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer'>Google</p>
                           <p className='transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer'>YouTube</p>
                           <p className='transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer'>Instagram</p>
                           <p className='transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer'>Pinterest</p>
                           <p className='transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer'>Facebook</p>
                           <p className='transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer'>Twitter</p>
                       </div>
                       {/* right content */}
                   <div className="w-[80px] h-[246px]   gap-6">
                                              {/*1*/}
                                             <div class="w-[80px] h-[34.333px] opacity-100 gap-[2px] pt-4 pb-4 flex transition-transform duration-200 ease-in-out hover:scale-90">
                                                        
                                                         <img src={f1} alt='/' className='h-4 w-4'/>
                                                         <img src={f2} alt='/'className='h-4 w-4'/>
                                                         <img src={f3} alt='/' className='h-4 w-4'/>
                                                      </div>
                                                       {/*2*/}
                                             <div class="w-[80px] h-[34.333px] opacity-100 gap-[2px] pt-4 pb-4 flex transition-transform duration-200 ease-in-out hover:scale-90">
                                                        
                                                         <img src={x1} alt='/' className='h-[18px] w-[18px] mt-[4px]'/>
                                                         <img src={t2} alt='/'className='h-[18px] w-[18px] mt-[4px]'/>
                                                         <img src={x3} alt='/' className='h-[18px] w-[18px] mt-[4px]'/>
                                                      </div>
                                                         {/*3*/}
                                             <div class="w-[80px] h-[34.333px] opacity-100 gap-[2px] pt-4 pb-4 flex  ml-2 transition-transform duration-200 ease-in-out hover:scale-90">
                                                        
                                                         <img src={m1} alt='/' className='h-4 w-4 mt-[12px] '/>
                                                         <img src={m2} alt='/'className='h-4 w-4 mt-[12px] ' />
                                                         <img src={m3} alt='/' className='h-4 w-4 mt-[12px] '/>
                                                      </div>
                                                        {/*4*/}
                                             <div class="w-[80px] h-[34.333px] opacity-100 gap-[2px] pt-4 pb-4 flex transition-transform duration-200 ease-in-out hover:scale-90">
                                                        
                                                         <img src={b1} alt='/' className='h-[19px] w-[19px] mt-[18px]'/>
                                                         <img src={b2} alt='/'className='h-[19px] w-[19px] mt-[18px]'/>
                                                        <img src={b3} alt='/' className='h-[19px] w-[19px] mt-[18px]'/>
                                                      </div>
                                                       {/*5*/}
                                             <div class="w-[80px] h-[34.333px] opacity-100 gap-[2px] pt-4 pb-4 flex transition-transform duration-200 ease-in-out hover:scale-90">
                                                        
                                                         <img src={f1} alt='/' className='h-[12px] w-[12px] mt-[29px] ml-[5px]' />
                                                         <img src={f2} alt='/'className='h-[12px] w-[12px] mt-[29px]'/>
                                                         <img src={f3} alt='/' className='h-[12px] w-[12px] mt-[29px]'/>
                                                      </div>
                                                      {/*6*/}
                                             <div class="w-[80px] h-[34.333px] opacity-100 gap-[2px] pt-4 pb-4 flex mt-[32px] transition-transform duration-200 ease-in-out hover:scale-90">
                                                        
                                                         <img src={c1} alt='/' className='h-4 w-4'/>
                                                         <img src={c2} alt='/'className='h-4 w-4'/>
                                                         <img src={c3} alt='/' className='h-4 w-4'/>
                                                      </div>
                                                      
                                                      
                                                      </div>



                 </div>
    </div>

</div>
                     {/*trafic by device and location section*/}
                     <div className='flex'>
                                    {/* left side traffic by device */}
<div className='w-[432px] h-[280px] min-w-[400px] rounded-[20px] p-[24px] bg-[#F9F9FA] mt-[28px] ml-[22px]'>

         <h2 className="text-[14px] font-semibold mb-4">Traffic by Device</h2>

            <div className="flex">

       {/* Y Axis */}
          <div className="flex flex-col justify-between h-[180px] text-[12px] text-gray-400 mr-4">
      <span>30K</span>
      <span>20K</span>
      <span>10K</span>
      <span>0</span>
    </div>

    {/* Bars */}
    <div className="flex items-end justify-between h-[180px] w-full">

      {/* Linux */}
      <div className="flex flex-col items-center group">
        <div className="w-[40px] bg-[#8FA8D6] rounded-[12px] transition-all duration-300 h-[100px] group-hover:h-[120px]"></div>
        <span className="mt-2 text-[12px] text-gray-500">Linux</span>
      </div>

      {/* Mac (lower than Windows now) */}
      <div className="flex flex-col items-center group">
        <div className="w-[40px] bg-[#5ED0C4] rounded-[12px] transition-all duration-300 h-[150px] group-hover:h-[170px]"></div>
        <span className="mt-2 text-[12px] text-gray-500">Mac</span>
      </div>

      {/* iOS */}
      <div className="flex flex-col items-center group">
        <div className="w-[40px] bg-black rounded-[12px] transition-all duration-300 h-[120px] group-hover:h-[140px]"></div>
        <span className="mt-2 text-[12px] text-gray-500">iOS</span>
      </div>

      {/* Windows (highest) */}
      <div className="flex flex-col items-center group">
        <div className="w-[40px] bg-[#7FB3E6] rounded-[12px] transition-all duration-300 h-[170px] group-hover:h-[190px]"></div>
        <span className="mt-2 text-[12px] text-gray-500">Windows</span>
      </div>

      {/* Android */}
      <div className="flex flex-col items-center group">
        <div className="w-[40px] bg-[#B39DDB] rounded-[12px] transition-all duration-300 h-[80px] group-hover:h-[100px]"></div>
        <span className="mt-2 text-[12px] text-gray-500">Android</span>
      </div>

      {/* Other */}
      <div className="flex flex-col items-center group">
        <div className="w-[40px] bg-[#66C17A] rounded-[12px] transition-all duration-300 h-[140px] group-hover:h-[160px]"></div>
        <span className="mt-2 text-[12px] text-gray-500">Other</span>
      </div>

    </div>
  </div>
</div>


                            {/*right  side traffic by location*/}
{/* right side traffic by location */}
<div className='w-[432px] h-[280px] min-w-[400px] rounded-[20px] p-[24px] bg-[#F9F9FA] mt-[28px] ml-[28px] mr-[19px]'>

  <h3 className="text-[16px] font-semibold mb-4">Traffic by Location</h3>

  <div className="flex items-center gap-6">

    {/* DONUT */}
    <svg viewBox="0 0 42 42" className="w-[150px] h-[150px] mt-[10px]">

      {/* United States */}
      <circle
        cx="21"
        cy="21"
        r="15.915"
        fill="transparent"
        stroke="#111"
        strokeWidth="6"
        strokeDasharray="52.1 47.9"
        strokeDashoffset="0"
        className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
      />

      {/* Canada */}
      <circle
        cx="21"
        cy="21"
        r="15.915"
        fill="transparent"
        stroke="#7BAAF7"
        strokeWidth="6"
        strokeDasharray="22.8 77.2"
        strokeDashoffset="-52.1"
        className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
      />

      {/* Mexico */}
      <circle
        cx="21"
        cy="21"
        r="15.915"
        fill="transparent"
        stroke="#79D2A6"
        strokeWidth="6"
        strokeDasharray="13.9 86.1"
        strokeDashoffset="-74.9"
        className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
      />

      {/* Other */}
      <circle
        cx="21"
        cy="21"
        r="15.915"
        fill="transparent"
        stroke="#C9D4E5"
        strokeWidth="6"
        strokeDasharray="11.2 88.8"
        strokeDashoffset="-88.8"
        className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
      />
    </svg>

   {/* LEGEND */}
<div className="flex flex-col gap-2 text-[14px] w-full">

  {/* United States */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-blue-100 cursor-pointer transition">
      <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
      United States
    </div>
    <span>52.1%</span>
  </div>

  {/* Canada */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-blue-100 cursor-pointer transition">
      <span className="w-2.5 h-2.5 rounded-full bg-[#7BAAF7]"></span>
      Canada
    </div>
    <span>22.8%</span>
  </div>

  {/* Mexico */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-blue-100 cursor-pointer transition">
      <span className="w-2.5 h-2.5 rounded-full bg-[#79D2A6]"></span>
      Mexico
    </div>
    <span>13.9%</span>
  </div>

  {/* Other */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-blue-100 cursor-pointer transition">
      <span className="w-2.5 h-2.5 rounded-full bg-[#C9D4E5]"></span>
      Other
    </div>
    <span>11.2%</span>
  </div>

</div>

  </div>
</div>








                            </div>
                     

    </div>
  )
}
const Card = ({ card }) => {
  const [value, setValue] = useState(card.value);

  return (
    <div
      onMouseEnter={() => setValue(card.hoverValue)}
      onMouseLeave={() => setValue(card.value)}
      className={`w-[230px] h-[110px] p-5 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${card.bg}`}
    >
      <p className="text-gray-600 text-sm">{card.title}</p>

      <div className="flex items-center justify-between mt-3">
        <h2 className="text-2xl font-semibold">
          {value.toLocaleString()}
        </h2>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">
            {card.percent}
          </span>

          {/* Arrow Box */}
          <div className="w-6 h-6   flex items-center justify-center ">
            <img src={card.arrow} alt="arrow" className="w-3 h-3" />
          </div>
        </div>

      </div>
    </div>
  ); 
};
export default Main;
