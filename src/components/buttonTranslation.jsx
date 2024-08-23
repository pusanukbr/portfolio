import React from 'react';
import { useTranslation } from 'react-i18next';

const ButtonTranslation = () => {
    const { t, i18n: i18nInstance } = useTranslation(); // Get i18n instance

    const changeLanguage = async (lang) => {
        try {
            await i18nInstance.changeLanguage(lang);
        } catch (err) {
            console.error('Error changing language:', err);
        }
    };
    return (
            <div className="languageBlock">
                <ul>
                    <li onClick={() => changeLanguage('en')}>{t('en')}</li>
                    <li onClick={() => changeLanguage('ua')}>{t('ua')}</li>
                    <li onClick={() => changeLanguage('pl')}>{t('pl')}</li>
                </ul>
            </div>
    );
}

export default ButtonTranslation;