import Profiluser from "./profiluser";

export default function Jumbotron() {
    return (
        <div className="bg-[url('/bgarta.jpg')] w-full h-[500px] lg:h-[500px] bg-no-repeat bg-center   bg-cover relative">
            <div className="absolute w-full h-full" style={{ background: 'rgba(0,0,0,0.7)' }}>
                <div className="max-w-5xl mx-auto flex justify-center items-center h-[500px] lg:h-[500px]">
                    <Profiluser />
                </div>
            </div>
        </div>
    )
}
