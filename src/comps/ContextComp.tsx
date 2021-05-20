import React, { useContext, useState } from 'react';
import UserContext, { UserState } from './store';

export interface UseContextProps {

}
const ConsumerComponent = () => {
    const user: UserState = useContext<UserState>(UserContext);

    return (
        <div>
            <h1>{user.first}</h1>
            <h1>{user.last}</h1>
        </div>
    )
}

const UseContextComponenty: React.FC<UseContextProps> = () => {
    const [user, setUser] = useState<UserState>({
        first: "Jane",
        last: "Smith"
    });

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
            <button onClick={() => setUser({ first: "Tom", last: "Larry" })}>change name</button>
        </UserContext.Provider>
    );
}

export default UseContextComponenty;
