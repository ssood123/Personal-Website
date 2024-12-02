import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './styles.scss'
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
    {
        label: "Name",
        value: process.env.REACT_APP_NAME
    },
    {
        label: "Age",
        value: process.env.REACT_APP_AGE
    },
    {
        label: "Address",
        value: process.env.REACT_APP_ADDRESS
    },
    {
        label: "Email",
        value: process.env.REACT_APP_EMAIL
    },
    {
        label: "Contact Number",
        value: process.env.REACT_APP_PHONE_NUMBER
    }
]

const jobSummary = "I'm a seasoned and independent front-end developer with about 2 years of experience. In the past, I've worked at HPE (Hewlett Packard Enterprise)."

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1}
                        start={{
                            transform: "translateX(-900px)"
                        }}
                        end={{
                            transform: "translatex(0px)"
                        }}
                    >
                        <h3>Front-End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1}
                        start={{
                            transform: "translateX(-900px)"
                        }}
                        end={{
                            transform: "translatex(0px)"
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1}
                        start={{
                            transform: "translateX(600px)"
                        }}
                        end={{
                            transform: "translatex(0px)"
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}

export default About;