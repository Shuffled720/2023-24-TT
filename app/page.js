
import Image from "next/image"
import data from "../helper/data"
export default function Home() {

  return (
    // <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div className="h-screen bg-red-50">
      <h1 className="text-center text-3xl py-5">Electrical Time Table</h1>
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
        <div className='p-5'>
          <h1>Thursday:E1 Batch: <span className='font-bold'>EEP: 351N</span></h1>
          <h1>Friday:E2 Batch: <span className='font-bold'>EEP: 351N</span></h1>
        </div>
      </div>
      <h1 className="text-center ">Menu</h1>
      <Image className="menu-img" src="/menu.png" width={500} height={500} />
    </div >
  )
}
