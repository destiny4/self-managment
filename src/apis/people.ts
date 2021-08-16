import fly from '@/plugins/http'

const people: ApiMethods = {
  getByPage(data) {
    return fly.post('/api/people/getByPage', data)
  },
  getById(data) {
    return fly.get('/api/people/getById', data)
  },
  insert(data) {
    delete data._id
    return fly.post('/api/people/insert', data)
  },
  updateById(data) {
    return fly.post('/api/people/updateById', data)
  },
  deleteById(data) {
    return fly.post('/api/people/deleteById', data)
  }
}

export default people
