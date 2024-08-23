import React from 'react';
import Icon from "./Icon";

const Social = () => {
    const socialName = ['Github', 'LinkedIn', 'Telegram', 'Threads']
    return (
        <div className='
        fixed pt-[200px] top-0 left-[17px]
        before:block before:absolute
        before:w-[2px] before:h-[190px]
        before:top-0 before:left-[16px]
        before:bg-grey
        overflow-hidden
         '>
            <ul className='flex flex-col items-start gap-[8px]'>
                {socialName.map((name, index) => {
                    return (
                        <li className='group/item' key={index}>
                            <a href="/" className='flex items-center text-grey'>
                                <Icon name={name.toLocaleUpperCase()} width='32' height='32'/>
                                <span className='
                            translate-x-[-100%] invisible w-0
                            opacity-0 group-hover/item:visible
                            group-hover/item:opacity-100
                            group-hover/item:translate-x-0
                            group-hover/item:w-auto
                            ease-in-out duration-300'>{name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Social;