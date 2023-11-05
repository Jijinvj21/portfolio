import "./Projects.scss";
function Projects() {
  return (
    <section className="projects_section pb-5">
      <h1 className="fw-bold">Projects</h1>
      <div className="main_project_card d-flex flex-column gap-3">
        <h3 className="fw-bold pt-3">Main Projects</h3>
        <div className="card container py-3 shadow-lg border-0  text-dark gap-3">
          <div className="fw-bold  d-flex flex-row justify-content-between align-items-center px-2">
            <h3>Rental</h3>
            <p>2023</p>
          </div>
          <p className="fw-semibold">
          Rental is a MERNstack web application aims to provide a user-friendly experience, with a central focus on the
rental process. This web application allows users to effortlessly rent bikes for specific time durations, ensuring a
seamless and intuitive experience for users.
          </p>
          <div className="d-flex flex-row  gap-2 ms-auto fw-semibold">
            <h5>
              GitHub:{" "}
              <span className="fs-6">
                <span>Frontend</span>,<span>Backend</span>
              </span>
            </h5>

            <h5>
              Live: <span className="fs-6">Rental</span>
            </h5>
          </div>
        </div>

        <div className="card container py-3 shadow-lg border-0  text-dark gap-3">
          <div className="fw-bold  d-flex flex-row justify-content-between align-items-center px-2">
            <h3>Godox</h3>
            <p>2023</p>
          </div>
          <p className="fw-semibold">
            Godox is an e-commerce web application which offers seamless online
            shopping experience for users. Implemented essential features such
            as product search, secure checkout, order management and
            cartresulting in an intuitive and user-friendly shopping experience.
          </p>
          <div className="d-flex flex-row  gap-2 ms-auto fw-semibold">
            <h5>
              GitHub:{" "}
              <span className="fs-6">
                <span>Link</span>
              </span>
            </h5>

            <h5>
              Live: <span className="fs-6">Godox</span>
            </h5>
          </div>
        </div>
      </div>

      <div className="main_project_card d-flex flex-column gap-3">
        <h3 className="fw-bold pt-5">Mini Projects</h3>
        <div className="card container py-3 shadow-lg border-0  text-dark gap-3">
          <div className="fw-bold  d-flex flex-row justify-content-between align-items-center px-2">
            <h3>Password Generator</h3>
            <p>2023</p>
          </div>
          <p className="fw-semibold">
          <span>&#8226;</span> Password Generator built using React and Firebase.
          <br />
          <span>&#8226;</span> Users can Create, Save, Copy to clipboard,Delete password and Show all created previous passwords.
          <br />
          <span>&#8226;</span> Firebase is used for authorization and authentication withGmail and to Save created passwords
          </p>
          <div className="d-flex flex-row  gap-2 ms-auto fw-semibold">
          <h5>
              GitHub:{" "}
              <span className="fs-6">
                <span>Link</span>
              </span>
            </h5>

            <h5>
              Live: <span className="fs-6">Link</span>
            </h5>
          </div>
        </div>

        <div className="card container py-3 shadow-lg border-0  text-dark gap-3">
          <div className="fw-bold  d-flex flex-row justify-content-between align-items-center px-2">
            <h3>Weather App</h3>
            <p>2023</p>
          </div>
          <p className="fw-semibold">
          <span>&#8226;</span> Weather App built using React, OpenWeather API, RapidAPI.
          <br />
          <span>&#8226;</span> UtilizedOpenWeather APIto display the weather andRapidAPIto take the location information
          <br />
          <span>&#8226;</span> Created a search thatfacilitates location search based on keywords.
          </p>
          <div className="d-flex flex-row  gap-2 ms-auto fw-semibold">
          <h5>
              GitHub:{" "}
              <span className="fs-6">
                <span>Link</span>
              </span>
            </h5>

            <h5>
              Live: <span className="fs-6">Link</span>
            </h5>
          </div>
        </div>

        <div className="card container py-3 shadow-lg border-0  text-dark gap-3">
          <div className="fw-bold  d-flex flex-row justify-content-between align-items-center px-2">
            <h3>To-Do List</h3>
            <p>2023</p>
          </div>
          <p className="fw-semibold">
          <span>&#8226;</span> To-Do List built using React
          <br />
          <span>&#8226;</span> To learn aboutthe CRUDoperation on data inReact.
          </p>
          <div className="d-flex flex-row  gap-2 ms-auto fw-semibold">
          <h5>
              GitHub:{" "}
              <span className="fs-6">
                <span>Link</span>
              </span>
            </h5>

            <h5>
              Live: <span className="fs-6">Link</span>
            </h5>
          </div>
        </div>

        <div className="card container py-3 shadow-lg border-0  text-dark gap-3">
          <div className="fw-bold  d-flex flex-row justify-content-between align-items-center px-2">
            <h3>Netflix</h3>
            <p>2023</p>
          </div>
          <p className="fw-semibold">
          <span>&#8226;</span> Netflix Clone built using React
          <br />
          <span>&#8226;</span> Utilized TheMovieDatabase (TMDB) APIto display movie and TV show information
          <br />
          <span>&#8226;</span> Created a search thatfacilitates movie search based on keywords.
          </p>
          <div className="d-flex flex-row  gap-2 ms-auto fw-semibold">
          <h5>
              GitHub:{" "}
              <span className="fs-6">
                <span>Link</span>
              </span>
            </h5>

            <h5>
              Live: <span className="fs-6">Link</span>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
