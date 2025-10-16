import { UserData, UserDataType } from '@data';

import { useDataReducer } from '../useDataReducer';

export const useUserData = () => {
    const state = useDataReducer<UserDataType>(UserData);

    return state;
};
