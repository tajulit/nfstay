const TableForm = ({ columns, rows, pagination }) => {
    const cellPercentage = 100 / columns?.length;

    return (

        <>
            <div className="overflow-x-auto w-full">
                <table className="w-full min-w-full shrink-0 whitespace-nowrap">
                    {/* Table Header */}
                    <thead>
                        <tr className="text-sm text-[#0C0839] opacity-40 2xl:text-lg">
                            {columns.map((column, key) => (
                                <th
                                    key={key}
                                    className={`text-center p-4`}
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {/* Table Rows */}
                    <tbody >
                        {rows()}
                    </tbody>
                </table>
            </div >
                {pagination && pagination()}
        </>

    );
};

export default TableForm;
