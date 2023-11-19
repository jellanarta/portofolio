export default function Lokasimaps() {
    return (
        <div className="pb-5" id="maps">
            <div>
                <div className="text-base font-semibold uppercase">
                    lokasi di google maps
                </div>
                <div className="text-xs">
                    Alamat dan lokasi saya di google maps
                </div>
            </div>
            <div className="mt-5">
                <iframe className="w-full h-[300px]" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d986.0638461633657!2d116.2577274145391!3d-8.667245215314793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1700216707191!5m2!1sen!2sid" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}
