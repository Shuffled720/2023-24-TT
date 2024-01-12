import Header from "@/components/Header";
import TodaySchedule from "@/components/TodaySchedule";
import FullWeekTT from "@/components/FullWeekTT";
import Menu from "@/components/Menu";
import Links from "@/components/Links";
import Footer from "@/components/Footer";
import ExamTT from "@/components/ExamTT";
export default function Home() {


  return (
    <main>
      <div className=" bg-red-50">
        <Header />
        <hr />
        {/* <Links /> */}
        <hr />
        {/* <TodaySchedule /> */}
        {/* <ExamTT /> */}
        <FullWeekTT />
        <hr />
        <Menu />
        <Footer />
      </div >
    </main>
  )
}
