import Ficha from "../Ficha/Ficha"
import './styles.css'
function FichasContainer(){
    const fichas = [
        {
            titulo:'Mi ficha 1',
            datos: 'Que bonita ficha',
            icono: 'fa-clipboard-list'
        },
        {
            titulo:'Mi ficha 2',
            datos: 'Que hice',
            icono: 'fa-clipboard-list'
        },
        {
            titulo:'Mi ficha 3',
            datos: 'Usando props',
            icono: 'fa-clipboard-list'
        },
    ]
    return(
        <section className="top-data">
            {
                fichas.map((elm, idx) => <Ficha key={`keyprop-${idx}`} titulo={elm.titulo} datos={elm.datos} icono={elm.icono} /> )
            }
        </section>
    )
}

export default FichasContainer