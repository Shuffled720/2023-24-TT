
export default function Home() {
  return (
    <>
      {/* <h1>hdfusih</h1> */}
      <table class="table-fixed w-full text-center ">
        <thead>
          <tr>
            <th>DAYS</th>
            <th>8:30-9:25</th>
            <th>9:30-10:25</th>
            <th>10:30-11:25</th>
            <th>11:30-12:25</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='days-col'>Monday</td>
            <td class='lecture'><span class='font-bold'>L:EE 309</span>(Vijay)</td>
            <td class='lecture'><span class='font-bold'>L:EE 301N</span>(DOSA)</td>
            <td class='lecture'><span class='font-bold'>L:EE 303</span></td>
            <td class='lecture'><span class='font-bold'>L:EE 305</span></td>
          </tr>
          <tr>
            <td class='days-col'>Tuesday</td>
            <td class='lecture'><span class='font-bold'>L:EE 307</span>(Sumit)</td>
            <td></td>
            <td class='lecture'><span class='font-bold'>L:EE 311</span>(water-bottle)</td>
            <td class='lecture'><span class='font-bold'>L:EE 305</span></td>
          </tr>
          <tr>
            <td class='days-col'>Wednesday</td>
            <td class='lecture'><span class='font-bold'>L:EE 309</span>(Vijay)</td>
            <td class='lecture'><span class='font-bold'>L:EE 301N</span>(DOSA)</td>
            <td class='lecture'><span class='font-bold'>L:EE 303</span></td>
            <td></td>
          </tr>
          <tr>
            <td class='days-col'>Thursday</td>
            <td class='lecture'><span class='font-bold'>L:EE 307</span>(Sumit)</td>
            <td class="tut"><span class='font-bold'>T:EE 311</span>(water-bottle)</td>
            <td class="tut"><span class='font-bold'>T:EE 303</span></td>
            <td class="tut"><span class='font-bold'>T:EE 305</span></td>
          </tr>
          <tr>
            <td class='days-col'>Friday</td>
            <td class="tut"><span class='font-bold'>T:EE 309<span class='exception'>(12:30)</span></span>(Vijay)</td>
            <td class="tut"><span class='font-bold'>T:EE 301N</span>(DOSA)</td>
            <td class='lecture'><span class='font-bold'>L:EE 311</span>(water-bottle)</td>
            <td class="tut"><span class='font-bold'>T:EE 307</span>(Sumit)</td>
          </tr>
        </tbody>
      </table>
      <div class='p-5'>
        <h1>Thursday:E1 Batch: <span class='font-bold'>EEP: 351N</span></h1>
        <h1>Friday:E2 Batch: <span class='font-bold'>EEP: 351N</span></h1>
      </div>
    </>
  )
}
