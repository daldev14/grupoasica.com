import React from 'react';
import Image from 'next/image';
import SvgBuilding from '@/public/svg/building_website.svg';

export default function BuildPage() {
  return (
    <section className="flex flex-col justify-between overflow-hidden">
      <div className="py-6 px-8 xl:px-40 xl:py-10 flex flex-col justify-center gap-6">
        <Image
          className="m-auto"
          src={SvgBuilding}
          width={300}
          height={300}
          alt="Página en construcción"
        />
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-yellow-300">
            Página en construcción
          </p>
          <p className="text-2xl md:text-3xl font-bold text-indigo-400">
            Vuelva pronto
          </p>
        </div>
      </div>
    </section>
  );
}
