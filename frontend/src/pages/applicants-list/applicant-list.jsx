import "../header/css/header.css"

function ApplicantList() {
    return (
        <div className="mt-20 flex flex-col items-center">

            <form action="#" method="get" className="mb-8 w-[50%]">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </form>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


                <div className="p-4 bg-gray-200 rounded">
                    <div className="flex items-center justify-center">
                        <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
                    </div>
                    <h3 className="font-bold mt-2">Nombre del Postulante 1</h3>
                    <p className="text-sm italic">Profesión del Postulante 1</p>
                </div>



                <div className="p-4 bg-gray-200 rounded">
                    <div className="flex items-center justify-center">
                        <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
                    </div>
                    <h3 className="font-bold mt-2">Nombre del Postulante 2</h3>
                    <p className="text-sm italic">Profesión del Postulante 2</p>
                </div>


            </div>
        </div>
    );
}

export default ApplicantList;