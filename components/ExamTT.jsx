import data from "@/helper/data.json";
// const data1 = data["ese"];
const ExamTT = () => {
    return (
        <>
            <h1 className=" text-2xl">ESE TT</h1>
            <h1 className=" text-2xl">10:00 to 1:00</h1>
            <table className="table-fixed w-80 text-center my-5">
                <thead>
                    <tr key="">
                        <th>Exam</th>
                        <th>Date</th>

                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data.ese).map((exam, i) => (
                        <>
                            <tr key={i}>
                                <td><p>{exam}</p></td>
                                <td><p>{data.ese[exam]}</p></td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table >
        </>
    )
}

export default ExamTT