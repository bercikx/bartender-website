export function Gallery() {
    return (
        <>
            <div className='w-full h-[100vh] flex flex-col items-center overflow-hidden'>
                <div>
                    <div className='flex items-center mb-[5rem] w-full mx-auto justify-center'>
                        <div className='w-[350px] h-[1px] bg-greySecond'></div>
                        <div className='flex flex-col items-center mx-[3rem]'>
                            <p className='mb-[0.25rem]'>GALERIA ZDJĘC</p>
                            <h2 className='font-bold text-[30px] text-center'>Fotografie naszych <br/> dotychczasowych <span className='text-oragneMain'>dokonań.</span></h2>
                        </div>
                        <div className='w-[330px] h-[1px] bg-greySecond'></div>
                    </div>
                    <div className='flex w-full'>
                        <div className='mx-3 -mt-6'>
                            <div className='w-[320px] h-[240px] bg-greySecond mb-6'></div>
                            <div className='w-[320px] h-[240px] bg-greySecond'></div>
                        </div>
                        <div className='mx-3'>
                            <div className='w-[320px] h-[240px] bg-greySecond mb-6'></div>
                            <div className='w-[320px] h-[240px] bg-greySecond'></div>
                        </div>
                        <div className='mx-3 -mt-6'>
                            <div className='w-[320px] h-[240px] bg-greySecond mb-6'></div>
                            <div className='w-[320px] h-[240px] bg-greySecond'></div>
                        </div>
                        <div className='mx-3'>
                            <div className='w-[320px] h-[240px] bg-greySecond mb-6'></div>
                            <div className='w-[320px] h-[240px] bg-greySecond'></div>
                        </div>
                        <div className='mx-3 -mt-6'>
                            <div className='w-[320px] h-[240px] bg-greySecond mb-6'></div>
                            <div className='w-[320px] h-[240px] bg-greySecond'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}