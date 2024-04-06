export default function Lokasimaps() {
    return (
        <div className="pb-5" id="maps">
            <div>
                <div className="text-base font-semibold uppercase">
                    LOCATION ON GOOGLE MAPS
                </div>
                <div className="text-xs">
                    My address and location on Google Maps.
                </div>
            </div>
            <div className="mt-5">
                <iframe className="w-full h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63105.09882136555!2d116.24465290469671!3d-8.685019439626931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb104dd2e6343%3A0x4cf4254ab8238351!2sPraya%2C%20Central%20Lombok%20Regency%2C%20West%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1700450214430!5m2!1sen!2sid" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}
