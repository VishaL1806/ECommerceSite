
import { Outlet } from 'react-router-dom'
import authImg from '../assets/auth-image.png'

const Authentication = () => {
  return (
    <section className='auth-layout flex h-full pt-14'>
        <div className='flex-1'>
          <img src={authImg} alt="" width={800} />
        </div>
        <div className='flex-1 flex justify-center items-center px-32'>
         <Outlet />
        </div>
    </section>
  )
}

export default Authentication