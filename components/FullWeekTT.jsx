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
                                    <tr key={i}>
                                        <td className='days-col'>{day}</td>
                                        {data.tt[day].map((lec, j) => (
                                            <>
                                                <td key={j} className={lec.type == "Lecture" ? "lecture" : "tut"} ><p className="text-ellipsis overflow-hidden"><span className='font-bold'>{lec.title}</span><span>{lec.teacher}</span></p></td>
                                            </>
                                        ))}
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                    <div className='px-4'>
                        <h1 className="text-lg">Tuesday: <span className='font-bold text-lg'>P: EE 352 (E1)/P: EE 356 (E2)</span></h1>
                        <h1 className="text-lg">Wednesday: <span className='font-bold text-lg'>P: EE 352 (E2)/P: EE 356 (E1)</span></h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FullWeekTT