import Categoria from "../Categoria/Categoria"
import './styles.css'
function CategoriasContainer(){
    return(
        <section className="general-data">
            <Categoria nombre='Categoria 1' />
            <Categoria nombre='Categoria 2' />
            <Categoria nombre='Categoria 3' />
            <Categoria nombre='Categoria 4' />
            <Categoria nombre='Categoria 5' />
            <Categoria nombre='Categoria 6' />
        </section>
    )
}

export default CategoriasContainer