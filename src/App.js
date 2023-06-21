
function App() {
  return (
    <div className="w-screen h-screen bg-slate-800 py-4 px-3">
      <div className="max-w-xl h-full bg-slate-900 mx-auto  flex flex-col justify-between rounded-3xl py-20 px-10 ">
      <h2 className="font-sans text-5xl antialiased font-bold  text-sky-200  self-center">👋 Wavy</h2>
      <form className="flex justify-center flex-col mx-2 py-30 ">
      <label for="email" className=" text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2  peer-focus:text-blue-600 peer-focus:dark:text-blue-500    left-1">Email</label>
      <input type="text" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
      <label  for= "password" className=" text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2  left-1">Password</label>
      <input type="password" id="password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
      <button className="bg-teal-400 hover:bg-gray-100 text-gray-800 font-semibold  my-6 py-2 px-4 border border-gray-400 rounded shadow"> Login</button>
      </form>
      <div className="text-sky-100 font-sans self-center">Made with JS and 💙 by Tushar.</div>
  
        
      </div>
    </div>
  );
}

export default App;
