import { CHANGE_COLOR } from './types'

export  function changeColor(newColor){

 
        return{

            type: CHANGE_COLOR,
            payload: {

                color: newColor

            }


        }



}