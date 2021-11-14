import {useState} from 'react';
import {useEffect} from 'react';
import './App.css';

// import light from './img/light.png'
// import dark from './img/dark.png'

function App() {
  
  const [theme, setTheme] = useState('light')
  const [users, setUsers] = useState([])

  const ChageMode = (e) => {
    setTheme(e.target.value)
  }
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => (setUsers(data)))
  }, [])
  
  return (
    <>
    <div className={theme}>
    
      <header>
        <select className="dark-mode-select" onChange={ChageMode}>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </header>
    
      {users.length > 0 && <ul className="list">
        {
        users.map(user => (
          <li  class="item">
            <ul className='inside-list'>
        
              <li className={theme} key={user.id}>
                <div class="div-wrapper-contents">
                  <h2> <span className="span-user">Name:</span> {user.name} </h2>
                  <h3> <span className="span-user">Username:</span> {user.username} </h3>
                  <p className="email"><span className="span-user">Email:</span> {user.email} </p>
                  <address> address: <span className="address">{user.address.street}</span> <span className="address">{ user.address.suite}</span> <span className="address">{user.address.city}</span> </address>
                </div>
              </li>
        
            </ul>
          </li>
          ))
        }
      </ul>
      }
    
    </div>
    </>
    );
  }
  
  export default App;
  