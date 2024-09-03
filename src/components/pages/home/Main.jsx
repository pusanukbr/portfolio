import React from 'react';
import Computer from '../../../img/WorkOnComputer.png';
import { Trans, useTranslation } from 'react-i18next';

const Main = () => {
    const { t } = useTranslation();
    return (
        <div className='w-full h-full flex items-center justify-center max-h-[500px] my-[120px]'>
            <div className='container flex'>
                <div className='flex flex-col items-start gap-y-[32px] w-1/2 text-white'>
                    <h1 className='text-[32px]'>
                        <Trans i18nKey="main-title">
                            Pysaniuk is a <span className="text-primary">middle front-end developer</span> from <span className="text-primary">Ukraine</span>
                        </Trans>
                    </h1>
                    <p className='text-[16px] text-grey'>{t('main-desc')}</p>
                    <button className='py-[8px] px-[16px] bg-none hover:bg-primary/20 border border-primary'>
                        {t('main-button')}
                    </button>
                </div>
                <div className='w-1/2 flex flex-col'>
                    <img className="self-center" src={Computer} alt='Work On Computer' />
                    <div className='flex items-center w-full p-[8px] border border-grey'>
                        <span className='flex w-[16px] h-[16px] bg-primary mr-[10px]' />
                        <p className='text-grey'>
                            <Trans i18nKey="main-portfolio">
                                Currently working on <a href='/' className='text-white hover:underline underline-offset-1'>Portfolio</a>
                            </Trans>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;