import fly from '@/plugins/http'

const cars:ApiMethods={
    getByPage(data){
        return fly.post('/api/cars/getByPage',data)
    },
    getById(data){
        return fly.get('/api/cars/getById',data)
    },
    insert(data){
        delete data._id
        return fly.post('/api/cars/insert',data)
    },
    updateById(data){
        return fly.post('/api/cars/updateById',data)
    },
    deleteById(data){
        return fly.post('/api/cars/deleteById',data)
    }
}

export default cars