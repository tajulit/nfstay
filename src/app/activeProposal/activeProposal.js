import Image from "next/image"
import Vote from "./vote"
import RemainingTime from "./remainingTime"
import { getRandomFutureTime } from "../secondary/getTime"

const ActiveProposal = () => {
    const activeProposals = [
        {
            img: "https://s3-alpha-sig.figma.com/img/0f35/4902/b6af20fa6c1f7be542bee89b017c6771?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAbUGKK3izvFSFVueOEXbre6CCiMeNKQPYDgZ4ajBfCOfPPwBdj4yPr~edh4TSHUlR~Kop1CkHoMSp8RlKIQHj0zs-mIEfx0n8wuGNc7nWh~wUFsrRW4tr060Ayba0rihjt78YqWy-kBZvQ5ey6HlLGrCeJLNHLJQv4OeMFgohomhWENriWMGsWKMVdwHVdxceZNkXmfROyqMxQTVZN-wWNy0KZCsDta~t5blM9XNeG0CH6elUjmeJNc7pMBVL9jeNs7Pi4P6e-sYUqqdqCFggqk8hukRw8MQ92wUkB9vdL41CPKNeI7BI9EemXxiGjBLsMRoG3iVHqA9j0udQID0w__",
            title: "3-Bedroom Family home",
            location: "Stockholm, Sweden",
            proposal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc ipsum, accumsan vitae quam nec, vestibulum eleifend massa. Morbi varius accumsan laoreet. Aenean imperdiet ut dui ac imperdiet. Donec eu metus at ipsum fermentum ornare.",
            description: "Should we sell the property at a future market valuation of $1,000,000? Nibh risus dui ac in quis cursus nibh nulla. Amet ut tristique quisque",
            creator: "Gohard",
            totalYes: 12,
            totalNo: 68,
            votes: 120,
            totalVotes: 600,
            timeRemaining: getRandomFutureTime(),
            minimumRequirements: [
                "At least 50% of all owners must vote",
                "Overall, 75% must accept the proposal",
                "A vote is valid for 7 days"
            ]

        },
        {
            img: "https://s3-alpha-sig.figma.com/img/0f35/4902/b6af20fa6c1f7be542bee89b017c6771?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAbUGKK3izvFSFVueOEXbre6CCiMeNKQPYDgZ4ajBfCOfPPwBdj4yPr~edh4TSHUlR~Kop1CkHoMSp8RlKIQHj0zs-mIEfx0n8wuGNc7nWh~wUFsrRW4tr060Ayba0rihjt78YqWy-kBZvQ5ey6HlLGrCeJLNHLJQv4OeMFgohomhWENriWMGsWKMVdwHVdxceZNkXmfROyqMxQTVZN-wWNy0KZCsDta~t5blM9XNeG0CH6elUjmeJNc7pMBVL9jeNs7Pi4P6e-sYUqqdqCFggqk8hukRw8MQ92wUkB9vdL41CPKNeI7BI9EemXxiGjBLsMRoG3iVHqA9j0udQID0w__",
            title: "3-Bedroom Family home",
            location: "Stockholm, Sweden",
            proposal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc ipsum, accumsan vitae quam nec, vestibulum eleifend massa. Morbi varius accumsan laoreet. Aenean imperdiet ut dui ac imperdiet. Donec eu metus at ipsum fermentum ornare.",
            description: "Should we sell the property at a future market valuation of $1,000,000? Nibh risus dui ac in quis cursus nibh nulla. Amet ut tristique quisque",
            creator: "Gohard",
            totalYes: 12,
            totalNo: 68,
            votes: 120,
            totalVotes: 600,
            timeRemaining: getRandomFutureTime(),
            minimumRequirements: [
                "At least 50% of all owners must vote",
                "Overall, 75% must accept the proposal",
                "A vote is valid for 7 days"
            ]

        },
    ]
    return (
        <div className="pb-2.5  flex flex-col gap-6 xl:pb-1">
            <div className="flex items-center justify-between gap-5">
                <div className="flex gap-2 flex-col justify-between">

                    <h4 className="text-title-lg font-bold text-black 2xl:text-5xl">
                        Active Proposals
                    </h4>

                </div>
            </div>


            {activeProposals.map((proposal, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-[70%_28%] gap-5">
                    <div className="flex gap-5 flex-col w-full p-4 shadow border rounded-lg">
                        <div className="flex flex-col sm:flex-row gap-5 w-full">
                            <div className="sm:size-[7rem] sm:shrink-0">
                                <Image
                                    src={proposal.img}
                                    width={200}
                                    height={200}
                                    className="rounded-lg  h-full max-w-full "
                                    alt={proposal.title}
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center w-full justify-between">
                                    <h1 className="text-2xl font-bold 2xl:text-3xl">{proposal.title}</h1>
                                    <p className="flex items-center gap-1 opacity-60 2xl:text-base">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.6668 8.33341C16.6668 12.4942 12.051 16.8276 10.501 18.1659C10.3566 18.2745 10.1808 18.3332 10.0002 18.3332C9.8195 18.3332 9.64373 18.2745 9.49933 18.1659C7.94933 16.8276 3.3335 12.4942 3.3335 8.33341C3.3335 6.5653 4.03588 4.86961 5.28612 3.61937C6.53636 2.36913 8.23205 1.66675 10.0002 1.66675C11.7683 1.66675 13.464 2.36913 14.7142 3.61937C15.9645 4.86961 16.6668 6.5653 16.6668 8.33341Z"
                                                stroke="#0C0839"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z"
                                                stroke="#0C0839"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        {proposal.location}
                                    </p>
                                </div>
                                <p className="text-[#0C0839] w-auto whitespace-pre-line lg:max-w-md 2xl:text-base 2xl:max-w-xl">{proposal.description}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row w-full gap-5">
                            <div className="flex flex-col gap-5 justify-between max-w-28 w-full">
                                <div className="flex flex-col gap-3">
                                    <p className="opacity-80 2xl:text-base">CREATED BY</p>
                                    <div className="flex items-center gap-3">
                                        <span className="shrink-0 size-6 rounded-full bg-[#D9D9D9]"></span>
                                        <p className="font-medium underline text-sm">{proposal.creator}</p>
                                    </div>
                                </div>
                                <p className="font-medium opacity-60 2xl:text-sm">
                                    {proposal.votes} of {proposal.totalVotes} voted
                                </p>
                            </div>
                            <Vote title={proposal.title} proposal={proposal.proposal} />
                        </div>
                    </div>

                    <div className="bg-[#F5F5F5] p-4 rounded-lg flex flex-col gap-5">
                        <RemainingTime auctionEndTime={proposal.timeRemaining} />

                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-lg 2xl:text-xl">Minimum requirements</h1>
                            <div className="flex flex-col gap-3 2xl:text-base">
                                {proposal.minimumRequirements.map((req, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <svg width="18" height="22" className="shrink-0 2xl:w-[25px]" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.0002 20.1666C16.0628 20.1666 20.1668 16.0625 20.1668 10.9999C20.1668 5.93731 16.0628 1.83325 11.0002 1.83325C5.93755 1.83325 1.8335 5.93731 1.8335 10.9999C1.8335 16.0625 5.93755 20.1666 11.0002 20.1666Z" fill="#0C0839" stroke="#0C0839" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.25 11.0001L10.0833 12.8334L13.75 9.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>{req}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}



        </div>
    )
}

export default ActiveProposal