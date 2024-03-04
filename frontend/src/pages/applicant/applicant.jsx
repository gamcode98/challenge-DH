import React from "react";
import "../header/css/header.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Applicant() {
  const { id } = useParams()
  const [applicant, setApplicant] = useState()

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/applicants/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setApplicant(data)
      })
      .catch((error) => console.log(error))
  }, [])
  console.log('-----------------', applicant)
  return (
    <div>
      <div className="relative">
        <img src="img/trama.png" className="cuadro-applicant w-[95%] mx-auto" />
        <div className="p-4 bg-gray-500 w-40 h-40 absolute bottom-[-100px] left-1/2 transform -translate-x-1/2"></div>
      </div>
      <h2 className="name-applicant font-bold">NOMBRE Y APELLIDO</h2>

      <div class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm mt-10 mb-40">
        <dl class="-my-3 divide-y divide-gray-100 text-sm">
          <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">{applicant.firstName}</dt>
            <dd class="text-gray-700 sm:col-span-2">Médico</dd>
          </div>

          <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">E-mail</dt>
            <dd class="text-gray-700 sm:col-span-2">
              ejemplodeemail@gmail.com
            </dd>
          </div>

          <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">Número</dt>
            <dd class="text-gray-700 sm:col-span-2">+54 9 3888215554</dd>
          </div>

          <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-900">Género</dt>
            <dd class="text-gray-700 sm:col-span-2">Femenino</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Applicant;
