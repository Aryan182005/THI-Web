
const ContactMap = () => {
    return (
        <section className="map-container">
            <div className="iframe-wrapper">
                 <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7849708268814!2d72.87107980076048!3d21.240373780566845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2470561e73%3A0x2f99a710c782e473!2sGolden%20Square%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1738744875265!5m2!1sen!2sin&output=embed&iwloc=false&z=15&disableDefaultUI=true"
                    width="100%"
                    height="400"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Google Map showing Golden Square Shopping Mall"
                />
            </div>
        </section>
    );
};

export default ContactMap;
