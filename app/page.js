
export default function Home() {
  // const tt = {
  //   'Monday': ["L:EE 309", "L:EE 301N", "L:EE 303", "L:EE 305"],
  //   'Tuesday': ["L:EE 307", "", "L:EE 311", "L:EE 305"],
  //   'Wednesday': ["L:EE 309", "L:EE 301N", "L:EE 303"],
  //   'Thursday': ["L:EE 307", "T:EE 311", "T:EE 303", "T:EE 305"],
  //   'Friday': ["T:EE 309", "T:EE 301N", "L:EE 311", "T:EE 307"]
  // }
  const tt = {
    "Monday": [
      {
        "title": "L:EE 309",
        "type": "Lecture",
        "teacher": "(Vijay)"
      },
      {
        "title": "L:EE 301N",
        "type": "Lecture",
        "teacher": "(DOSA)"
      },
      {
        "title": "L:EE 303",
        "type": "Lecture",
        "teacher": ""
      },
      {
        "title": "L:EE 305",
        "type": "Lecture",
        "teacher": ""
      }
    ],
    "Tuesday": [
      {
        "title": "",
        "type": "",
        "teacher": ""
      },
      {
        "title": "L:EE 307",
        "type": "Lecture",
        "teacher": "(Sumit)"
      },
      {
        "title": "L:EE 311",
        "type": "Lecture",
        "teacher": "(water-bottle)"
      },
      {
        "title": "L:EE 305",
        "type": "Lecture",
        "teacher": ""
      }
    ],
    "Wednesday":
      [
        {
          "title": "L:EE 309",
          "type": "Lecture",
          "teacher": "(Vijay)"

        },
        {
          "title": "L:EE 301N",
          "type": "Lecture",
          "teacher": "(DOSA)"

        },
        {
          "title": "L:EE 303",
          "type": "Lecture",
          "teacher": ""
        },
        {
          "title": "",
          "type": "",
          "teacher": ""
        }
      ],
    "Thursday": [
      {
        "title": "L:EE 307",
        "type": "Lecture",
        "teacher": "(Sumit)"
      },
      {
        "title": "T:EE 311",
        "type": "Tutorial",
        "teacher": "(water-bottle)"
      },
      {
        "title": "T:EE 303",
        "type": "Tutorial",
        "teacher": ""
      },
      {
        "title": "T:EE 305",
        "type": "Tutorial",
        "teacher": ""
      }
    ],
    "Friday": [
      {
        "title": "(12:30)T:EE 309",
        "type": "Tutorial",
        "teacher": "(Vijay)"
      },
      {
        "title": "T:EE 301N",
        "type": "Tutorial",
        "teacher": "(DOSA)"
      },
      {
        "title": "L:EE 311",
        "type": "Lecture",
        "teacher": "(water-bottle)"
      },
      {
        "title": "T:EE 307",
        "type": "Tutorial",
        "teacher": "(Sumit)"
      }
    ]
  }
  const msett = [
    {
      "name": "EE 307",
      "date": "Saturday, 16-09-2022"
    },
    {
      "name": "EE 301N",
      "date": "Monday, 18-09-2022"
    },
    {
      "name": "EE 311",
      "date": "Wednessday, 20-09-2022"
    },
    {
      "name": "EE 305 + CS 307",
      "date": "Thursday, 21-09-2022"
    },
    {
      "name": "EE 309",
      "date": "Monday, 25-09-2022"
    },
    {
      "name": "EE 303",
      "date": "Tuesday, 26-09-2022"
    },

  ]
  return (
    <>
      {/* <h1>hdfusih</h1> */}
      {/* {Object.keys(tt).map((day, i) => (
        <>
          <p>{day}</p>
        </>
      ))} */}
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
          {Object.keys(tt).map((day, i) => (
            <>
              <tr>
                <td class='days-col'>{day}</td>
                {tt[day].map((lec, i) => (
                  <>
                    <td class={lec.type == "Lecture" ? "lecture" : "tut"} ><span class='font-bold'>{lec.title}</span><span>{lec.teacher}</span></td>
                  </>
                ))}
              </tr>
            </>
          ))}

        </tbody>
      </table>

      <div class='p-5'>
        <h1>Thursday:E1 Batch: <span class='font-bold'>EEP: 351N</span></h1>
        <h1>Friday:E2 Batch: <span class='font-bold'>EEP: 351N</span></h1>
      </div>
      <br />
      <h1>Exam Time table MSE (10:00 to 12:00)</h1>
      <br />
      <table class="table-fixed w-96 text-center ">
        <thead>
          <tr>
            <th>Day & Date</th>
            <th>Course</th>

          </tr>
        </thead>

        <tbody>
          {msett.map((exam, i) => (
            <>
              <tr class={i % 2 ? "tut" : "lecture"}>
                <td>{exam.date}</td>
                <td>{exam.name}</td>
              </tr>

            </>
          ))}

        </tbody>
      </table>


      {/* <table class="table-fixed w-full text-center ">
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
            <td class='lecture'><span class='font-bold'>L:EE 309</span>((Vijay))</td>
            <td class='lecture'><span class='font-bold'>L:EE 301N</span>((DOSA))</td>
            <td class='lecture'><span class='font-bold'>L:EE 303</span></td>
            <td class='lecture'><span class='font-bold'>L:EE 305</span></td>
          </tr>
          <tr>
            <td class='days-col'>Tuesday</td>
            <td class='lecture'><span class='font-bold'>L:EE 307</span>((Sumit))</td>
            <td></td>
            <td class='lecture'><span class='font-bold'>L:EE 311</span>((water-bottle))</td>
            <td class='lecture'><span class='font-bold'>L:EE 305</span></td>
          </tr>
          <tr>
            <td class='days-col'>Wednesday</td>
            <td class='lecture'><span class='font-bold'>L:EE 309</span>((Vijay))</td>
            <td class='lecture'><span class='font-bold'>L:EE 301N</span>((DOSA))</td>
            <td class='lecture'><span class='font-bold'>L:EE 303</span></td>
            <td></td>
          </tr>
          <tr>
            <td class='days-col'>Thursday</td>
            <td class='lecture'><span class='font-bold'>L:EE 307</span>((Sumit))</td>
            <td class="tut"><span class='font-bold'>T:EE 311</span>((water-bottle))</td>
            <td class="tut"><span class='font-bold'>T:EE 303</span></td>
            <td class="tut"><span class='font-bold'>T:EE 305</span></td>
          </tr>
          <tr>
            <td class='days-col'>Friday</td>
            <td class="tut"><span class='font-bold'>T:EE 309<span class='exception'>(12:30)</span></span>((Vijay))</td>
            <td class="tut"><span class='font-bold'>T:EE 301N</span>((DOSA))</td>
            <td class='lecture'><span class='font-bold'>L:EE 311</span>((water-bottle))</td>
            <td class="tut"><span class='font-bold'>T:EE 307</span>((Sumit))</td>
          </tr>
        </tbody>
      </table> */}

    </>
  )
}
