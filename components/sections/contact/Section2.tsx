'use client';

export default function Section2() {
    return (
        <div className="contact-map-page">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23464.542406850942!2d77.33267225507917!3d28.54666666269996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddc81aaaaaab%3A0xbd1d506ff880556b!2sCodM%20Software!5e1!3m2!1sen!2sin!4v1756301422672!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
