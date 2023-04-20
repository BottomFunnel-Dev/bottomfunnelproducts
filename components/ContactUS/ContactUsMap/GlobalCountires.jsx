import React from 'react';
import styles from "./GlobalCountries.module.css";

const GlobalCountries = () => {

    const data = [
        {
            img: "/Images/NewTaxiBookingImage/GlobalIndiaImage.png",
            title: "India",
            icon: "/Images/NewTaxiBookingImage/LocationImage.png",
            address: "JTM Mall, Office no. 422, 4th floor, Jagatpura, Rajasthan 302025",
        },
        {
            img: "/Images/NewTaxiBookingImage/GlobalUAEImage.png",
            title: "UAE",
            icon: "/Images/NewTaxiBookingImage/LocationImage.png",
            address: "1210, The Regal Tower, Near Business Bay, Dubai, U.A.E",
        },
        {
            img: "/Images/NewTaxiBookingImage/GlobalAmericaImage.png",
            title: "United States",
            icon: "/Images/NewTaxiBookingImage/LocationImage.png",
            address: "800 3rd Ave New York, NY 10022 United States",
        },
        {
            img: "/Images/NewTaxiBookingImage/GlobalZambiaImage.png",
            title: "Zambia",
            icon: "/Images/NewTaxiBookingImage/LocationImage.png",
            address: "House no. 3 Nikanchibaya Rd, Luska, Zambia",
        },
    ]

    return (
        <>
            <div className={styles.globalCountiresMainDiv}>
                <h2> Global Countries We Serve</h2>

                <div className={styles.globalCountriesMainCOntentDiv}>
                    <div className={styles.globalContriesInnerContentDiv}>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={styles.globalCountriesFlagDiv}
                                style={{ "--i": `${item.color}` }}
                            >
                                <div className={styles.countriesFlagDiv}>
                                    <img src={item.img} alt="country flag image" />
                                    <h5>{item.title}</h5>
                                </div>

                                <div className={styles.globalCountryLocationDiv}>
                                    <img src={item.icon} alt="location image" />
                                    <p>{item.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlobalCountries;