import React from 'react';

type UserProps = {
       user:{
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
       }
};

const User = ({ user }: UserProps) => {
    return (
        <div>
           {user.name}
           {user.age}
           {user.lang}
        </div>
    );
};

export default User;