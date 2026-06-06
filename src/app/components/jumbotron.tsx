import Profiluser from "./profiluser";

export default function Jumbotron() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-36 pb-16 bg-slate-950 bg-[url('/bgarta.jpg')] bg-cover bg-center bg-no-repeat">
            {/* Dark blur overlay */}
            <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px] z-0" />
            
            {/* Grid layout decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-25 z-0" />
            
            {/* Glowing orb decorations */}
            <div className="absolute top-12 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] z-0 pointer-events-none" />
            <div className="absolute bottom-12 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] z-0 pointer-events-none" />

            <div className="relative max-w-5xl w-full mx-auto px-6 z-10 flex justify-center items-center">
                <Profiluser />
            </div>
        </section>
    );
}
