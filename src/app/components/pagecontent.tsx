import Menu from "./menu";

export default function Pagecontent({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Menu />
            {children}
        </>
    )
}
