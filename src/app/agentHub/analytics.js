

const Card = ({ data }) => {
    const { p, h2, span } = data
    return (
        <div className="p-6 shadow border rounded-xl flex flex-col gap-2">
            <p className="text-[#0C0839] opacity-80 font-medium text-lg 2xl:text-xl">{p}</p>
            <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold 2xl:text-4xl">{h2}</h2>
                <span className={`px-4 py-1.5 rounded-full  font-medium 2xl:text-base ${span[0] == "-" ? "text-[#F06565] bg-[#FDF7F7]" : "text-[#27AE60] bg-[#27AE601A]"} `}>{span}</span>
            </div>
        </div>
    )
}



const Analytics = () => {

    const cards = [
        {
            p: "Total Revenue",
            h2: "$14,437",
            span: "+$235",
        },
        {
            p: "Transactions",
            h2: "1,915",
            span: "+20",
        },
        {
            p: "Properties",
            h2: "784",
            span: "+$235",
        },
        {
            p: "Profit Generated",
            h2: "90%",
            span: "-3%",
        },

    ]


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {
                cards.map((card, index) => <Card key={index} data={card} />)
            }
        </div>
    )
}

export default Analytics