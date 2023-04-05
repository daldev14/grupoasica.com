import React from 'react';
import CardProductos from '@/components/CardProductos';

const productos = [
  {
    title: 'Facturación',
    description:
      'Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Inventario',
    description:
      'Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.',
  },
  {
    title: 'Contabilidad',
    description:
      'A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker.',
  },
  {
    title: 'Protección de Hardware',
    description:
      'Meanwhile, in behind the bicycle shed, Hercules Morse, as big as a horse.',
  },
  {
    title: 'Identidad Digital',
    description:
      'Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.',
  },
  {
    title: 'Entrenamiento',
    description:
      'A business big enough that it could be listed on the NASDAQ goes belly up.',
  },
];

export default function Pymes() {
  return (
    <div className="">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle
              fill="currentColor"
              cx="44"
              cy="44"
              r="15.5"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="relative max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              Soluciones
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {/* <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle
                      cx="1"
                      cy="1"
                      r=".7"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Soluciones</span>
            </span>{' '} */}
            PYMES
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 content-center">
          {productos.map(({ title, description }) => (
            <CardProductos
              key={title}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}