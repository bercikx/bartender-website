import bartenderHero from '../assets/graphics/bartenderHero.svg';
import downArrow from '../assets/icons/arrows/arrBlackShortIconD.svg';
import arrowRightIcon from "../assets/icons/arrows/arrWhiteLongIconR.svg";
import arrowRightBlackIcon from "../assets/icons/arrows/arrBlackLongIconR.svg";

export function Header() {
    return (
        <>
            <div className="w-full h-[120vh] flex flex-1 items-center -mt-[8rem] bg-bgWhite font-medium px-[4.375rem]">
                <div>
                    <p className='animate-slidein [--slidein-delay:1800ms] opacity-0 text-oragneMain font-normal border w-[18rem] justify-center items-center flex rounded-full py-1 my-4 '>#1
                        Mobilni specjaliści od drinków</p>
                    <div
                        className="animate-slidein [--slidein-delay:1800ms] opacity-0 font-bold text-[48px] [text-wrap:balance] bg-clip-text
                        text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 leading-[60px]">Wy się bawicie, my
                        tworzymy<br/>
                        <span
                            className="inline-flex flex-col h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block text-greyMain">
                        <li>Niezapomniane chwile!</li>
                        <li>Najsmaczniejsze drinki!</li>
                        <li>Super zabawę!</li>
                        <li>Wspaniałe wspomnienia!</li>
                        <li>Długie noce!</li>
                        <li aria-hidden="true">Niezapomniane chwile!</li>
                    </ul>
                </span></div>
                    <p className='animate-slidein [--slidein-delay:2600ms] opacity-0 max-w-[665px] xl:text-[16px] lg:text-[14px] font-light text-greyMain xl:my-6 lg:my-6 lg:max-w-[600px] xl:max-w-[650px]'>The
                        king, seeing how much
                        happier his subjects were,
                        realized the error of his ways and repealed the joke
                        tax. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut quis est sed odio porta consectetur. Sed
                        tincidunt est.</p>
                    <div className='animate-slidein [--slidein-delay:3000ms] opacity-0 flex items-center'>
                        <button className='flex xl:mr-4 xl:py-5 xl:px-12 xl:text-[16px] lg:mr-1 lg:py-4 lg:px-10 lg:text-[14px] bg-oragneMain
                        items-center justify-center font-medium text-white hover:bg-darkOrange transition ease-in'>
                            Wynajmij nas na swoją okazję
                            <img src={arrowRightIcon} className='ml-5 w-6'/></button>
                        <button
                            className='flex xl:py-5 xl:px-12 xl:text-[16px] lg:py-4 lg:px-10 lg:text-[14px] items-center justify-center font-medium text-blackMain'>
                            Skontaktuj się z nami
                            <img src={arrowRightBlackIcon} className='ml-5 w-6'/></button>
                    </div>
                </div>
                <img src={bartenderHero}
                     className='animate-slidein [--slidein-delay:3000ms] opacity-0 sm:hidden md:hidden lg:flex lg:absolute right-0 -bottom-[2.6rem] w-[655px] h-[720px] -z-10'/>
                <a href="#about"><img src={downArrow}
                                      className={'animate-slidein [--slidein-delay:3000ms] opacity-0 absolute left-[50%] bottom-10 w-8 transition-transform duration-300 hover:scale-[1.20] ease-in-out'}/></a>
            </div>
        </>
    )
}