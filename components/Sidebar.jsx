import React from 'react';
import { useSession } from 'next-auth/client';
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from '@heroicons/react/outline';
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon
} from '@heroicons/react/solid';

import { SidebarRow } from './SidebarRow';

export const Sidebar = () => {

  const [session, loading] = useSession();

  return (
    <div className="py-2 pr-2 mt-5 max-w-[600px] md:p-2 xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow icon={UserIcon} title="Friend" />
      <SidebarRow icon={UserGroupIcon} title="Groups" />
      <SidebarRow icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow icon={CalendarIcon} title="Event" />
      <SidebarRow icon={ClockIcon} title="Memories" />
      <SidebarRow icon={ChevronDownIcon} title="See More" />
    </div>
  )
}
