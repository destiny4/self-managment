<script lang='tsx'>
import { defineComponent,computed} from 'vue'
import type { PropType } from "vue"
import { ElTableColumn, ElTable, ElPagination } from 'element-plus'
export default defineComponent({
  name: 'DataTableTsx',
  props: {
    data: {
      type: Array,
      default: []
    },
    pagination: {
      type: Object as PropType<PaginationType>
    },
    columns: {
      type: Array as PropType<unknown> as PropType<ListColumnsType>
    }
  },
  emits: ['pageChange'],
  setup(props, { attrs, slots, emit }) {
    const tableData = computed(()=>{
      return props.data
    })
    const tableColumns = computed(()=>{
      return props.columns
    })
    const pg = computed(()=>{
      return props.pagination
    })

    const handleClick = (row: any) => {
      console.log(row);
    }

    const handleSizeChange = (val: number) => {
      if(pg.value){
        pg.value.pageSize = val
        emit('pageChange',pg.value)
      }
    };
    const handleCurrentChange = (val: number) => {
      if( pg.value){
        pg.value.currentPage = val
      emit('pageChange',pg.value)
      }
    };
    return () => (
      <>
        <ElTable class="table-margin" data={tableData.value} style={{ width: '100%' }}>
          {
            tableColumns.value!.map((item: { id: string | number | undefined; name: any; width: any; align: any; slots: any }) => {
              return (
                <ElTableColumn
                  key={item.id}
                  prop={item.id}
                  label={item.name}
                  width={item.width || '-'}
                  align={item.align || 'left'}
                  v-slots={item.slots || {}}
                >
                </ElTableColumn>

              )
            })
          }
        </ElTable>
        <ElPagination
          class="pagination-region"
          onSizeChange={handleSizeChange}
          onCurrentChange={handleCurrentChange}
          current-page={pg.value?.currentPage}
          page-sizes={[10, 20, 30, 50]}
          page-size={pg.value?.pageSize}
          layout="total, sizes, prev, pager, next, jumper"
          total={pg.value?.total}
        ></ElPagination>
      </>
    )
  }
})
</script>

<style scoped lang='scss'>
.pagination-region {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
    