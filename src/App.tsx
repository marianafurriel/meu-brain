import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import StatsCards from './components/StatsCards/StatsCards';

function App() {
  return (
    <div className="flex flex-row h-screen w-screen bg-[#111317]">
    <Dashboard />
    <Sidebar />
    <section className="flex w-full gap-4 p-4">
      <StatsCards />
      <StatsCards />
      <StatsCards />
      <StatsCards />
    </section>
    </div>
  );
}

export default App;
