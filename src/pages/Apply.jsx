import { useEffect, useState } from "react";

const Apply = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>Users : {users.length}</h2>
        </div>
    );
};

export default Apply;
