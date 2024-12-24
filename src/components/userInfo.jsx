export default function UserInfo(){
    const user=JSON.parse(localStorage.getItem("user"))
    const movies=JSON.parse(localStorage.getItem("selected"))
    return(
        <div>
            <div>
                <h2>User Info</h2>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.mobile}</p>
                <p>{user.userName}</p>
            </div>
            <div>
                <h2>Selected Movies</h2>
                {movies.map((movies, idx) => (
                    <p key={idx}>{movies}</p>
                ))}
            </div>
        </div>
    );
}