import { LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILURE } from "../actions/actiontype";

const inialstate={
    user={},
    isLoggedin=false,
    isLoggingin=false,
    error=null
}
export default function(state = inialstate,action){

    switch(action.type){
    case LOGIN_START:
        return {
        ...state,
        isLoggingin:true,
        };
        case LOGIN_SUCCESS:
            return {
            ...state,
            isLoggingin:false,
            isLoggedin:true,
            user:action.user,
            error:null,
            };
            case LOGIN_FAILURE:
                return {
                ...state,
                isLoggingin:false,
                error:action.error,
                };
    default:return state;
    }

}