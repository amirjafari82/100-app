import { useUsers } from "./useUsers";

function ShowUsers() {
    const { isLoading, users } = useUsers();

    return (
        <div>
            {isLoading
                ? "is Loading..."
                : users.map((user) => (
                      <span key={user.email}>{user.email}</span>
                  ))}
        </div>
    );
}

export default ShowUsers;
