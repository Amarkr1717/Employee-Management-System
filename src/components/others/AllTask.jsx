import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

 const [userData , setUserData] =  useContext(AuthContext)
 

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-90 overflow-auto'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 bg-red-600 '>Employee Name</h2>
        <h2 className='w-1/5 bg-red-600 '>New Task</h2>
        <h2 className='w-1/5 bg-red-600 '>Active Task</h2>
        <h2 className='w-1/5 bg-red-600 '>Completed</h2>
        <h2 className='w-1/5 bg-red-600 '>Failed</h2>
      </div>
       
       <div className='h-[70%] overflow-auto'>
      {userData.map(function(elem ,idx){
       // eslint-disable-next-line react/jsx-key
       return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between'>
       <h2 className='w-1/5 text-red-600 '>{elem.firstname}</h2>
       <h3 className='w-1/5 text-blue-600 '>{elem.taskNumber.newTask}</h3>
       <h5 className='w-1/5 text-green-600 '>{elem.taskNumber.active}</h5>
       <h5 className='w-1/5 text-yellow-600 '>{elem.taskNumber.completed}</h5>
       <h5 className='w-1/5 text-red-600 '>{elem.taskNumber.failed}</h5>
       </div>
      })}

      </div>
    </div>
  )
}

export default AllTask
