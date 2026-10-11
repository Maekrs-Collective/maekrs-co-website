
function Navigation() {
  
  return (
    <div className="absolute top-0 w-full flex justify-end items-center p-8 lg:p-12 xl:p-16">
      
      <div className="flex justify-between items-center gap-4 *:hover:text-white dark:*:hover:text-primary-light lg:text-xl font-medium">
        <a href="#">About Us</a>
        <a href="#">Our Work</a>
        <a href="mailto:maekrs.co@gmail.com" target="_blank">Contact</a>
      </div>
    </div>
  )
}

export default Navigation