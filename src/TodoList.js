// const today = new Date ();

// function formatDate(date){
//     return new Intl.DateTimeFormat(
//         'en-US',
//         { weekday: 'long'}
//     ).format(date);
// }

const person = {
    name : 'Gregario Y. Zara',
    theme : {
        backgroundColor : 'black',
        color: 'pink'
    }
}

export default function TodoList() {
    return (
        <div style = {person.theme}>
            <h1>{person.name}'s Todo's List</h1>
            <img className = "avatar" src = "https://i.imgur.com/7vQD0fPs.jpg" alt = "Gregorio Y. Zara"/>
            <ul>
                <li>Go to the gym</li>
                <li>Bring milk </li>
                <li>Do meditation</li>
            </ul>
        </div>
    );
}