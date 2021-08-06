<script lang='tsx'>
import { defineComponent, ref, reactive } from 'vue'
import type { PropType } from "vue"
import {ElTableColumn,ElTable} from 'element-plus'
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
      type: Array as PropType<ListColumnsType>
    }
  },
  emits: ['search'],
  setup(props, { attrs, slots, emit }) {
    const tableData = reactive(props.data)
    const tableColumns = reactive(props.columns)

    const pg = reactive<PaginationType>(props.pagination)

    const currentPage = ref(4)
    const pageSize = ref(10)

    const handleClick = (row) => {
      console.log(row);
    }

    const handleSizeChange = (val) => {
      pg.pageSize = val
    };
    const handleCurrentChange = (val) => {
      pg.currentPage = val
    };
    return () => (
      <>
        <ElTable class="table-margin" data={tableData} style={{ width: '100%' }}>
          {
            tableColumns.map(item => {
              return (
                <ElTableColumn
                  key={item.id}
                  prop={item.id}
                  label={item.name}
                  width={item.width || '-'}
                  align={item.align || 'left'}
                  v-slots={item.scopedSlots || {}}
                >
                </ElTableColumn>

              )
            })
          }
        </ElTable>
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
    