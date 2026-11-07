import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import StatsCards from './components/StatsCards/StatsCards';
import Readings from './components/Readings/Readings';

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
    <section><Readings /></section>
    </main>
    </div>
  );
}

export default App;
