import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/con">Contact</Link>
      </nav>
      <h1> mi Home</h1>
    </div>
  )
}
export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/con">Contact</Link>
      </nav>
      <h1>my About</h1>
      <Outlet />
    </div>
  )
}
export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/con">Contact</Link>
      </nav>
      <h1>my Contact</h1>
    </div>
  )
}

export function Bye() {
  return (
    <div>
      <h2>Bitch Im back</h2>
    </div>
  )
}

export function App() {
  return (
    <div>
      <Home />
    </div>
  );
}




// Render Props

// const tahoe_peaks = [
//   { name: "Freel", elevation: 10822 },
//   { name: "Monument", elevation: 10821 },
//   { name: "Pyramid", elevation: 10825 },
//   { name: "Tallac", elevation: 10827 },
// ];

// function List({ data, renderItem, renderEmpty }) {
//   return !data.length ? (
//     renderEmpty
//   ) : (
//     <ul>
//       {data.map((item) => (
//         <li key={item.name}>{renderItem(item)}</li>
//       ))}
//     </ul>
//   );
// }

// function App() {
//   return (
//     <div>
//       <List 
//         data={tahoe_peaks}
//         renderEmpty={<p>This List is Empty</p>}
//         renderItem={(item) => (
//           <>
//             {item.name} - {item.elevation} ft.
//           </>
//         )}
//       />
//     </div>
//   );
// }

// GraphQL

// const query = `
// query {
//   allLifts {
//    name
//    elevationGain
//    status
//   }
// }
// `;

// const opts = {
//   method: "POST",
//   headers: {"Content-Type": "application/json"},
//   body: JSON.stringify({ query })
// };

// function Lift({ name, elevationGain, status }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{elevationGain} {status}</p>
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(null);
//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://snowtooth.moonhighway.com`, opts)
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   }, []);

//   if (loading) return <h2>Loading...</h2>
//   if (error) return <pre>{JSON.stringify(error)}</pre>
//   if (!data) return null
//     return (
//      <div>
//       {data.data.allLifts.map((lift) => (
//         <Lift
//         name={lift.name}
//         elevationGain={lift.elevationGain}
//         status={lift.status}
//         />
//       ))}
//      </div>
//     );
// }

// function GithubUser({ name, location, avatar }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{location}</p>
//       <img src={avatar} height={180} />
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(null);
//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://api.github.com/users/moonhighway`)
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   }, []);

//   if (loading) return <h2>Loading...</h2>
//   if (error) return <pre>{JSON.stringify(error)}</pre>
//   if (!data) return null
//     return (
//       <GithubUser
//       name={data.name}
//       location={data.location}
//       avatar={data.avatar_url} />

//       // if you want to fetch all the data
//       // <pre>{JSON.stringify(data, null, 2)}</pre>
//     );
//   return <h1>DATA</h1>;
// }

// USE REF

// function App() {
//   const textRef = useRef();
//   const colorRef = useRef();

//   const displayValues = (e) => {
//       e.preventDefault();

//       const textValue = textRef.current.value;
//       const colorValue = colorRef.current.value;

//       console.log(`text is ` + textValue);
//       console.log('color value is ' + colorValue);
//       alert(`your text is ${textValue}, your color is ${colorValue}`)
//       textRef.current.value = "";
//       colorRef.current.value = "";
//   }

//   return (
//     <div className="App">
//       <form onSubmit={displayValues(e)}>
//         <input type="text" ref={textRef}/>
//         <input type="color" ref={colorRef}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;
