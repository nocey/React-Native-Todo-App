export const Login = (state = false, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload
        default:
            return state
    }

}