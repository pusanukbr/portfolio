import React from 'react';
import Computer from '../../../img/WorkOnComputer.png'

const Main = () => {
    return (
        <div className='w-full h-full flex items-center justify-center max-h-[500px] my-[120px]'>
            <div className='container flex'>
                <div className='flex flex-col items-start gap-y-[32px] w-1/2 text-white'>
                    <h1 className='text-[32px]'>Elias is a <span className='text-primary'>web designer</span> and <span
                        className='text-primary'>front-end developer</span></h1>
                    <p className='text-[16px] text-grey'>He crafts responsive websites where technologies meet
                        creativity</p>
                    <button className='py-[8px] px-[16px] bg-none hover:bg-primary/20 border border-primary'>Contact
                        me!!
                    </button>
                </div>
                <div className='w-1/2'>
                    <img src={Computer} alt='Work On Computer'/>
                    <div className='flex items-center w-full p-[8px] border border-grey'><span
                        className='flex w-[16px] h-[16px] bg-primary mr-[10px]'/> <p className='text-grey'>Currently
                        working on <a href='/' className='text-white hover:underline underline-offset-1'>Portfolio</a>
                    </p></div>
                </div>
            </div>

        </div>
    );
};

export default Main;