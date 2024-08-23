import React, {useEffect, useState} from 'react';
import Icon from "../../Icon";

const Quote = () => {
    const iconQuote = <Icon name='QUOTE' width='42' height='30'/>;
    const [quoteRandom, setQuoteRandom] = useState();
    const url = 'https://gist.githubusercontent.com/pusanukbr/643525ad219e66ace596ca4df24940e9/raw/30a37e897b5fab0540bb1c8c6402873d3152482f/quote.json'
    useEffect(() => {
        fetch(url)
            .then(res => res.json()).then((data) => {
                const randomQuote = Math.floor(Math.random() * data.length);
                setQuoteRandom(data[randomQuote])
        })
    }, []);

    return (
        <div className='
                w-full flex items-center justify-center relative
                after:contain-content after:flex after:absolute after:right-[-15px] after:top-1/2 after:translate-y-[-50%] after:w-[91px] after:h-[91px] after:border after:border-grey'>
            <div className='container flex flex-col items-center justify-center  max-w-[700px]'>
                {quoteRandom &&
                    <>
                    <div className='relative p-[32px] border border-grey'>
                        <div
                            className='absolute top-[-15px] left-[14px] z-10
                         after:contain-content after:flex
                         after:absolute after:bg-bg
                         after:w-[120%] after:h-[120%]
                         after:top-[-10%] after:left-[-10%]
                         after:-z-10'>
                            {iconQuote}
                        </div>
                        <p className='text-white text-[24px]'>
                            {quoteRandom?.quote}
                        </p>
                        <div className='absolute bottom-[-15px] right-[14px] z-10
                         after:contain-content after:flex
                         after:absolute after:bg-bg
                         after:w-[120%] after:h-[120%]
                         after:top-[-10%] after:left-[-10%]
                         after:-z-10'>
                            {iconQuote}
                        </div>
                    </div>
                    <div className='p-[32px] border border-grey border-t-0 self-end'>
                        <p className='text-white text-[24px]'>
                            - {quoteRandom?.author || 'Unknown'}
                        </p>
                    </div>
                    </>
                }

            </div>
        </div>
    );
};

export default Quote;