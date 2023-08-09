function App() {
  let numeros = [5, 8, 10]
  let dobles = numeros.map(function(num){
    return num * 2
  })
  console.log(dobles)
  return (
    <div>
      <ul>
      {
        dobles.map((elm) => <li>{elm}</li>)
      }
      </ul>
      <h1>Mis primeros pasos en React</h1>
    </div>
  );
}

export default App;