import React from 'react';
import SkillImg from '../../../img/Skills.svg';
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();
    const skills = [
        { key: 'languages', listKey: 'languagesList' },
        { key: 'frameworks', listKey: 'frameworksList' },
        { key: 'other', listKey: 'otherList' },
        { key: 'databases', listKey: 'databasesList' },
        { key: 'tools', listKey: 'toolsList' },
    ];

    return (
        <div className="w-full flex items-center justify-center relative mb-[110px]">
            <div className="container">
                <div className="w-full flex items-center mb-[48px]">
                    <h2 className="text-[32px] text-white mr-[16px] lowercase">
                        <span className="text-primary">#</span>{t('skills.title')}
                    </h2>
                    <hr className="w-1/4 text-primary" />
                </div>
                <div className="flex">
                    <div className="w-[35%]">
                        <img src={SkillImg} alt="skillsImg" className="w-full"/>
                    </div>
                    <div className="w-[65%] flex flex-wrap gap-[16px] items-start justify-end">
                        {skills.map((skill, index) => (
                            <div key={index} className="max-w-[30%]  border border-grey">
                                <h3 className="text-white p-[8px]">{t(`skills.${skill.key}`)}</h3>
                                <p className="text-grey p-[8px] border-t border-grey">{t(`skills.${skill.listKey}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;