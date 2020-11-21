renderMyComponent = () => {
  const someData = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {someData.map(item => (
        <span>{item}</span>
      ))}
    </div>
  );
};

function greet(input) {
  return input != null ? input : 'Hello world';
}

// ES2020 nullish coalescing
function greet(input) {
  return input ?? 'Hello world';
}
