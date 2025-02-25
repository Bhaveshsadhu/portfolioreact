export const Card = ({ img, github, url, title, techstack }) => {
  return (
    <>
      <div className="card grid-item">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="project-links d-flex justify-content-center align-item-center mt-2">
            <a href={github} target="_blank">
              <i className="fa-brands fa-github me-2"></i>
            </a>
            <a href={url} target="_blank">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
          <div className="mt-3">
            <h6>{title}</h6>
            <p className="card-text">{techstack}</p>
          </div>
        </div>
      </div>
    </>
  );
};
