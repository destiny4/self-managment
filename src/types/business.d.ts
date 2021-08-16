declare module '@/hooks/*'
declare module '@/router/*'
declare module '@/apis/*'
declare module '@/plugins/*'
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
    total:number
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
    slots?:{
        default?:function
        header?:function
    } //列插槽
}

interface DateTimeShortcut{
    text:string
    value:Date|()=>Date
}

interface SelectOption{
    label:string
    value:string
}
interface FormItemInner{
    placeholder?:string
    type?:'date'|'datetime'|'textarea'
    shortcuts?:DateTimeShortcut[]
    style?:string
    options?:SelectOption[]
}

interface EditFormItem{
    xtype:'ElInput'|'ElTimePicker'|'ElButton'|'ElSelect'|'ElDatePicker'
    outer:{
        prop:string
        label:string
        required?:boolean
        style?:string
        size?:'small'|'mini'|'medium'
    }
    inner?:FormItemInner
    events?:Record<string,function>
}

type ApiFunction=(data:Record<string,any>)=>Promise

interface ApiMethods{
    getByPage?:ApiFunction
    getById?:ApiFunction
    insert?:ApiFunction
    updateById?:ApiFunction
    deleteById?:ApiFunction
    [prop:string]:ApiFunction
}