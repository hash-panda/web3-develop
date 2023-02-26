import {createContext, useContext} from 'react';
import { sidebars } from '../../config/sidebar'

interface SidebarContext {
   activeMenu: string;
   collapsed: boolean;
   setCollapsed: () => void;
   setActiveMenu: (href: string) => void;
}

export const SidebarContext = createContext<SidebarContext>({
   activeMenu: sidebars[0].key || '',
   collapsed: false,
   setCollapsed: () => {},
   setActiveMenu: () => {},
});

export const useSidebarContext = () => {
   return useContext(SidebarContext);
};
