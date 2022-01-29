import React from 'react'

const ChatBubble = ({ state }: { state: Boolean }) => {
  return (
    <p
      className={`relative mb-6 w-[fit-content] rounded-lg bg-white p-2 text-[16px] before:absolute  before:bottom-3 before:right-[-5px] before:h-[10px] before:w-[10px] before:rotate-45 before:bg-white ${
        state && `ml-auto bg-chatSent before:bg-chatSent`
      }`}
    >
      <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
        Nombre
      </span>
      Some Message
      <span className="ml-2 text-[10px] font-bold text-gray-500 ">
        03:03 am
      </span>
    </p>
  )
}

export default ChatBubble
