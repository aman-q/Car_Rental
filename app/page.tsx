
import Image from "next/Image";
import {Hero, CarCard} from '@/components'
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "@/utils/index";
import { fuels, yearsOfProduction } from "@/constant/index";
import ShowMore from "@/components/ShowMore";

export default async function Home({searchParams}) {
  const allCars= await fetchCars({
    manfacture: searchParams.manfacture || '',
    year: searchParams.year || '',
    fule: searchParams.fule || '', 
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  });
  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) 
  || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y
      max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl
          font-extrabold"> Car Catalogeue</h1>
          <p>Explore the cars you might like</p>

        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fule"  options={fuels}/>
            <CustomFilter title="Year" options={yearsOfProduction}/>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />

            
          </section>
          
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}



      </div>

      
    </main>
  );
}
