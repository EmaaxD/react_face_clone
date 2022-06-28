import React from 'react';

import { StoryCard } from './StoryCard';

const data = [
  {
    name: 'megumin',
    src: 'https://i.pinimg.com/originals/ec/77/64/ec77640a70d388ab3689b922b488e000.png',
    profile: 'https://i.pinimg.com/474x/cf/ea/f2/cfeaf20069698419d7650ef64cc910f0.jpg'
  },
  {
    name: 'nagatoro',
    src: 'https://i.pinimg.com/474x/88/21/40/88214088c7f670bc16b0900afe1fb18f.jpg',
    profile: 'https://www.anmosugoi.com/wp-content/uploads/2021/04/Ijiranaide-Nagatoro-San-anime.5.jpg'
  },
  {
    name: 'Tae-chan',
    src: 'https://i.pinimg.com/originals/e1/e0/a4/e1e0a46689b9c19be83b6f8633ff77ef.jpg',
    profile: 'http://pm1.narvii.com/7241/1852448a564f400836063f0ce65fc5fb1c89af5br1-1280-1169v2_00.jpg'
  },
  {
    name: 'mikey',
    src: 'https://pbs.twimg.com/media/DVPLVxmUQAArYas.jpg',
    profile: 'https://i.pinimg.com/474x/dc/d9/43/dcd943477b5976e0cfb2c8d0f79a81a7.jpg'
  },
  {
    name: 'kobayashi',
    src: 'https://wallpapercave.com/wp/wp3813793.jpg',
    profile: 'https://i.pinimg.com/236x/f9/7d/5b/f97d5bc481de667ad4029a5444783a6b.jpg'
  },
]

export const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {
        data.map((item, index) => (
          <StoryCard key={index} {...item} />
        ))
      }
    </div>
  )
}
