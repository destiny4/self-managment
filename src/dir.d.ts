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

interface ListColumnsType{
    id:string //字段名
    name:string //中文名
    type?:string //类型
    labelWidth?:number //搜索框label长度
    width?:number //列表列宽度
    inSearch?:boolean //是否显示在搜索框中
    placeHolder?:string //搜索框中的提示
    align?:'left'|'center'|'right'//默认是left
    fixed?:"left"|'right'//列固定在左边还是右边
    render?:function
    scopedSlots?:object //列插槽
}