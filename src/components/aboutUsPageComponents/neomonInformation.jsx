import fonts from "../fonts/fonts.module.scss"

const information = () => {
    return (
        <div className="flex flex-col items-center bg-[#F7F7F7] py-[80px]">
           <div className="w-[1166px]">
           <span className={`${fonts.bigCardDescription} mb-[28px]`} style={{alignItems: "justify"}}>Noemon stands out in the smart home system installation industry for several compelling reasons that make us the premier choice for transforming homes into technologically advanced and convenient spaces.</span>
            
            <p className={`${fonts.neomonInfo}`}>Expertise and Innovation:</p>
            <p className={`${fonts.bigCardDescription} mb-[28px]`}>Noemon boasts a team of seasoned experts well-versed in the latest smart home technologies.</p>

            <p className={`${fonts.neomonInfo}`}>Tailored Solutions:</p>
            <p className={`${fonts.bigCardDescription} mb-[28px]`}>Unlike a one-size-fits-all approach, Noemon prioritizes understanding each client&apos;s lifestyle and preferences.</p>

            <p className={`${fonts.neomonInfo}`}>Comprehensive Offerings:</p>
            <p className={`${fonts.bigCardDescription} mb-[28px]`}>Noemon doesn’t just install smart home devices; we offer comprehensive solutions covering security, lighting, climate control, entertainment, and more.</p>

            <p className={`${fonts.neomonInfo}`}>Reliability and Support:</p>
            <p className={`${fonts.bigCardDescription} mb-[28px]`}>We prioritize clear communication, reliable service, and ongoing support, ensuring that clients feel confident and supported throughout the installation process and beyond.</p>

            <p className={`${fonts.neomonInfo}`}>Cutting-edge Technology:</p>
            <p className={`${fonts.bigCardDescription} mb-[28px]`}>This commitment to innovation means clients benefit from state-of-the-art systems that evolve with the rapidly changing tech landscape.</p>

            <p className={`${fonts.neomonInfo}`}>Seamless Integration:</p>
            <p className={`${fonts.bigCardDescription} mb-[28px]`}>Noemon excels in seamlessly integrating different smart devices into cohesive systems.</p>

            <p className={`${fonts.neomonInfo}`}>Scalability and Future-proofing:</p>
            <p className={`${fonts.bigCardDescription}`}>As technology advances, we ensure systems can be easily expanded or upgraded, future-proofing homes and keeping clients at the forefront of smart home innovation.</p>
           </div>
        </div>
    )
}

export default information