import Navigation from "./components/Navigation"

function App() {
  return (
    <div className="font-maekrs h-dvh w-dvw max-md:pt-20 bg-primary-light text-black dark:bg-primary-dark dark:text-white">
      <Navigation />
      <div className="p-8 lg:p-12 xl:p-16 w-full h-full flex flex-col justify-between">
        <p className="text-4xl lg:text-5xl xl:text-7xl text-wrap w-min">Coming Soon</p>
        <h1 className="text-5xl lg:text-6xl xl:text-8xl text-white">
          Maekrs<br/>Collective
        </h1>
      </div>
    </div>
  )
}

export default App
