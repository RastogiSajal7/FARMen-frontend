import React from 'react'

const UIFirst = () => {
  return (
    <div>
      <motion.div
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-md mx-auto p-8 rounded-lg shadow-2xl mt-10 absolute inset-0"
        >
          <h2 className="text-3xl font-mono mb-8 text-center text-white">
            Log In
          </h2>
          <form onSubmit={login}>
            <div className=" text-center">
              <input
                className="w-full bg-transparent shadow-orange-950 shadow-2xl hover:outline-none focus:border-orange-950 rounded-md px-3 py-2 placeholder-orange-950 mb-6"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={inputChange}
              />

              <input
                className="w-full bg-transparent shadow-orange-950 shadow-2xl hover:outline-none focus:border-orange-950 rounded-md px-3 py-2 placeholder-orange-950 "
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={inputChange}
              />
              <button className="bg-red-500 text-white rounded-sm p-1 mt-4 w-full">
                Login
              </button>
            </div>
          </form>
        </motion.div>
    </div>
  )
}

export default UIFirst
