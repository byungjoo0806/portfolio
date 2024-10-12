
interface ChildrenProps {
    children: React.ReactNode;
}

export const Wrapper: React.FC<ChildrenProps> = ({ children }) => (
    <div className="w-full h-fit px-4 pt-[16px] pb-[16px] md:pt-[24px] md:py-[16px] shadow-xl">{children}</div>
)

export const Hero: React.FC<ChildrenProps> = ({ children }) => (
    <h1 className="text-slate-900 font-extrabold text-[32px] md:text-[40px] md:pt-[5px]">{children}</h1>
)

export const Heading: React.FC<ChildrenProps> = ({ children }) => (
    <h2 className="text-[24px] py-[24px] font-bold md:text-[40px]">{children}</h2>
)

export const Typography: React.FC<ChildrenProps> = ({ children }) => (
    <p className="text-[16px]">{children}</p>
)
