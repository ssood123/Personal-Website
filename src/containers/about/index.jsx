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
        value: "John Doe",
    },
    {
        label: "Age",
        value: "25"
    },
    {
        label: "Address",
        value: "USA "
    },
    {
        label: "Email",
        value: "demo@example.com"
    },
    {
        label: "Contact No",
        value: "+111"
    }
]

const jobSummary = "Seasoned and intendepent Front End Developer with 2 years of experience"

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
                        delay={1}
                        start={{
                            transform: "translateX(-900px)"
                        }}
                        end={{
                            transform: "translatex(0px)"
                        }}
                    >
                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1}
                        delay={1}
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