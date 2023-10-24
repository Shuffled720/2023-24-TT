import data from "@/helper/data.json"
const FullWeekTT = () => {
    return (
        <>
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
                                    <tr key={day.id}>
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
        </>
    )
}

export default FullWeekTT