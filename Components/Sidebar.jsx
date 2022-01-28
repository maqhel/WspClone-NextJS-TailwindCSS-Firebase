import React from 'react'

import { Avatar, IconButton } from '@mui/material'
import { DonutLarge, MoreHoriz } from '@mui/icons-material'
import ChatIcon from '@mui/icons-material/Chat'

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
      <div></div>
      {/* Sidebar ChatList */}
    </div>
  )
}

export default Sidebar
