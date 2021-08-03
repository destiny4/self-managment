declare module '@/hooks/*'
declare module '@/router/*'
declare module ' @/components/**/*'

interface MenuItemType {
    path: string,
    name: string,
    icon: string,
    children: Array<MenuItemType>,
    component:boolean
}