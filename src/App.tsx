import Navigation from "./components/Navigation"

function App() {
  return (
    <div className="font-maekrs h-dvh w-dvw relative pt-20 bg-primary-light text-black dark:bg-primary-dark dark:text-white">
      <Navigation />
      <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-white absolute bottom-0 p-8 lg:p-12 xl:p-16">
        Maekrs<br/>Collective
      </h1>
    </div>
  )
}

export default App
