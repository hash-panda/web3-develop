import {createContext, useContext} from 'react';
import { websites } from '../../config/websites'

interface SidebarContext {
   activeMenu: string;
   collapsed: boolean;
   setCollapsed: () => void;
   setActiveMenu: (href: string) => void;
}

export const SidebarContext = createContext<SidebarContext>({
   activeMenu: websites[0].key || '',
   collapsed: false,
   setCollapsed: () => {},
   setActiveMenu: () => {},
});

export const useSidebarContext = () => {
   return useContext(SidebarContext);
};
