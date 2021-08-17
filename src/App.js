import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toUpper } from 'lodash';


function App() {

  const [users, setUsers] = useState([]);
  const getApiData = async () => {
    const responce = await fetch('https://api.github.com/users');
    setUsers(await responce.json());
    console.log(users);

  }
  useEffect(() => {
    getApiData();
  }, [])

  return (
    <div className="App">
      <h1 className="text-info">Data Fecth From Api</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="align-middle">Id</th>
            <th className="align-middle">Name</th>
            <th className="align-middle">Type</th>
            <th className="align-middle">HTML Url</th>
            <th className="align-middle">Image</th>
          </tr>
        </thead>
        <tbody>

          {
            users.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="align-middle">{item.id}</td>
                  <td className="align-middle"><b>{toUpper(item.login)}</b></td>
                  <td className="align-middle">{item.type}</td>
                  <td className="align-middle"><a href={item.html_url} target="_blank">Click Here</a></td>
                  <td className="align-middle"><img src={item.avatar_url} alt={item.avatar_url} width="100px" height="100px" style={{ borderRadius: '50%' }} /></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
