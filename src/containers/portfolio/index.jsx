import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import "./styles.scss";

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    const portfolioData = [
        {
            id: 2,
            name: "Project Emphy",
            image: image1,
            link: 'https://github.com/ssood123/Project-Emphy'
        },
        {
            id: 3,
            name: "Tilt-Motion Snake",
            image: image2,
            link: 'https://github.com/ssood123/Tilt-Motion-Snake'
        }
    ];

    const filterData = [
        {
            filterId: 1,
            label: "All"
        },
        {
            filterId: 2,
            label: "Python"
        },
        {
            filterId: 3,
            label: "Java"
        }
    ];

    const handleFilter = (currentId) => {
        setFilteredValue(currentId);
    }

    const handleHover = (index) => {
        setHoveredValue(index);
    }

    const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue);
    console.log("test", hoveredValue);
    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map((item) => (
                            <li className={item.filterId === filteredValue ? "active" : ""} key={item.filterId} onClick={() => handleFilter(item.filterId)}>
                                {
                                    item.label
                                }

                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item, index) => (
                            <div className="portfolio__content__cards__item"
                                key={item.name}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}>
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img src={item.image} />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <a target="_blank" href={item.link}><button>Visit</button></a> 
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Portfolio;