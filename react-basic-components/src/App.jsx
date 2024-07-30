import UserCard from './UserCard';
import userdata from './data/user.json';

function App() {
  return (
    <>
      <h1>Cards Component</h1>
      <UserCard userdata={userdata} />
    </>
  )
}

export default App
