import './App.css';

function App() {
  return (
    <div className='container mx-auto bg-yellow-100 min-h-screen'>
      <h1 className='text-center text-5xl font-bold pt-4'>Hello React How are you?</h1>
      <div className='text-center pt-4'>
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
        <button className="btn btn-outline btn-primary">Primary</button>
      </div>
    </div>
  );
}

export default App;
