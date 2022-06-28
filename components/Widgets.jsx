import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';

import { Contact } from './Contact';

const contacts = [
  {
    name: 'megumin',
    profile: 'https://i.pinimg.com/474x/cf/ea/f2/cfeaf20069698419d7650ef64cc910f0.jpg'
  },
  {
    name: 'nagatoro',
    profile: 'https://www.anmosugoi.com/wp-content/uploads/2021/04/Ijiranaide-Nagatoro-San-anime.5.jpg'
  },
  {
    name: 'Tae-chan',
    profile: 'http://pm1.narvii.com/7241/1852448a564f400836063f0ce65fc5fb1c89af5br1-1280-1169v2_00.jpg'
  },
  {
    name: 'mikey',
    profile: 'https://i.pinimg.com/474x/dc/d9/43/dcd943477b5976e0cfb2c8d0f79a81a7.jpg'
  },
  {
    name: 'kobayashi',
    profile: 'https://i.pinimg.com/236x/f9/7d/5b/f97d5bc481de667ad4029a5444783a6b.jpg'
  },
]

export const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {
        contacts.map((contact, index) => (
          <Contact key={index} {...contact} />
        ))
      }
    </div>
  )
}