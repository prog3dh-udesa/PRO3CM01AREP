function DummyComponent(){
    let estudiantes = [
        {
          nombre:'Francisca',
          edad:24
        },
        {nombre: 'Eros',
        edad: 19
        },{
          nombre: 'Luciano',
        edad: 28
      }
      ]
      let filtrado = estudiantes.filter((estudiante) => estudiante.edad < 25)
      return (
        <>
          <div className="App">
            {
              estudiantes.map((estudiante) =>  <h2>{estudiante.nombre}</h2>)
            }
            <h1>Estos son los estudiantes menores de 25</h1>
            {
              filtrado.map((elm) => <h2>{elm.nombre}</h2> )
            }
          </div>
          <h1>Hola pepe</h1>
        </>
      );
}

export default DummyComponent