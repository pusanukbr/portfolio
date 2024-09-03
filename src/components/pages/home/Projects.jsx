import React from 'react';
import projectImg_1 from '../../../img/project.png';
import Dots from '../../../img/Dots.svg';
import { useTranslation } from "react-i18next";

const Projects = () => {
    const projectsName = ['portfolio', 'calculator'];
    const { t } = useTranslation();

    return (
        <div style={{'--bgImages': `url('${Dots}')`}} className="w-full h-full flex items-center justify-center relative mb-[110px]
         after:contain-content after:flex after:absolute after:right-[-100px] after:top-1/2 after:translate-y-[-50%] after:w-[155px] after:h-[155px] after:border after:border-grey
         before:contain-content before:flex before:absolute before:left-[-35px] before:top-[20%] before:w-[91px] before:h-[91px] before:bg-[image:var(--bgImages)] before:bg-center before:bg-no-repeat"
        >
            <div className="container">
                <div className="w-full flex items-center mb-[48px]">
                    <h2 className="text-[32px] text-white mr-[16px]">
                        <span className="text-primary">#</span>{t('projects').toLowerCase()}
                    </h2>
                    <hr className="w-1/2 text-primary" />
                    <a className="ml-auto text-white hover:underline underline-offset-1" href="/">
                        {t('view-all')} ~~>
                    </a>
                </div>
                <div className="flex justify-center items-start gap-[16px]">
                    {projectsName.map((project, index) => (
                        <div key={index} className="flex-1 border border-grey">
                            <div className="w-full h-[200px] overflow-hidden"><img src={projectImg_1} alt="project" className="object-cover" /></div>
                            <p className="flex flex-wrap text-grey uppercase p-[8px] border-t border-grey">{t(`projects-obj.${project}.tag`)}</p>
                            <div className="flex flex-col items-start border-t border-grey p-[16px]">
                                <h3 className="text-white text-[24px] mb-[16px]">{t(`projects-obj.${project}.title`)}</h3>
                                <p className="text-grey mb-[16px]">{t(`projects-obj.${project}.desc`)}</p>
                                <a className="flex px-[16px] py-[8px] border border-primary text-white bg-none hover:bg-primary/20" href={t(`projects-obj.${project}.link`)}>
                                    {t(`projects-obj.${project}.name-link`)} &#60;~&#62;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;