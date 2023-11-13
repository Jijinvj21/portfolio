import "./Projects.scss";
import godox from "../../assets/images/godox.png";
import Rental from "../../assets/images/rental.png";
import Password from "../../assets/images/passwordgenerator.png";
import Weather from "../../assets/images/wetherapp.png";
import ToDo from "../../assets/images/todo.png";
import Netflix from "../../assets/images/netflix.png";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { Button } from "react-bootstrap";

function Projects() {
  const [viewMore, setViewMore] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [modalData, setModalData] = useState({
    image: "",
    name: "",
    tech: "",
    type: "",
    GitLink: "",
    GitLink2: "",
    ProjectLink: "",
  });

  return (
    <section className="projects_section pb-5">
      <h1 className="fw-bold">Projects</h1>
      <div className="p-5">
        <div className="cards  d-flex flex-wrap gap-5">
          <div
            className="card rounded-3 p-3 position-relative  "
            onClick={() => {
              setViewModal(true);
              setModalData({
                image: godox,
                name: "GODOX",
                tech: "MERN stack",
                type: "E COMMERCE APPLICATION",
                GitLink: "https://github.com/Jijinvj21/godox-e-commerce-",
                ProjectLink: "https://www.godox.website/",
              });
            }}
          >
            <img src={godox} alt="godox" className="rounded-3 " />
            <div className="position-absolute z-5 top-50 start-50 translate-middle text-light text-center ">
              <h4 className="fw-bold  shadow-sm p-0 m-0">Godox</h4>
              <p className="p-0 m-0 fw-semibold ">2022</p>
            </div>
          </div>
          <div
            className="card rounded-3 p-3 position-relative  "
            onClick={() => {
              setViewModal(true);
              setModalData({
                image: Rental,
                name: "RENTAL",
                tech: "React | MongoDB | NodeJS | ExpressJS | TailwindCSS | AWS EC2 ",
                type: "MERN PERSONAL PROJECT",
                GitLink: "https://github.com/Jijinvj21/Rental_frontend",
                GitLink2: "https://github.com/Jijinvj21/Rental_Backend",
                ProjectLink: "https://rental.jijinvj.tech/",
              });
            }}
          >
            <img src={Rental} alt="Rental" className="rounded-3 " />
            <div className="position-absolute z-5 top-50 start-50 translate-middle text-light text-center ">
              <h4 className="fw-bold  shadow-sm p-0 m-0">Rental</h4>
              <p className="p-0 m-0 fw-semibold ">2023</p>
            </div>
          </div>
          <div
            className="card rounded-3 p-3 position-relative  "
            onClick={() => {
              setViewModal(true);
              setModalData({
                image: Password,
                name: "PASSWORD GENERATOR",
                tech: "React | FireStore | Google Auth | Tailwind | Netlify",
                type: "WEB DEVELOPMENT",
                GitLink: "https://github.com/Jijinvj21/passwordGenerator",
                ProjectLink: "https://password-generater-w-react-firebase.netlify.app/",
              });
            }}
          >
            <img src={Password} alt="Password" className="rounded-3 " />
            <div className="position-absolute z-5 top-50 start-50 translate-middle text-light text-center ">
              <h4 className="fw-bold  shadow-sm p-0 m-0">Password Generator</h4>
              <p className="p-0 m-0 fw-semibold ">2023</p>
            </div>
          </div>
          {viewMore && (
            <>
              <div
                className="card rounded-3 p-3 position-relative  "
                onClick={() => {
                  setViewModal(true);
                  setModalData({
                    image: Weather,
                    name: "WEARHER APP",
                    tech: "ReactJS",
                    type: "FRONT END",
                    GitLink: "https://github.com/Jijinvj21/React_Weather_App",
                    ProjectLink: "https://weather-app-bck-bw.netlify.app/",
                  });
                }}
              >
                <img src={Weather} alt="Weather" className="rounded-3 " />
                <div className="position-absolute z-5 top-50 start-50 translate-middle text-light text-center ">
                  <h4 className="fw-bold  shadow-sm p-0 m-0">Weather App</h4>
                  <p className="p-0 m-0 fw-semibold ">2023</p>
                </div>
              </div>
              <div
                className="card rounded-3 p-3 position-relative border-none  "
                onClick={() => {
                  setViewModal(true);
                  setModalData({
                    image: ToDo,
                    name: "TO_DO_LIST",
                    tech: "ReactJS",
                    type: "FRONT END",
                    GitLink: "https://github.com/Jijinvj21/React-todo-list",
                    ProjectLink: "https://jijinvj21.github.io/React-todo-list/",
                  });
                }}
              >
                <img src={ToDo} alt="To-Do" className="rounded-3  border" />
                <div className="position-absolute z-5 top-50 start-50 translate-middle   text-center ">
                  <h4 className="fw-bold   p-0 m-0">To-Do List</h4>
                  <p className="p-0 m-0 fw-semibold ">2023</p>
                </div>
              </div>
              <div
                className="card rounded-3 p-3 position-relative  "
                onClick={() => {
                  setViewModal(true);
                  setModalData({
                    image: Netflix,
                    name: "NETFLIX",
                    tech: "ReactJS",
                    type: "FRONT END",
                    GitLink: "https://github.com/Jijinvj21/netflixclon",
                    ProjectLink: "https://jijinvj21.github.io/netflixclon/",
                  });
                }}
              >
                <img src={Netflix} alt="Netflix" className="rounded-3 " />
                <div className="position-absolute z-5 top-50 start-50 translate-middle text-light text-center ">
                  <h4 className="fw-bold  shadow-sm p-0 m-0">Netflix</h4>
                  <p className="p-0 m-0 fw-semibold ">2023</p>
                </div>
              </div>{" "}
            </>
          )}
        </div>
        {!viewMore && (
          <div className=" rounded-3 py-2 pt-3 mt-3 bg-secondary text-light  text-center  mx-auto" onClick={() => setViewMore(true)}>
            <h5 className="fw-bold " >
              LOAD MORE
            </h5>
          </div>
        )}
      </div>
      {viewModal && (
        <Modal>
          <div className="modal_section">
            <div>
              <img
                src={modalData.image}
                alt={modalData.image}
                width={800}
                className="rounded-3 border border-3 "
              />
            </div>
            <div className="py-3 d-flex flex-column gap-1">
              <h4 className="fw-bold">{modalData.name}</h4>
              <h6>{modalData.tech}</h6>
              <h6>{modalData.type}</h6>
            </div>
            <div className="d-flex flex-wrap justify-content-md-center gap-2 ">
              <a
                href={modalData.ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Button className="rounded-pill  px-4 px-md-5 py-md-2 bg-secondary boarder border-secondary fw-bold">
                  VIEW PROJECT{" "}
                </Button>
              </a>
              <a
                href={modalData.GitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-pill px-4 px-md-5 py-md-2 bg-secondary boarder border-secondary fw-bold">
                  {modalData.GitLink2 ? "FRONTEND REPO" : "GITHUB REPO"}
                </Button>
              </a>
              {modalData.GitLink2 && (
                <a
                  href={modalData.GitLink2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-pill  px-4 px-md-5 py-md-2 bg-secondary boarder border-secondary fw-bold ">
                    BACKEND REPO
                  </Button>
                </a>
              )}
              <Button
                className="rounded-pill px-4  px-md-5 py-md-2 bg-secondary boarder border-secondary fw-bold "
                onClick={() => setViewModal(false)}
              >
                CLOSE
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default Projects;
