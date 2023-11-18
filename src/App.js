//import logo from './logo.svg';
import './App.css';
//import Gallery from './Gallery';     // default function
//import { Profile } from './Profile'; // named function 
//import TodoList from './TodoList';
//import { getImageUrl } from './util';
import  Avatar  from './Avatar';


// export default function App () {
//   return (
//     <div>
//       {/* <h1>Amazing scientists</h1>
//       <Profile />
//       <h1>Amazing scientists</h1>
//       <Gallery />
//       <br></br> */}

//       <TodoList />
//     </div>
    
//   );

// }

function Card ({children}) {
  return (
    <div className="card">
      {children}
    </div>
  )
}

export default function Profiles() {
  return (
    <Card>
      <Avatar
        size = {100}
        person = {{
          name : 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }} 
      />

    </Card>
  )
}



