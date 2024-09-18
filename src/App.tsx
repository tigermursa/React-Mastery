import UseStateHook from "./Hooks/useState/UseStateHook";


const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h3 className="text-4xl font-bold hidden">Time to Master the <span className="text-blue-800">React</span> before 2024 End</h3>
      <UseStateHook />
    </div>
  );
};

export default App;