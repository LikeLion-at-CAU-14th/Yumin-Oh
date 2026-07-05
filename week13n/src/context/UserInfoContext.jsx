import { createContext, useReducer, useContext } from 'react';

const initialState = {
    name: '',
    email: '',
    birth: '',
    gender: '',
};

const userInfoReducer = (state, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return action.payload;
        default:
            return state;
    }
};

export const UserInfoContext = createContext();

export const UserInfoProvider = ({children}) => {
    const [state, dispatch] = useReducer(userInfoReducer, initialState);

    return (
        <UserInfoContext.Provider value={{state, dispatch}}>
            {children}
        </UserInfoContext.Provider>
    );
};

export const useUserInfo = () => useContext(UserInfoContext);