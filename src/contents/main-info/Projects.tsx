import { Wrapper } from '../../components/Common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiNodejs, DiGithubBadge } from 'react-icons/di'
import { SiAmazonec2, SiAmazons3, SiCss3, SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import useModal from '../../hooks/useModal'
import Modal from '../../components/Modal'
import { TiHtml5 } from 'react-icons/ti'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal();
    const [isShowingModal2, toggleModal2] = useModal();
    const [isShowingModal3, toggleModal3] = useModal();
    const [isShowingModal4, toggleModal4] = useModal();

    return (
        <Wrapper>
            
            <br/>
            <ul className="flex flex-col w-full">
                {/* 현재 진행중 프로젝트 */}
                <li className="flex flex-col gap-[32px] pb-5 border-b border-gray-400 md:flex-row">
                    <div className="w-full md:w-[420px] flex flex-col justify-center items-center md:items-start">
                        <img
                            src="./crayon-logo.png"
                            className="w-[50%] md:w-full"
                            alt="crayon nft"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-col items-center md:items-start">
                            <li className="text-[16px]">Personal Project</li>
                            <li>frontend</li>
                            <li>blockchain</li>
                            <li>
                                <button
                                    onClick={toggleModal4}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Details
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            CRAYON - Create Your Own NFT {' '}<br/> (in progress) <br/>
                            {/* <a href="">
                                <FaExternalLinkAlt />
                            </a> */}
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            Create your own NFTs and share your artistic senses and feelings with the whole world.
                            Sell your own NFTs and buy others' to help grow the community.
                            You can add image files or draw that you want to add to your NFTs.
                            You can share your memories and enjoy others' experience as well.
                        </p>
                        <br/>
                        <h3 className="py-[16px] text-[16px] font-bold">Tech Stack</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[10px]">
                            <DiReact />
                            <SiTypescript />
                            <SiTailwindcss />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">Roles and Responsibilities</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                Created a webpage using React with Typescript. No backend servers.
                            </li>
                            <li>
                                Used Solidity and Web3.js for minting, buying, and selling NFTs.
                            </li>
                            <li>
                                Used Remix for deploying contracts.
                            </li>
                            <li>
                                Using Canvas, users would make their own images that would be added to NFTs. (coming soon)
                            </li>
                        </ul>
                    </div>
                </li>

                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] pt-5 pb-5 border-b border-gray-400 md:flex-row">
                    <div className="w-full md:w-[420px] flex flex-col justify-center items-center md:items-start">
                        <img
                            src="./bouncecode.png"
                            className="w-[50%] md:w-full"
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
                            Real Estate STO <br/> (collaboration with a company){' '}
                            <a href="https://bouncesto.site">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            I have been a part of a team project at a bootcamp with a company called Bounce;code to build a real estate STO platform,
                            where users can buy subscriptions, trade tokens, and cast votes.
                            I was in charge of frontend development using React with Typescript and Tailwind CSS and voting contract using Solidity.
                        </p>
                        <br/>
                        <h3 className="py-[16px] text-[16px] font-bold">Tech Stack</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[10px]">
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
                <li className="flex flex-col gap-[32px] pt-5 pb-5 border-b border-gray-400 md:flex-row">
                    <div className="w-full md:w-[420px] flex flex-col justify-center items-center md:items-start">
                        <img
                            src="./steam100.png"
                            className="w-[50%] md:w-full"
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
                        <br/>
                        <h3 className="py-[16px] text-[16px] font-bold">Tech Stack</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[10px]">
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
                <li className="flex flex-col gap-[32px] pt-5 pb-5 md:flex-row">
                    <div className="w-full md:w-[420px] flex flex-col justify-center items-center md:items-start">
                        <img
                            src="./linkee.png"
                            className="w-[50%] md:w-full"
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
                        <br/>
                        <h3 className="py-[16px] text-[16px] font-bold">Tech Stack</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[10px]">
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

            <Modal show={isShowingModal4} onCloseButtonClick={toggleModal4}>
                <div className='flex flex-col gap-[32px] md:flex-row'>
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="./crayon-logo.png"
                            className="w-full"
                            alt="crayon nft"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-col items-center md:items-start">
                            <li className="text-[16px]">Personal Project</li>
                            <li>frontend</li>
                            <li>blockchain</li>
                            {/* <li>
                                <button
                                    onClick={toggleModal4}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Details
                                </button>
                            </li> */}
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[20px] font-semibold pb-[16px]">
                            CRAYON - Create Your Own NFT{' '}
                        </h2>

                        <ul className="leading-5 list-disc pl-[20px] text-slate-950 text-[12px] md:text-[14px] md:leading-7">
                            <li>a website where users can mint, buy, and sell NFTs</li>
                            <li>users can create their own images for their own NFTs</li>
                            <li>users can leave their favorite pictures or moments as NFTs that would never be lost</li>
                            <li>users can get second-hand experience from others</li>
                        </ul>

                        <h3 className="pt-[16px] pb-[5px] text-[16px] font-bold">Tech Stack</h3>
                        <ul className="flex flex-col list-disc text-[14px] gap-[8px] py-[8px] px-[20px]">
                            <li>
                                frontend : React, Typescript
                            </li>
                            <li>
                                blockchain : Solidity, Web3.js
                            </li>
                        </ul>

                        <h3 className="py-[16px] text-[16px] font-bold">Future Goals</h3>
                        <div className="leading-8 text-[12px] md:text-[14px]">
                            I would really want to have some game clients running in the page so that I can use those images as NFTs.
                            For example, it would be wonderful if I could get a screenshot from Maplestory and turn that into the image of an NFT.
                            Or it could be a League of Legends' champion from Summoner's Rift.
                            There are just so many opportunities and possibilities that I would love to apply.
                            The beginning of that is simple Canvas drawing action where users can draw or even doodle their own NFT images.
                            Also, I would want to use Rust instead of Solidity. I've studied Rust a bit and I don't know when it will happen,
                            but I would really love to apply Rust for blockchain.
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                <div className='flex flex-col gap-[32px] md:flex-row'>
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="./bouncecode.png"
                            className="w-full"
                            alt="company collaboration project"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-col items-center md:items-start">
                            <li className="text-[14px]">Team Project (5 members)</li>
                            <li className="text-stone-500">2023. 11. 01 ~ 2023. 12. 05</li>
                            <li>frontend</li>
                            <li>blockchain</li>
                            {/* <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Details
                                </button>
                            </li> */}
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
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-col items-center md:items-start">
                            <li className="text-[14px]">Team Project (3 members)</li>
                            <li className="text-stone-500">2023. 08. 03 ~ 2023. 08. 28</li>
                            <li>frontend</li>
                            <li>backend</li>
                            <li>deploy</li>
                            {/* <li>
                                <button
                                    onClick={toggleModal2}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Details
                                </button>
                            </li> */}
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
                            src="./linkee.png"
                            className="w-full"
                            alt="linkee"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-col items-center md:items-start">
                            <li className="text-[14px]">Team Project (3 members)</li>
                            <li className="text-stone-500">2023. 06. 02 ~ 2023. 06. 26</li>
                            <li>frontend</li>
                            <li>backend</li>
                            <li>deploy</li>
                            {/* <li>
                                <button
                                    onClick={toggleModal3}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Details
                                </button>
                            </li> */}
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
