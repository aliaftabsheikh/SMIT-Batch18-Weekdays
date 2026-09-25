import React , {useRef} from 'react'

const App = () => {
  // const [count, setCount] = React.useState(0)
  // const countRef = useRef(0)

  // const [email, setEmail] = React.useState('')
  // const [password, setPassword] = React.useState('')

  const emailRef = useRef('')
  const passwordRef = useRef('')

  const formThemeRef = useRef('dark')

  function handleThemeChange(e) {
    if (e.target.value === 'dark') {
      formThemeRef.current.classList.remove('bg-gray-200', 'text-black')
      formThemeRef.current.classList.add('bg-gray-600', 'text-white')
    } else {
      formThemeRef.current.classList.remove('bg-gray-600', 'text-white')
      formThemeRef.current.classList.add('bg-gray-200', 'text-black')
    } 
  }


  function handleSubmit(e) {
    e.preventDefault()


    console.log('Email:', emailRef.current.value)
    console.log('Password:', passwordRef.current.value)
  }

  // React.useEffect(() => {
  //   // console.log('Count changed:' + count)
  //   console.log('Email:', emailRef.current.value)
  //   console.log('Password:', passwordRef.current.value)
  // }, [e])

  // console.log('Render', countRef.current)

  return (
    // <div className="bg-gray-600 text-white p-4">
    //   <h1 className="text-2xl font-bold">Hello Vite + React!</h1>
    //   {/* <p className="mt-2">Count: {count}</p> */}
    //   <p className="mt-2">Count (ref): {countRef.current}</p>
    //   <button
    //     className="mt-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
    //     onClick={() => {
    //       // setCount(count + 1)
    //       countRef.current = countRef.current + 1
    //       // setCount(count + 1)
    //     }}
    //   >
    //     Increment
    //   </button>
    // </div>

    <div ref={formThemeRef} className="bg-gray-600 text-white p-4 w-1/2 mx-auto mt-10 rounded">
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-gray-700 text-white placeholder:text-gray-400 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
           ref={emailRef}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-700 text-white placeholder:text-gray-400 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ref={passwordRef}
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
          </button>


          <button
          type="button"
          className="w-full p-2 bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mt-2"
          onClick={handleThemeChange}
        >
          Toggle Theme
        </button>
      </form>
    </div>




  )
}

export default App