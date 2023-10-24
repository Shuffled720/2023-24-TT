import Header from "@/components/Header";
import TodaySchedule from "@/components/TodaySchedule";
import FullWeekTT from "@/components/FullWeekTT";
import Menu from "@/components/Menu";
import Links from "@/components/Links";
import Footer from "@/components/Footer";
export default function Home() {


  return (
    <main>
      <div className="h-screen bg-red-50">
        <Header />
        <hr />
        <Links />
        <hr />
        <TodaySchedule />
        <FullWeekTT />
        <hr />
        <Menu />
        <Footer />
      </div >
    </main>
  )
}
