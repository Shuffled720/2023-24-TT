"use client";
import { useEffect, useState } from "react";
import data from "@/helper/data.json";


const TodaySchedule = () => {
    const [today, setToday] = useState("");
    const [day, setDay] = useState("");
    useEffect(() => {
        setToday(new Date().toLocaleDateString());
        setDay(new Date().toLocaleDateString('en-us', { weekday: 'long' }));
    })


    var todayData = data.tt[day]



    return (
        <>
            <section id="todays">
                <div className="px-4">
                    <h3 className="text-left text-xl"  > Today : {today} - {day}</h3>
                    {todayData ?
                        <>
                            <br />
                            < ul >
                                <li key={todayData.id}><p className="text-lg">08:30-09:25----{todayData ? todayData[0].title : ""} {todayData[0].teacher}</p></li>
                                <li key={todayData.id}><p className="text-lg">09:30-10:25----{todayData ? todayData[1].title : ""} {todayData[1].teacher}</p></li>
                                <li key={todayData.id}><p className="text-lg">10:30-11:25----{todayData ? todayData[2].title : ""} {todayData[2].teacher}</p></li>
                                <li key={todayData.id}><p className="text-lg">11:30-12:25----{todayData ? todayData[3].title : ""} {todayData[3].teacher}</p></li>
                            </ul>
                            <br />
                        </>
                        :
                        <></>
                    }
                </div>
            </section >
        </>
    )
}

export default TodaySchedule