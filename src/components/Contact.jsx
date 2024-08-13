export function Contact() {
    return (
        <>
            <div className='flex justify-center items-center w-full h-[100vh]'>
                    <div className='bg-orangeThird w-[650px] h-full flex flex-col'>
                        <div className='h-[15%] mt-[2.25rem] ml-[4.5rem]'>
                            <button className='flex xl:mr-4 xl:py-5 xl:px-12 xl:text-[16px] lg:mr-1 lg:py-4 lg:px-10
                                lg:text-[14px] bg-oragneMain
                                items-center justify-center font-medium text-white hover:bg-darkOrange transition ease-in'>
                                Wynajmij nas na swoją okazję
                            </button>
                        </div>
                        <div className='h-[30%] ml-[4.5rem]'>
                            <p className='mb-[0.25rem]'>OPINIE KLIENTÓW I KONTAKT</p>
                            <h1 className='font-bold text-[30px]'>Twoja opinia ma znaczenie,<br/>
                                pomóż nam się doskonalić.</h1>
                            <p className='mx-auto text-[14px] text-greyMain font-normal mt-3'>We understand the value of client feedback in shaping<br/>
                                businesses for success.</p>
                        </div>
                        <div className='overflow-hidden flex flex-col justify-center items-center h-[35%]'>
                            <div className='flex justify-center items-center flex-row'>
                                <div className='w-[300px] h-[140px] bg-white'></div>
                                <div className='w-[360px] h-[180px] bg-white mx-7'></div>
                                <div className='w-[300px] h-[140px] bg-white'></div>
                            </div>
                            <div className='flex justify-center items-center mt-7'>
                                <div className='w-[15px] h-[15px] rounded-full bg-oragneMain'></div>
                                <div className='w-[15px] h-[15px] rounded-full bg-oragneMain mx-2'></div>
                                <div className='w-[15px] h-[15px] rounded-full bg-oragneMain'></div>
                            </div>
                        </div>
                    </div>
                <div className='flex w-[100%] bg-white h-full'>
                        <div></div>
                        <form></form>
                    </div>
            </div>
        </>
)
}