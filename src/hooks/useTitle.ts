import { computed } from 'vue'
import {useRoute} from 'vue-router'
const useTitle=()=>{
    const route=useRoute()
    const name=computed(()=>{
        return route.name
    })
    return name 
}

export default useTitle