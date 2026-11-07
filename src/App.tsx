import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import StatsCards from './components/StatsCards/StatsCards';
import Readings from './components/Readings/Readings';
import TaskCard from './components/TaskCard/TaskCard';

function App() {
  return (
    <div className="flex flex-row h-screen w-screen bg-[#111317]">
      <Dashboard />
      <Sidebar />
      <main className="flex flex-col w-full h-full p-4 gap-4">
        <Navbar />
        <section className="flex w-full gap-4">
          <StatsCards />
          <StatsCards />
          <StatsCards />
          <StatsCards />
        </section>
        <section className="grid col-span-2">
          <div className='text-white flex justify-between'>
            <div className='flex gap-4 items-center'>
              <h2>Leituras em andamento</h2> <span className='bg-[#1E2024] rounded-3xl text-[#FFB77D] px-4 py-2'>6 ativas</span> 
            </div>
            <span className='text-[#DBC2B0]'>Ver biblioteca completa <img src="../../src/assets/images/arrow-right.svg" alt="" className='inline'/></span>
          </div>
          <Readings></Readings>

          <TaskCard></TaskCard>
         
          </section>
      </main>
    </div>
  );
}

export default App;
