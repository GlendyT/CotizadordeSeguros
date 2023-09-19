import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"


//prueba para branches
export const Formulario = () => {
  
  return (
    <>
      <form>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase"> 
                Marca
            </label>
            <select 
             name="marca"
             className="w-full p-3 bg-while border border-gray-200">
                 <option value="">--Selecciona Marca --</option>

                 {MARCAS.map(marca => (
                  <option
                    key={marca.id}
                    value={marca.id}
                  >
                    {marca.nombre}
                  </option>
                 ))}
            </select>
        </div>

         <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase"> 
                Año
            </label>
            <select 
             name="marca"
             className="w-full p-3 bg-while border border-gray-200">
                 <option value="">--Selecciona Año --</option>

                 {YEARS.map(year => (
                  <option
                    key={year}
                    value={year}
                  >
                    {year}
                  </option>
                 ))}
            </select>
        </div>

        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase "> 
                Elige un Plan
            </label>
            <div className="flex gap-3 items-center">
              {PLANES.map(plan => (
                <Fragment key={plan.id}>
                  <label>
                    {plan.nombre}
                  </label>
                  <input
                     type="radio"
                     name="plan"
                     value={plan.id}
                  />
                </Fragment>
              ))}
            </div>

            <input
               type="submit"
               className="w-full bg-purple-500 hover:bg-purple-600 transition-colors
               text-white cursor-pointer p-3 uppercase font-bold"
               value="Cotizar"
            />

        </div>

      </form>
    </>
  )
}
