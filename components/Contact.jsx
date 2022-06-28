import React from 'react';
import Image from 'next/image';

export const Contact = ({ profile, name }) => {
  return (
    <div className="relative flex items-center space-x-3 mb-2 hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={profile}
        width={50}
        height={50}
        layout="fixed"
      />
      <p>{name}</p>

      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce" />
    </div>
  )
}
