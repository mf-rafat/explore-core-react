import { use } from "react"

export default function ({fetchUsers}){

    const users = use(fetchUsers);

    return(
        <div className="user-card">
              <h2> haiders natural paradise users: {users.length}</h2>
          <p> this is natural paradise pages </p>
        </div>
    )

}