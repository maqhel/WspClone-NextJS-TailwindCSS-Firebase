import { MoreVert, Phone, Videocam } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Chat = () => {
  const [seed, setSeed] = useState(0)

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  return (
    <div className="flex flex-[0.65] flex-col">
      {/* Chat header */}
      <div className="flex items-center border-b border-gray-300 p-4">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="ml-3 flex-1">
          <h3 className="text-[16px] font-bold">Some Name</h3>
          <p className="text-[12px] text-gray-500">Last seen</p>
        </div>
        <div>
          <IconButton className="md:mr-[1vw] lg:mr-[2vw]">
            <Videocam className="text-[24px]" />
          </IconButton>

          <IconButton className="md:mr-[1vw] lg:mr-[2vw]">
            <Phone className="text-[24px]" />
          </IconButton>
          <IconButton className="md:mr-[1vw] lg:mr-[2vw]">
            <MoreVert className="text-[24px]" />
          </IconButton>
        </div>
      </div>
      {/* Chat body */}

      <div className="flex-1 overflow-y-auto bg-chat-wallpaper bg-cover bg-center bg-no-repeat p-7 scrollbar-thin scrollbar-thumb-gray-300">
        <p
          className={`relative mb-6 w-[fit-content] rounded-lg bg-white p-2 text-[16px] before:absolute  before:bottom-3 before:right-[-5px]
          before:h-[10px] before:w-[10px] before:rotate-45 before:bg-white
          
          ${true && `ml-auto`}
          
          `}>
          <span className="absolute top-[-18px] left-1 text-[12px] font-bold">Nombre</span>
          Some Message
          <span className="ml-2 text-[10px] font-bold text-gray-500 ">03:03 am</span>
        </p>
      </div>
      {/* Chat footer */}
    </div>
  )
}

export default Chat
