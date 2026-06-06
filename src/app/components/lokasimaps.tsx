export default function Lokasimaps() {
    return (
        <div className="glass-card rounded-2xl p-6 shadow-md shadow-slate-100/50 dark:shadow-none scroll-mt-28" id="maps">
            {/* Header */}
            <div className="mb-6 space-y-2">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-500/20">
                    Map
                </span>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                    Location on Google Maps
                </h2>
                <div className="h-1 w-8 bg-indigo-500 rounded-full" />
            </div>

            {/* Map Wrapper */}
            <div className="rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
                <iframe 
                    className="w-full h-[300px] grayscale-[10%] dark:grayscale-[30%]" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63105.09882136555!2d116.24465290469671!3d-8.685019439626931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb104dd2e6343%3A0x4cf4254ab8238351!2sPraya%2C%20Central%20Lombok%20Regency%2C%20West%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1700450214430!5m2!1sen!2sid" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                />
            </div>
        </div>
    )
}
