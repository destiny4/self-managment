declare module '@/hooks/*'
declare module '@/router/*'
declare module ' @/components/*'
declare module '@/*'

interface MenuItemType {
    path: string,
    name: string,
    icon?: string,
    children?: Array<MenuItemType>,
    component?:boolean,
    hiddenInMenu?:boolean
}
interface PaginationType{
    currentPage:number
    pageSize:number
}