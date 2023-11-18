const Location = ({ image, date, title, info, location }) => {
  return (
    <article className="location-card">
      <div className="location-img-container">
        <img src={image} className="location-img" alt={title} />
        <p className="location-date">{date}</p>
      </div>
      <div className="location-info">
        <div className="location-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="location-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {location}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Location;
