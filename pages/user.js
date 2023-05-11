function UserList({users}) {
    return(
        <>
        <h1>List of Users</h1>
        {users.map((user) => {
            return(
            <div key={user.fixture.id}><p>{user.fixture.id}</p>
            </div>
            )})}
        </>
    )

}

export async function getStaticProps() {
    const response = await fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2022&date=2023-05-13", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "214c84a269641c8a0c49c03f16cabd53"
        }
    })
    const data = await response.json()
    return{
        props:{
            users:data.response,
        }, revalidate: 7200
    }
}

export default UserList
