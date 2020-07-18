import { CHANGE_COLOR } from '../actions/types'
let data = {
    color:'blue',
    "welcomeMessege":"Welcome to Redux React App"
}
function changeColorReducer(state=data,{type,payload}){


            switch(type){

                    case CHANGE_COLOR:
                        return {

                                ...state,
                                color: payload.color

                        }
                    default:
                    return state
            }



}
export default changeColorReducer