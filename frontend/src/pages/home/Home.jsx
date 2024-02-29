import "../home/Home"
import "../header/css/header.css"

function Home(){
    return (
        <section className="fondoMenu flex flex-col items-center justify-center h-screen">
            <h2 className="text-6xl font-bold mb-4">RECRUITING</h2>
            <p className="text-sm font-thin italic mb-4">Donde se encuentran los mejores postulantes</p>
            <form action="/applicants-result.html" method="get" className="w-[70%] bg-white rounded-full p-5">
                <input type="text" name="search" className="w-full border-none focus:outline-none" placeholder="Buscar..." />
            </form>
        </section>
    );
}

export default Home;