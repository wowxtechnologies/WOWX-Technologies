export default function GoogleMapsEmbed() {
  return (
    <div
      id="google-maps-embed-wrapper"
      className="relative w-full h-[350px] rounded-2xl overflow-hidden border border-slate-705/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur"
    >
      <iframe
        id="wowx-google-map-iframe"
        title="WOWX Technologies Head Office Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.6705574328512!2d77.9947842!3d26.5002237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c66cf641f235%3A0xe100c3cd8e7c10b7!2sPooja%20Studio!5e0!3m2!1sen!2sin!4v1717658000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%)" }} // Tech dark theme look to maps
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
