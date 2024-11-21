import React, { forwardRef } from 'react';

const distanceData = [
    { place: "Vyttila Metro Station", destance: "1 K.m" },
    { place: "Water Metro", destance: "1 K.m" },
    { place: "Mobility Hub", destance: "1 K.m" },
    { place: "Welcare Hospital", destance: "1.5 K.m" },
    { place: "Bismi Hyper Market", destance: "1.5 K.m" },
    { place: "Bavance Vidya Mandir", destance: "1.7 K.m" },
    { place: "Vyttila Jn", destance: "1.4 K.m" },
    { place: "Choice School", destance: "4 K.m" },
    { place: "TOC-H School", destance: "4 K.m" },
    { place: "EMC Hospital", destance: "6.2 K.m" },
    { place: "Lakeshore Hospital", destance: "1.5 K.m" },

    { place: "Lulu Mall", destance: "9 K.m" },
]
const mapEmbedHTML = `
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125745.80982497017!2d76.328979!3d9.970803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087366c2bc6b23%3A0x64d181751409c26d!2sNational%20Treedom%20Park!5e0!3m2!1sen!2sin!4v1732098804087!5m2!1sen!2sin" 
            
            style="border:0;" 
            allowfullscreen 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    `;
const Distances = forwardRef((props, ref) => {
    return (
        <section ref={ref} className='py-[30px] lg:py-[60px] w-[90%] lg:w-[70%] mx-auto flex flex-col gap-[20px] lg:gap-[40px]'>
            <p className='font-quicksand-bold text-[26px] lg:text-[36px]'>Easy Access To</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[30px]'>
                <div
                    dangerouslySetInnerHTML={{ __html: mapEmbedHTML }}
                    className="map-container" />
                <div className='flex flex-col gap-[10px] justify-center'>
                    {distanceData.map((item, index) => (
                        <div className='flex flex-row items-center justify-center gap-[20px]'>
                            <p className='font-inter-medium text-[14px] lg:text-[16px] text-nowrap'>{item?.place}</p>
                            <hr className='w-full border border-[#2b2d42]' />
                            <p className='font-inter-medium text-[14px] lg:text-[16px] text-nowrap'>{item?.destance}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
});

export default Distances