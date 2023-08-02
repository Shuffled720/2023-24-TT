
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
            <td class='lecture'>L: EE 309(Vijay)</td>
            <td class='lecture'>L: EE 301N(DOSA)</td>
            <td class='lecture'>L: EE 303</td>
            <td class='lecture'>L: EE 305</td>
          </tr>
          <tr>
            <td class='days-col'>Tuesday</td>
            <td class='lecture'>L: EE 307(Sumit)</td>
            <td></td>
            <td class='lecture'>L: EE 311(water-bottle)</td>
            <td class='lecture'>L: EE 305</td>
          </tr>
          <tr>
            <td class='days-col'>Wednesday</td>
            <td class='lecture'>L: EE 309(Vijay)</td>
            <td class='lecture'>L: EE 301N(DOSA)</td>
            <td class='lecture'>L: EE 303</td>
            <td></td>
          </tr>
          <tr>
            <td class='days-col'>Thursday</td>
            <td class='lecture'>L: EE 307(Sumit)</td>
            <td class="tut">T: EE 311(water-bottle)</td>
            <td class="tut">T: EE 303</td>
            <td class="tut">T: EE 305</td>
          </tr>
          <tr>
            <td class='days-col'>Friday</td>
            <td class="tut">T: EE 309(Vijay)</td>
            <td class="tut">T: EE 301N(DOSA)</td>
            <td class='lecture'>L: EE 311(water-bottle)</td>
            <td class="tut">T: EE 307(Sumit)</td>
          </tr>
        </tbody>
      </table>
      <div class='p-5'>
        <h1>Thursday:E1 Batch: P: EE 351N</h1>
        <h1>Friday:E2 Batch: P: EE 351N</h1>
      </div>
    </>
  )
}
