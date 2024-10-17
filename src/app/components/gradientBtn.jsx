

const GradientBtn = ({ text,handleClick, width="a-fit",size="", radius="rounded-full" }) => {
    return (
        <button onClick={handleClick} className={`${width} ${size} border btn_primary_gradient 2xl:text-lg whitespace-nowrap ${radius} px-6 py-1.5 font-medium text-white`}>
           { text}
        </button>
    )
}

export default GradientBtn