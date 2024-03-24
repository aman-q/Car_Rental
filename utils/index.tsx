import { FilterProps } from "@/types/index";


export async function fetchCars(filter :FilterProps ){
    const {manfacture,year, model,limit,fule}=filter
    const headers={
        'X-RapidAPI-Key': 'f6930bed7emshf6102ee0835e9eap18317djsn86fccc3a4b95',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response =await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manfacture}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fule}`,{
        headers:headers,
    });
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 350; 
    const mileageFactor = 0.1; 
    const ageFactor = 0.05; 
  
    
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  

export const generateCarImageUrl=(car:carProps , angle? :string)=>{
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle',`${angle ? angle : ''}`)
  
    return `${url}`;
}
export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
  

    searchParams.set(type, value);
  
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };



// f6930bed7emshf6102ee0835e9eap18317djsn86fccc3a4b95