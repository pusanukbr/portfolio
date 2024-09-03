import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from "./Icon";

const ButtonTranslation = () => {
    const { t, i18n: i18nInstance } = useTranslation(); // Get i18n instance
    const [langLocal, setLangLocal] = useState('en');
    const [toggle, setToggle] = useState(false);
    const ref = useRef(null);

    const changeLanguage = async (lang) => {
        try {
            await i18nInstance.changeLanguage(lang);
            setLangLocal(lang);
        } catch (err) {
            console.error('Error changing language:', err);
        }
    };

    const onToggle = () => {
        setToggle(!toggle);
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setToggle(false);
        }
    };

    useEffect(() => {
        setLangLocal(i18nInstance.language);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={ref} className="uppercase relative cursor-pointer" onClick={() => onToggle()}>
            <div className="flex items-center">
                <span className="mr-[5px] select-none">{langLocal}</span>
                <span className={toggle && 'rotate-180'}><Icon name='arrow' width='10' height='7'/></span>
            </div>
            { toggle &&
                <ul className="flex flex-col gap-y-[8px] absolute right-0 p-[8px] border border-grey">
                    <li className={langLocal === "en" ? "bg-primary/20" : "hover:bg-primary/20"} onClick={() => changeLanguage('en')}>{t('en')}</li>
                    <li className={langLocal === "ua" ? "bg-primary/20" : "hover:bg-primary/20"} onClick={() => changeLanguage('ua')}>{t('ua')}</li>
                    <li className={langLocal === "pl" ? "bg-primary/20" : "hover:bg-primary/20"} onClick={() => changeLanguage('pl')}>{t('pl')}</li>
                </ul>
            }
        </div>
    );
}

export default ButtonTranslation;