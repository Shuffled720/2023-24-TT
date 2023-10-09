"use client";
import { useEffect, useState } from "react";
import Image from "next/image"
import data from "../helper/data"
export default function Home() {
  // var today = new Date().toLocaleDateString();
  // var day = new Date().toLocaleDateString('en-us', { weekday: 'long' });
  const [today, setToday] = useState("");
  const [day, setDay] = useState("");
  useEffect(() => {
    setToday(new Date().toLocaleDateString());
    setDay(new Date().toLocaleDateString('en-us', { weekday: 'long' }));
  })


  var todayData = data.tt[day]



  return (
    <div className="h-screen bg-red-50">
      <h1 className="text-center text-3xl py-5">Electrical Time Table</h1>
      <hr />
      <section id="todays">
        <div className="px-4">
          <h3 className="text-left text-xl"  > Today : {today} - {day}</h3>
          {todayData ?
            <>
              <br />
              < ul >
                <li><p className="text-lg">08:30-09:25----{todayData ? todayData[0].title : ""}</p></li>
                <li><p className="text-lg">09:30-10:25----{todayData ? todayData[1].title : ""}</p></li>
                <li><p className="text-lg">10:30-11:25----{todayData ? todayData[2].title : ""}</p></li>
                <li><p className="text-lg">11:30-12:25----{todayData ? todayData[3].title : ""}</p></li>
              </ul>
              <br />
            </>
            :
            <></>
          }
        </div>
      </section >
      <section id="full-view">
        <div>
          <table className="table-fixed w-full text-center ">
            <thead>
              <tr key="">
                <th>DAYS</th>
                <th>8:30-9:25</th>
                <th>9:30-10:25</th>
                <th>10:30-11:25</th>
                <th>11:30-12:25</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data.tt).map((day, i) => (
                <>
                  <tr key={i}>
                    <td className='days-col'>{day}</td>
                    {data.tt[day].map((lec, j) => (
                      <>
                        <td className={lec.type == "Lecture" ? "lecture" : "tut"} ><p className="text-ellipsis overflow-hidden"><span className='font-bold'>{lec.title}</span><span>{lec.teacher}</span></p></td>
                      </>
                    ))}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          <div className='px-4'>
            <h1>Thursday:E1 Batch: <span className='font-bold'>EEP: 351N</span></h1>
            <h1>Friday:E2 Batch: <span className='font-bold'>EEP: 351N</span></h1>
          </div>
        </div>
      </section>
      <hr />
      <section id="menu">
        <h1 className="text-center text-3xl py-2 ">Menu</h1>
        <Image alt="menu" className="menu-img" src="/menu.jpg" width={500} height={500} />
      </section>
    </div >
  )
}
