import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiHtml5 } from 'react-icons/di'
import { SiAmazonec2, SiAmazons3, SiCss3, SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import { TiHtml5 } from 'react-icons/ti'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()

    return (
        <Wrapper>
            <Heading>
                Projects
            </Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] flex flex-col justify-center items-center">
                        <img
                            src="./bouncecode.png"
                            className="w-[50%] md:w-[20%]"
                            alt="company collaboration project"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-col items-center md:items-start">
                            <li className="text-[16px]">Team Project (5 members) - </li>
                            <li className="text-[16px]">collaboration  w/ Bounce;code</li>
                            <li className="text-stone-500">2023. 11. 01 ~ 2023. 12. 05</li>
                            <li>frontend</li>
                            <li>blockchain</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Details
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Real Estate STO (collaboration with a company){' '}
                            <a href="https://bouncesto.site">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            I have been a part of a team project at a bootcamp with a company called Bounce;code to build a real estate STO platform,
                            where users can buy subscriptions, trade tokens, and cast votes.
                            I was in charge of frontend development using React with Typescript and Tailwind CSS and voting contract using Solidity.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">Tech Stack</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiReact />
                            <SiTypescript />
                            <SiJavascript />
                            <SiTailwindcss />
                            <SiNextdotjs />
                            <DiNodejs />
                            <DiGithubBadge />
                            <SiAmazonec2 />
                            <SiAmazons3 />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">My Roles & Responsibilities</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                built property list page, property detail page, trade page, mypage, vote list page, vote detail page 
                                using React with Typescript and Tailwind CSS
                            </li>
                            <li>
                                fetched data using React Query from database built with PostgreSQL
                            </li>
                            <li>
                                built voting contract with Solidity that uses property tokens as the governance token
                            </li>
                            <li>
                                updated vote details through fetching block data by emitting Event in contract
                            </li>
                        </ul>
                    </div>
                </li>

                {/* 두번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] flex flex-col justify-center items-center">
                        <img
                            src="./steam100.png"
                            className="w-[50%] md:w-[20%]"
                            alt="steam100"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-col items-center md:items-start">
                            <li className="text-[16px]">Team Project (3 members)</li>
                            <li className="text-stone-500">2023. 08. 03 ~ 2023. 08. 28</li>
                            <li>frontend</li>
                            <li>backend</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    Details
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Steam 100 {' '}
                            <a href="https://steamclone.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            Steam 100 is a game recommendation website using Steam APIs.
                            I was in charge of fetching data using the APIs and rendering them with React.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">Tech Stack</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiReact />
                            <SiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold"> My Roles & Properties</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                used three of Steam's API to fetch data from Steam database : 
                                GetMostPlayedGames, GetAppList, and appdeatils
                            </li>
                            <li>
                                fetched data from the API in the backend, processed it, and returned it to frontend with axios
                            </li>
                            <li>
                                built the main page and game detail page with React and styled-components
                            </li>
                        </ul>
                    </div>
                </li>

                {/* 세번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] flex flex-col justify-center items-center">
                        <img
                            src="./linkee.png"
                            className="w-[50%] md:w-[20%]"
                            alt="linkee"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-col items-center md:items-start">
                            <li className="text-[16px]">Team Project (3 members)</li>
                            <li className="text-stone-500">2023. 06. 02 ~ 2023. 06. 26</li>
                            <li>frontend</li>
                            <li>backend</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal3}
                                >
                                    Details
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            LINKee {' '}
                            <a href="https://linkee.kr">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            LINKee is an SNS website where users can share their experience and feelings.
                            I was in charge of building mypage and profile edit page with HTML and CSS,
                            and deploying the project through AWS EC2.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">Tech Stack</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <TiHtml5 />
                            <SiCss3 />
                            <SiJavascript />
                            <DiNodejs />
                            <SiAmazonec2 />
                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold"> My Roles & Properties</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                built mypage and profile edit page with HTML and CSS
                            </li>
                            <li>
                                allowed users to change profile pictures in profile edit page through multer middleware
                            </li>
                            <li>
                                deployed the website through AWS EC2 and obtained SSL certificate through Nginx Certbot
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                <div className='flex flex-col gap-[32px] md:flex-row'>
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/241295634_1991321801017570_4939500428684140967_n.png?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=B5g3lz-t8PgAX8Yr4Km&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDZ_If9Y9ppSAqounXldMpXaP17pZr4CDhCB736Mg5VLA&oe=6576821E"
                            className="w-full"
                            alt="company collaboration project"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">Team Project (5 members) - </li>
                            <li className="text-[16px]">collaboration  w/ Bounce;code</li>
                            <li className="text-stone-500">2023. 11. 01 ~ 2023. 12. 05</li>
                            <li>frontend</li>
                            <li>blockchain</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Details
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[20px] font-semibold pb-[16px]">
                            Real Estate STO (collaboration with a company){' '}
                        </h2>

                        <ul className="leading-5 list-disc pl-[20px] text-slate-950 text-[12px] md:text-[14px] md:leading-7">
                            <li>created an STO platform website and deployed through AWS EC2 with S3 and Amplify</li>
                            <li>implemented the login process provided by BounsCode</li>
                            <li>users can connect their wallet address (Metamask) to our website</li>
                            <li>users can participate in property subscription by paying cash</li>
                            <li>if the subscription is completed, users who participated receives ERC20 tokens that represent the ownership of corresponding property</li>
                            <li>users can also sell such ERC20 tokens by signing with their private key to authorize the legal ownership</li>
                            <li>users can buy those tokens that are on sale by paying cash</li>
                            <li>users can vote on issues created on the blockchain with their property tokens (DAO)</li>
                        </ul>

                        <h3 className="pt-[16px] pb-[5px] text-[16px] font-bold">Tech Stack</h3>
                        <ul className="flex flex-col list-disc text-[14px] gap-[8px] py-[8px] px-[20px]">
                            <li>
                                frontend : React, Typescript, Tailwind CSS, Next.js
                            </li>
                            <li>
                                backend : Node.js, Typescript, PostgreSQL
                            </li>
                            <li>
                                deploy : AWS EC2, S3, Amplify
                            </li>
                            <li>
                                contract : Solidity, Truffle
                            </li>
                        </ul>

                        <h3 className="py-[16px] text-[16px] font-bold">Future Goals</h3>
                        <div className="leading-8 text-[12px] md:text-[14px]">
                            For DAO system, I believe ERC4337 is the best-fit because of its paymaster API, 
                            which allows a third-party to pay the gas fees for all the transactions 
                            that occur when users try to cast their votes. 
                            It really doesn’t make sense to pay your own money to express your thoughts. 
                            I don’t think anyone would want to vote with the gas fees even if the gas fees are low. 
                            I found out about ERC4337 a bit too late to apply it to our website, 
                            so I would love to study more deeply on the paymaster and account abstraction 
                            that will make the STO community much more convenient.
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <div className='flex flex-col gap-[32px] md:flex-row'>
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="./steam100.png"
                            className="w-full"
                            alt="company collaboration project"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">Team Project (3 members) - </li>
                            <li className="text-stone-500">2023. 08. 03 ~ 2023. 08. 28</li>
                            <li>frontend</li>
                            <li>backend</li>
                            <li>deploy</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Details
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[20px] font-semibold pb-[16px]">
                            Steam 100{' '}
                        </h2>

                        <ul className="leading-5 list-disc pl-[20px] text-slate-950 text-[12px] md:text-[14px] md:leading-7">
                            <li>
                                game suggestion website based on the daily ranking of most played games on Steam
                            </li>
                            <li>
                                utilized 3 Steam APIs :
                                <ul className='list-decimal pl-5'>
                                    <li>GetMostPlayedGames - top 100 most played games</li>
                                    <li>GetAppList - all games on Steam</li>
                                    <li>appdetails - single game detail</li>
                                </ul>
                            </li>
                        </ul>

                        <h3 className="pt-[16px] pb-[5px] text-[16px] font-bold">Tech Stack</h3>
                        <ul className="flex flex-col list-disc text-[14px] gap-[8px] py-[8px] px-[20px]">
                            <li>
                                frontend : React, styled-components
                            </li>
                            <li>
                                backend : Node.js, MySQL
                            </li>
                            <li>
                                deploy : AWS EC2
                            </li>
                        </ul>

                        <h3 className="py-[16px] text-[16px] font-bold">Future Goals</h3>
                        <div className="leading-8 text-[12px] md:text-[14px]">
                            After using such APIs, I really wanted to try cloning the actual Steam website. 
                            Steam250 website is only consisted of ranking lists, while actual Steam website has main page, 
                            game detail page, store page, community page, and more. 
                            Obviously, actual Steam page requires more work and maybe more complicated code. 
                            It was my first time applying an API provided by a third party to receive data 
                            which worked out pretty well in my opinion. So, I would love to create a more complicated 
                            but good-looking website on my own.
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <div className='flex flex-col gap-[32px] md:flex-row'>
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="./linkee.kr"
                            className="w-full"
                            alt="company collaboration project"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">Team Project (3 members) - </li>
                            <li className="text-stone-500">2023. 06. 02 ~ 2023. 06. 26</li>
                            <li>frontend</li>
                            <li>backend</li>
                            <li>deploy</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Details
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[20px] font-semibold pb-[16px]">
                            LINKee{' '}
                        </h2>

                        <ul className="leading-5 list-disc pl-[20px] text-slate-950 text-[12px] md:text-[14px] md:leading-7">
                            <li>an SNS website where users can share their experience and feelings</li>
                            <li>can post pictures like Instagram and just words as well like X</li>
                            <li>implemented follower / following system</li>
                            <li>live chat available through socket</li>
                            <li>notifications enabled through socket</li>
                        </ul>

                        <h3 className="pt-[16px] pb-[5px] text-[16px] font-bold">Tech Stack</h3>
                        <ul className="flex flex-col list-disc text-[14px] gap-[8px] py-[8px] px-[20px]">
                            <li>
                                frontend : HTML, CSS
                            </li>
                            <li>
                                backend : Node.js, MySQL
                            </li>
                            <li>
                                deploy : AWS EC2
                            </li>
                        </ul>

                        <h3 className="py-[16px] text-[16px] font-bold">Future Goals</h3>
                        <div className="leading-8 text-[12px] md:text-[14px]">
                            Using a smart wallet, I want to create a community where users can buy and sell NFTs
                            by uploading posts. A post will have a single or multiple NFTs on sale and 
                            users can buy such NFTs directly from the posts. 
                            Users will also be able to comment and reply to share their thoughts on just about anything.
                            Even if the blockchain network is getting larger, 
                            it still has yet to become a widely-known technology 
                            that not many countries have passed laws regarding blockchain. 
                            Through the SNS-like NFT community, more and more users can have higher accessibility 
                            which will eventually increase the interest of more non-users that would lead to much larger NFT community.
                        </div>
                    </div>
                </div>
            </Modal>
        </Wrapper>
    )
}

export default Projects
