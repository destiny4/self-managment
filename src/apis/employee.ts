import fly from '@/plugins/http'

const employee: ApiMethods = {
  getByPage(data) {
    return fly.post('/api/employee/getByPage', data)
  },
  getById(data) {
    return fly.get('/api/employee/getById', data)
  },
  insert(data) {
    delete data._id
    return fly.post('/api/employee/insert', data)
  },
  updateById(data) {
    return fly.post('/api/employee/updateById', data)
  },
  deleteById(data) {
    return fly.post('/api/employee/deleteById', data)
  }
}

export default employee
