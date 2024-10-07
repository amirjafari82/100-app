import Button from "../../ui/Button";
import { useLogout } from "../authentication/useLogout";
import { useUser } from "../authentication/useUser";

function ShowUser() {
    const { logout } = useLogout();
    const { user, isLoading } = useUser();

    async function handlelogout() {
        await logout();
    }

    return (
        <div>
            {isLoading ? (
                "is Loading..."
            ) : (
                <>
                    <p>{user.phone}</p>
                    <span>{user.first_name} </span>
                    <span>{user.last_name}</span>
                </>
            )}
            <Button onClick={handlelogout} disabled={isLoading}>
                {!isLoading ? "Logout" : "Logging out"}
            </Button>
        </div>
    );
}

export default ShowUser;
