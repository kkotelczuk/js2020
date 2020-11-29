import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
