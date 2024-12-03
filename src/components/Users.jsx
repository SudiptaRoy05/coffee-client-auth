import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import Swal from 'sweetalert2'

export default function Users() {

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingUser = users.filter(user => user._id !== id)
                            setUser(remainingUser)
                        }
                    })
            }
        });
    }


    const loadedUsers = useLoaderData();
    const [users, setUser] = useState(loadedUsers)
    return (
        <div>
            <h3 className="text-3xl"> Users {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CreatedAt</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>
                                    <div onClick={() => handleDelete(user._id)} className="btn">X</div>
                                    <div className="btn">U</div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
