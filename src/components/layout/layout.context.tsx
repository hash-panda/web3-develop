import {createContext, useContext} from 'react';

interface SidebarContext {
   activeMenu: string;
   collapsed: boolean;
   setCollapsed: () => void;
   setActiveMenu: (href: string) => void;
}

export const SidebarContext = createContext<SidebarContext>({
   activeMenu: 'links',
   collapsed: false,
   setCollapsed: () => {},
   setActiveMenu: () => {},
});

export const useSidebarContext = () => {
   return useContext(SidebarContext);
};
