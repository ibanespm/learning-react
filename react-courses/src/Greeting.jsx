


export function Greeting(){
    //const name = false
    const user =  {
        firstName : 'ibanespm',
        lastName : 'perez'
    }
    //return <h1>{name ? 'estoy aprendiendo react':'No estoy aprendiendo react'}</h1>
    return <div>
        <h1> {user.firstName.toString()}</h1>
        <h2>{user.lastName}</h2>
    </div>
}


 export function UserCard(){
    return <h1> this is a userCard</h1>
}