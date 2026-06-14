const Card_paquetes = ({
  alto_minimo = "h-72",
  onsubmit,
  lista = [],
  precio = "3,000.00",
  presencia = "Presencia Básica",
  bg = "bg-primary-light"
}) => {
  return (
    <div
      className={`w-full ${alto_minimo} overflow-hidden rounded-xl bg-white shadow-lg`}
    >

      <div className={`relative flex h-1/2 flex-col justify-end ${bg} p-4`}>


        <div className="absolute top-3 left-3 rounded-lg bg-white px-3 py-2 shadow">
          <p className="text-sm text-gray-700">{presencia}</p>
        </div>


        <div className="flex items-end gap-1">
          <h3 className="text-4xl font-bold text-white">
            ${precio}
          </h3>

          <span className="mb-1 text-xs text-white">
            /mes
          </span>
        </div>

        <button
          onClick={onsubmit}
          className="mt-4 w-full rounded-full bg-black py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >
          Contratar
        </button>
      </div>


      <div className="h-1/2 p-4">
        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card_paquetes;