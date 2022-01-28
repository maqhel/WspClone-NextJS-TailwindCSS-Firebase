import React from 'react'

import { Avatar, IconButton } from '@mui/material'
import { DonutLarge, MoreHoriz, SearchOutlined } from '@mui/icons-material'
import ChatIcon from '@mui/icons-material/Chat'
import SidebarChat from './SidebarChat'

const Sidebar = () => {
  return (
    <div className="flex flex-[0.35] flex-col">
      {/* Sibebar Header */}

      <div
        className="flex items-center justify-between
        border-r border-gray-300 p-4 "
      >
        <Avatar
          className="text-[30px]"
          src="https://avatars.dicebear.com/api/human/123.svg"
        />
        <div className="flex min-w-[10vw] items-center justify-between">
          <IconButton className="md:mr-[1w] lg:mr-[2vw]">
            <DonutLarge className="text-[24px]" />
          </IconButton>
          <IconButton className="md:mr-[1w] lg:mr-[2vw]">
            <ChatIcon className="text-[24px]" />
          </IconButton>
          <IconButton className="md:mr-[1w] lg:mr-[2vw]">
            <MoreHoriz className="text-[24px]" />
          </IconButton>
        </div>
      </div>

      {/* Sidebar Searchbox */}

      <div className="flex items-center bg-searchBg p-[8px]">
        <div className="flex h-[35px] w-full items-center rounded-2xl bg-white">
          <SearchOutlined className="mx-1 text-gray-400" />
          <input
            type="text"
            placeholder="Search or start new chat"
            className="border-none text-gray-600 outline-none md:ml-[5px] lg:ml-[15px]"
          />
        </div>
      </div>

      {/* Sidebar ChatList */}
      <div className="flex-1 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
         {/* Sidebar Chat List item*/}
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar
