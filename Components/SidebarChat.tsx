import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
const SidebarChat = () => {
  const [seed, setSeed] = useState(0)

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  return (
    <div className="flex cursor-pointer border-b border-searchBg p-5 duration-150 ease-in-out hover:bg-bgApp">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="ml-3">
        <h2 className="text-[16px]">Some Name</h2>
        <p className="text-[12px] text-gray-600">Last Message</p>
      </div>
    </div>
  )
}

export default SidebarChat
