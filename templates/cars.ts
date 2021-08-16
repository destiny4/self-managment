import fly from '@/plugins/http'

const <%= data.moduleId %>:ApiMethods={
    getByPage(data){
        return fly.post('/api/<%= data.moduleId %>/getByPage',data)
    },
    getById(data){
        return fly.get('/api/<%= data.moduleId %>/getById',data)
    },
    insert(data){
        delete data._id
        return fly.post('/api/<%= data.moduleId %>/insert',data)
    },
    updateById(data){
        return fly.post('/api/<%= data.moduleId %>/updateById',data)
    },
    deleteById(data){
        return fly.post('/api/<%= data.moduleId %>/deleteById',data)
    }
}

export default <%= data.moduleId %>