import arrowRightIcon from "@/assets/icons/arrows/arrWhiteLongIconR.svg";

export function Pircing() {
    return (
        <>
            <div className='w-full h-[100vh] items-center flex flex-col -mt-[8rem] font-medium px-[4.375rem]'>
                <div className='flex h-[20vh] w-full justify-between items-center mb-[6rem] mt-[2.5rem]'>
                    <div>
                        <p className='text-[14px] text-greyMain font-normal'>WYKAZ ŚWIADCZONYCH USŁUG</p>
                        <h2 className='font-bold text-[30px] max-w-[500px]'>Propozycje zestawów barmańskich, które mogą was zainteresować.</h2>
                        <p className='max-w-[615px] text-greyMain font-normal text-[16px]'>The king, seeing how much happier his subjects were, realized the error
                            of his ways and repealed the joke tax. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut quis est sed odio porta consectetur.
                            Sed tincidunt est.</p>
                    </div>
                    <div className='flex items-end h-[183px]'>
                        <button className='flex xl:py-5 xl:px-12 xl:text-[16px] lg:py-4 lg:px-10 lg:text-[14px] bg-oragneMain
                        items-center justify-center font-medium text-white hover:bg-darkOrange transition ease-in'>
                            Skontaktuj się z nami
                            <img src={arrowRightIcon} className='ml-5 w-6'/></button>
                    </div>
                </div>
                <div className='w-full h-[80vh] flex'>
                    <div className='w-[440px] h-[480px] bg-greyMain mt-[2rem]'>
                        <div className='flex flex-col'>
                            <div className='flex mx-auto'>
                                <p className='pr-2'>Icon</p>
                                <h2>Pakiet Podstawowy</h2>
                            </div>
                            <p className='mx-auto'>Realized the error of his ways.</p>
                        </div>
                        <p className='flex mx-auto text-center my-4'>Nasza firma oferuje precyzyjne i staranne usługi detailingu, korzystając z
                            najwyższej jakości produktów i nowoczesnych technik. Gwarantujemy
                            długotrwałą ochronę dla samochodu.</p>
                        <div className='mx-auto flex flex-col'>
                            <div className='flex mx-auto'>
                                <p className='pr-2'>Icon</p>
                                <p>Następny nie potrzebny wypełniacz tekstu</p>
                            </div>
                            <div className='flex mx-auto'>
                                <p className='pr-2'>Icon</p>
                                <p>Następny nie potrzebny wypełniacz tekstu</p>
                            </div>
                            <div className='flex mx-auto'>
                                <p className='pr-2'>Icon</p>
                                <p>Następny nie potrzebny wypełniacz tekstu</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-end mx-auto h-[215px]'>
                            <button className='flex xl:py-5 xl:px-12 xl:text-[16px] lg:py-4 lg:px-10 lg:text-[14px] bg-oragneMain
                            items-center justify-center font-medium text-white hover:bg-darkOrange transition ease-in'>
                                Skontaktuj się z nami
                                <img src={arrowRightIcon} className='ml-5 w-6'/></button>
                        </div>
                    </div>
                    <div className='w-[420px] h-[480px] bg-orangeSecond'>
                        tekst
                    </div>
                    <div className='w-[440px] h-[480px] bg-greyMain mt-[2rem]'>
                        tekst
                    </div>
                </div>
            </div>
        </>
    )
}