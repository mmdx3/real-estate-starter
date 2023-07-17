import { createContext, useEffect, useState } from "react";
import { housesData } from "../data";

export const houseList = createContext();

const HouseProvide = ({ children }) => {
    const [houses, sethouseData] = useState(housesData);
    const [country, setCountry] = useState('location (any)');
    const [Countries, setCountries] = useState([]);
    const [Property, setProperty] = useState('property type (any)');
    const [Properties, setProperties] = useState([]);
    const [Price, setPrice] = useState('price range (any)');
    const [Loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);
    window.addEventListener('load', () => {
        setTimeout(() => {
            setLoadingPage(false);
        }, 500);
    });
    // with 451 height 294 md 736 h 480 lg 560 h 364 xl 700 h 456 72 h 72
    useEffect(() => {
        const Allcountries = houses.map(house => {
            return house.city
        })
        const UniqueCountries = ['Location (any)', ...new Set(Allcountries)];
        setCountries(UniqueCountries);
    }, [houses]);
    useEffect(() => {
        const Allproperties = houses.map(house => {
            return house.type
        })

        const Uniqueproperties = ['property type (any)', ...new Set(Allproperties)];
        setProperties(Uniqueproperties);

    }, [houses]);

    const HandleClicke = () => {
        setLoading(true);
        const isDefualt = (str) => {
            return str.split(' ').includes('(any)');
        }
        const minPrice = parseInt(Price.split(' ')[0]);
        const MaxPrice = parseInt(Price.split(' ')[2]);

        const newHouses = housesData.filter((house) => {
            const PriceHouse = parseInt(house.price);
            if (isDefualt(country) && isDefualt(Price) && isDefualt(Property)) {
                return house;
            }
            if (house.city === country
                && house.type === Property
                && PriceHouse >= minPrice &&
                PriceHouse <= MaxPrice) {
                return house;
            }
            if (!isDefualt(country) && isDefualt(Price) && isDefualt(Property)) {
                return house.city === country;
            }
            if (!isDefualt(Property) && isDefualt(Price) && isDefualt(country)) {
                return house.type === Property;
            }
            if (!isDefualt(Price) && isDefualt(country) && isDefualt(Property)) {
                if (PriceHouse >= minPrice && PriceHouse <= MaxPrice) {
                    return house;
                }
            }
            if (!isDefualt(country) && !isDefualt(Property) && isDefualt(Price)) {
                return house.city === country && house.type === Property;
            }
            if (!isDefualt(country) && isDefualt(Property) && !isDefualt(Price)) {
                return house.city === country && PriceHouse >= minPrice && PriceHouse <= MaxPrice;
            }
            if (isDefualt(country) && !isDefualt(Property) && !isDefualt(Price)) {
                return house.type === Property && PriceHouse >= minPrice && PriceHouse <= MaxPrice;
            }
        })

        setTimeout(() => {
            setLoading(false)
            return newHouses.length < 1 ? sethouseData([]) :
                sethouseData(newHouses);
        }, 1000);
    };

    return <houseList.Provider value={{
        houses, sethouseData, country, setCountry, Countries, setCountries, Property, setProperty, Properties, setProperties
        , Price, setPrice, Loading, setLoading, HandleClicke, loadingPage
    }}>{children}</houseList.Provider>

}

export default HouseProvide 