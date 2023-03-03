import {createContext, useContext} from 'react';
import { websites } from '../../config/websites'

interface SidebarContext {
   activeMenu: string;
   collapsed: boolean;
   drawerOpen: boolean;
   setCollapsed: () => void;
   setDrawerOpen: () => void;
   setActiveMenu: (href: string) => void;
}

export const SidebarContext = createContext<SidebarContext>({
   activeMenu: websites[0].key || '',
   collapsed: false,
   drawerOpen: false,
   setCollapsed: () => {},
   setDrawerOpen: () => {},
   setActiveMenu: () => {},
});
/* 使用 createContext 和 useContext 特性，方便在所有内部子组件传值和使用值 */
export const useSidebarContext = () => {
   return useContext(SidebarContext);
};
