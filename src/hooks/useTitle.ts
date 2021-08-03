import { ref } from 'vue'
import {useRoute} from 'vue-router'

const useTitle=()=>{
    const route=useRoute()
    const name=ref(route.name)
    return name
}

export default useTitle