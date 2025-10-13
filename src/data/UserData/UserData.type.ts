type UserDataType = {
    userImage: string;
    userName: string;
    userEmail: string;
};

export type UserType = {
    [key: string]: UserDataType;
};
