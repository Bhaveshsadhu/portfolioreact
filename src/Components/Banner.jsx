export const Banner = () => {
  return (
    <section className="banner d-flex justify-content-around align-item-center row">
      <div className="banner-item d-flex mt-4 col-md-4 col-sm-12">
        <div className="award me-2 flex-center">
          <i className="fa-solid fa-award flex"></i>
        </div>
        <div>
          <h2>IT</h2>
          <p>Graduate</p>
        </div>
      </div>
      <div className="banner-item d-flex mt-4 col-md-4 col-sm-12">
        <div className="award me-2 flex-center">
          <i className="fa-solid fa-award flex"></i>
        </div>
        <div>
          <h2>5 + Projects</h2>
          <p>Completed</p>
        </div>
      </div>
      <div className="banner-item d-flex mt-4 col-md-4 col-sm-12">
        <div className="award me-2 flex-center">
          <i className="fa-solid fa-award "></i>
        </div>
        <div>
          <h2>1 + Year</h2>
          <p>Experience</p>
        </div>
      </div>
    </section>
  );
};
