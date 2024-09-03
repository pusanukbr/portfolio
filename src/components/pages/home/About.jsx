import React from 'react';
import {Trans, useTranslation} from "react-i18next";
import AboutImage from '../../../img/about.png';
import Dots from "../../../img/Dots.svg";

const About = () => {
    const { t } = useTranslation();
    return (
        <div style={{'--bgImages': `url('${Dots}')`}} className="w-full flex items-center justify-center relative mb-[180px]
        after:contain-content after:flex after:absolute after:left-[-100px] after:top-1/2 after:translate-y-[-50%] after:w-[155px] after:h-[155px] after:border after:border-grey
         before:contain-content before:flex before:absolute before:right-[-35px] before:top-[20%] before:w-[91px] before:h-[91px] before:bg-[image:var(--bgImages)] before:bg-center before:bg-no-repeat">
            <div className="container">
                <div className="w-full flex items-center mb-[24px]">
                    <h2 className="text-[32px] text-white mr-[16px] lowercase">
                        <span className="text-primary">#</span>{t('about-title')}
                    </h2>
                    <hr className="w-1/4 text-primary" />
                </div>
                <div className="flex flex-wrap items-start justify-center">
                    <style>{`
                        .text-p > p {
                            margin-bottom: 26px;
                        }
                    `}</style>
                    <div className="flex flex-col  items-start w-[60%] text-grey text-p">
                        <Trans i18nKey="for-me-short" />
                        <a className="flex px-[16px] py-[8px] border border-primary text-white bg-none hover:bg-primary/20" href="/">{t('more')}</a>
                    </div>
                    <div className="w-[40%]">
                        <img src={AboutImage} alt="about"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;