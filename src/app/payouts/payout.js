import PaginatedTable from "@/utils/paginatedTable"



const Payout = () => {
    const headers = ["Property Name", "Date", "Price", "NFTs Owned", "Payout", "Status", ""]
    const data = [
        {
            property: "Property 1",
            logo: "https://s3-alpha-sig.figma.com/img/1758/b069/81aa33a0c41b8c8fd47a0e06d0169669?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GYkVHGYBEylzCB7kl5IgKXioNqlktYSR1qYh9YaiDesu6i3dTS7SNU5erfpzhNrMHi3GCMtU~E3K-NBxtM8sGKXNduYiOMUpZb9NrJ7IeBF1zY3ga2W1EGuHpRxa3BzpDBFFo9pq-YcLM-tGaznOxoIkHCrXcrCRnwy9rGI7Lu8Vy7O50PZ7scfhqst-BfYu6Rm5VksNMJsgy0le0V1sMkhsRoloH0Yu29MgmO3QMQfc-hksXU-S6U85ZyRMJoEuMsnku3V4367VlNJwsSZSQ43OHzOR2xHqwk7qd7mO8S7ZqoEBMvFJ0TyWcIBP7H~CI5zX4p-RmarFC9MkO2eGSA__",
            date: "12/12/2021",
            price: "$1000",
            nfts: "50/1000",
            payout: "$100",
            status: "Pending",
        },
        {
            property: "Property 2",
            logo: "https://s3-alpha-sig.figma.com/img/1758/b069/81aa33a0c41b8c8fd47a0e06d0169669?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GYkVHGYBEylzCB7kl5IgKXioNqlktYSR1qYh9YaiDesu6i3dTS7SNU5erfpzhNrMHi3GCMtU~E3K-NBxtM8sGKXNduYiOMUpZb9NrJ7IeBF1zY3ga2W1EGuHpRxa3BzpDBFFo9pq-YcLM-tGaznOxoIkHCrXcrCRnwy9rGI7Lu8Vy7O50PZ7scfhqst-BfYu6Rm5VksNMJsgy0le0V1sMkhsRoloH0Yu29MgmO3QMQfc-hksXU-S6U85ZyRMJoEuMsnku3V4367VlNJwsSZSQ43OHzOR2xHqwk7qd7mO8S7ZqoEBMvFJ0TyWcIBP7H~CI5zX4p-RmarFC9MkO2eGSA__",
            date: "12/12/2021",
            price: "$1000",
            nfts: "50/1000",
            payout: "$100",
            status: "Pending",
        },
        {
            property: "Property 3",
            logo: "https://s3-alpha-sig.figma.com/img/1758/b069/81aa33a0c41b8c8fd47a0e06d0169669?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GYkVHGYBEylzCB7kl5IgKXioNqlktYSR1qYh9YaiDesu6i3dTS7SNU5erfpzhNrMHi3GCMtU~E3K-NBxtM8sGKXNduYiOMUpZb9NrJ7IeBF1zY3ga2W1EGuHpRxa3BzpDBFFo9pq-YcLM-tGaznOxoIkHCrXcrCRnwy9rGI7Lu8Vy7O50PZ7scfhqst-BfYu6Rm5VksNMJsgy0le0V1sMkhsRoloH0Yu29MgmO3QMQfc-hksXU-S6U85ZyRMJoEuMsnku3V4367VlNJwsSZSQ43OHzOR2xHqwk7qd7mO8S7ZqoEBMvFJ0TyWcIBP7H~CI5zX4p-RmarFC9MkO2eGSA__",
            date: "12/12/2021",
            price: "$1000",
            nfts: "50/1000",
            payout: "$100",
            status: "Pending",
        },
        {
            property: "Property 4",
            logo: "https://s3-alpha-sig.figma.com/img/1758/b069/81aa33a0c41b8c8fd47a0e06d0169669?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GYkVHGYBEylzCB7kl5IgKXioNqlktYSR1qYh9YaiDesu6i3dTS7SNU5erfpzhNrMHi3GCMtU~E3K-NBxtM8sGKXNduYiOMUpZb9NrJ7IeBF1zY3ga2W1EGuHpRxa3BzpDBFFo9pq-YcLM-tGaznOxoIkHCrXcrCRnwy9rGI7Lu8Vy7O50PZ7scfhqst-BfYu6Rm5VksNMJsgy0le0V1sMkhsRoloH0Yu29MgmO3QMQfc-hksXU-S6U85ZyRMJoEuMsnku3V4367VlNJwsSZSQ43OHzOR2xHqwk7qd7mO8S7ZqoEBMvFJ0TyWcIBP7H~CI5zX4p-RmarFC9MkO2eGSA__",
            date: "12/12/2021",
            price: "$1000",
            nfts: "50/1000",
            payout: "$100",
            status: "Pending",
        },
        {
            property: "Property 5",
            logo: "https://s3-alpha-sig.figma.com/img/1758/b069/81aa33a0c41b8c8fd47a0e06d0169669?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GYkVHGYBEylzCB7kl5IgKXioNqlktYSR1qYh9YaiDesu6i3dTS7SNU5erfpzhNrMHi3GCMtU~E3K-NBxtM8sGKXNduYiOMUpZb9NrJ7IeBF1zY3ga2W1EGuHpRxa3BzpDBFFo9pq-YcLM-tGaznOxoIkHCrXcrCRnwy9rGI7Lu8Vy7O50PZ7scfhqst-BfYu6Rm5VksNMJsgy0le0V1sMkhsRoloH0Yu29MgmO3QMQfc-hksXU-S6U85ZyRMJoEuMsnku3V4367VlNJwsSZSQ43OHzOR2xHqwk7qd7mO8S7ZqoEBMvFJ0TyWcIBP7H~CI5zX4p-RmarFC9MkO2eGSA__",
            date: "12/12/2021",
            price: "$1000",
            nfts: "50/1000",
            payout: "$100",
            status: "Pending",
        },
        {
            property: "Property 4",
            logo: "https://s3-alpha-sig.figma.com/img/1758/b069/81aa33a0c41b8c8fd47a0e06d0169669?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GYkVHGYBEylzCB7kl5IgKXioNqlktYSR1qYh9YaiDesu6i3dTS7SNU5erfpzhNrMHi3GCMtU~E3K-NBxtM8sGKXNduYiOMUpZb9NrJ7IeBF1zY3ga2W1EGuHpRxa3BzpDBFFo9pq-YcLM-tGaznOxoIkHCrXcrCRnwy9rGI7Lu8Vy7O50PZ7scfhqst-BfYu6Rm5VksNMJsgy0le0V1sMkhsRoloH0Yu29MgmO3QMQfc-hksXU-S6U85ZyRMJoEuMsnku3V4367VlNJwsSZSQ43OHzOR2xHqwk7qd7mO8S7ZqoEBMvFJ0TyWcIBP7H~CI5zX4p-RmarFC9MkO2eGSA__",
            date: "12/12/2021",
            price: "$1000",
            nfts: "50/1000",
            payout: "$100",
            status: "Pending",
        },
        {
            property: "Property 5",
            logo: "https://s3-alpha-sig.figma.com/img/1758/b069/81aa33a0c41b8c8fd47a0e06d0169669?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GYkVHGYBEylzCB7kl5IgKXioNqlktYSR1qYh9YaiDesu6i3dTS7SNU5erfpzhNrMHi3GCMtU~E3K-NBxtM8sGKXNduYiOMUpZb9NrJ7IeBF1zY3ga2W1EGuHpRxa3BzpDBFFo9pq-YcLM-tGaznOxoIkHCrXcrCRnwy9rGI7Lu8Vy7O50PZ7scfhqst-BfYu6Rm5VksNMJsgy0le0V1sMkhsRoloH0Yu29MgmO3QMQfc-hksXU-S6U85ZyRMJoEuMsnku3V4367VlNJwsSZSQ43OHzOR2xHqwk7qd7mO8S7ZqoEBMvFJ0TyWcIBP7H~CI5zX4p-RmarFC9MkO2eGSA__",
            date: "12/12/2021",
            price: "$1000",
            nfts: "50/1000",
            payout: "$100",
            status: "Pending",
        },
    ]
    return (
        <div className="w-full">
            <div className="pb-2.5 pt-6 flex flex-col gap-6 xl:pb-1">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex gap-2 flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <h4 className="text-title-lg font-bold text-black ">
                                Payouts
                            </h4>
                        </div>

                    </div>
                </div>
                <div className="shadow-2 rounded-lg pb-4">
                    <PaginatedTable showNumbers={false} columns={headers} rows={data} />
                </div>
            </div>
        </div>
    )
}

export default Payout