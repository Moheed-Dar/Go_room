import React from 'react'

const Signin = () => {
  return (
    <>
       <div id="loginpage" className='flex  items-center justify-center w-screen h-screen '  >
                <form className='shadow-2xl bg-gray backdrop-blur-md ring-1 bg-white/40  ring-white/100 flex rounded-4xl  flex-col gap-5 p-8'  >
                    <div>
                        <h1 className='text-center font-bold text-xl py-3 ' >Go_room</h1>
                        <p className='text-sm text-center' > <span className='font-bold ' ><h1 className='pb-2' >Sign up</h1></span> Rooms, reservations, and more all in one place</p>
                    </div>
                    <div>
                        <label htmlFor="input1" className=' cursor-pointer font-medium pe-3  ' >Username</label>
                        <input id="input1"  name="username"  type="text" className='focus-visible:ring-transparent border-2 rounded-sm border-black pe-3  my-2 px-2 h-7' />
                    </div>
                    <div>
                        <label htmlFor="input2" className='cursor-pointer font-medium pe-3' >Email</label>
                        <input id="input2" name="email"   type="email" className='focus-visible:ring-transparent rounded-sm border-2 border-black my-2  h-7' />
                    </div>
                    <div>
                        <label htmlFor="input3" className='cursor-pointer font-medium pe-3' >Password</label>
                        <input id="input3"  name="password"  type="password" className='focus-visible:ring-transparent rounded-sm border-2 border-black my-2  h-7' />
                    </div>
                    <button className=' bg-blue-300  p-2 font-semibold cursor-pointer hover:bg-blue-400 rounded-sm ' >Submit</button>
                    <span className='text-center' >Already have an account? <a href='/login'  className='text-blue-600 hover:text-blue-700' >Login</a></span>
                </form>
            </div>
    </>
  )
}

export default Signin