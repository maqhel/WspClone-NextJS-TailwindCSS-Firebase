import { AttachFile, InsertEmoticon, Mic, MoreVert, Phone, Videocam } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChatBubble from './ChatBubble'

const Chat = () => {
  const [seed, setSeed] = useState(0)
  const [input, setInput] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

 const sendMessage = (e) => {
    e.preventDefault();
    setInput('')
  }

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
          <ChatBubble state={true}/>
          <ChatBubble state={false}/>
          <ChatBubble state={false}/>
          <ChatBubble state={true}/>
          <ChatBubble state={false}/>
          <ChatBubble state={true}/>
          <ChatBubble state={false}/>
          <ChatBubble state={false}/>
          <ChatBubble state={true}/>
          <ChatBubble state={false}/>
          <ChatBubble state={true}/>
          <ChatBubble state={false}/>
          <ChatBubble state={false}/>
          <ChatBubble state={true}/>
          <ChatBubble state={false}/>
          <ChatBubble state={true}/>
          <ChatBubble state={false}/>
          <ChatBubble state={false}/>
          <ChatBubble state={true}/>
          <ChatBubble state={false}/>
      </div>
      {/* Chat footer */}

      <div className="flex items-center justify-content h-[62px] border-t border-gray-300 px-2 ">
        <IconButton>
          <InsertEmoticon/>
        </IconButton>
        <IconButton>
          <AttachFile/>
        </IconButton>

        <form action="" className="flex flex-1">
          <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 rounded-[30px] p-2 border-none outline-none" type="text" placeholder="Type a message" />
          <button onClick={sendMessage} className="hidden">send a message</button>
        </form>
        <IconButton>
          <Mic/>
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
