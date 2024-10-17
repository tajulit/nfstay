const Location = ({ latitude, longitude, location }) => {
    const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.121367677097!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e2f7e4e1e2d%3A0x8b3e1b4d1d3d6e4d!2s${encodeURIComponent(
      location
    )}!5e0!3m2!1sen!2sng!4v1632922050736!5m2!1sen!2sng`;
  
    return (
      <div className="flex flex-col gap-5 rounded-lg shadow border p-4">
        <h4 className="text-lg font-bold text-black 2xl:text-2xl">Location</h4>
        <div className="w-full min-h-[22rem]">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            className="rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Location;
  