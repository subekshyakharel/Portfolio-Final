import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./project.css";
import trailerworld from "../assets/trailerworld.png";
import financeTracker from "../assets/financeTracker.png";
import libraryManagement from "../assets/libraryManagement.png";
const Project = ({ brightNess }) => {

  return (
    <Container
      className=" project"
      style={{ color: brightNess ? "black" : "white" }}
      id="project"
    >
      <h1 className="text-center custom-color py-5 my-5">My Latest Projects</h1>

      <div className="projectContainer">
        <div className="projectSection1 px-4">
          <div className="img d-flex justify-content-center align-items-center">
            <img width={"100%"} src={trailerworld} alt="project_image" />
          </div>
          <div className="description d-flex flex-column gap-4">
            <h5 className="fw-bold text-center">Trailer World</h5>
            <p className="text-center" style={{ margin: 0 }}>
            TrailerWorld is a web application that enables users to search for movies by title and watch their trailers.
Built with React and integrated with the TMDB API, it provides a simple yet effective platform for exploring movie options and enjoying trailers.

            </p>
            <div className="fw-bold d-flex gap-3 flex-nowrap justify-content-center">
              <div>React</div>
              <div>API</div>
            </div>

            <div className="d-flex justify-content-center gap-4 ">
              <div>
                Code{" "}
                <a
                  href="https://github.com/subekshyakharel/TrailerWorld"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div>
                Live Demo{" "}
                <a
                  href="https://trailer-world.vercel.app/"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projectSection1 px-4">
          <div className="description d-flex flex-column gap-4">
            <h5 className="fw-bold text-center">Finance Tracker</h5>
            <p className="text-center" style={{ margin: 0 }}>
           A user-friendly web application designed to help users manage their personal finances efficiently. It allows tracking of income and expenses, categorizing transactions, and visualizing financial data to support better budgeting and spending decisions. Built with React for a dynamic interface and implemented state management to ensure smooth and responsive user experience.
            </p>
            <div className="fw-bold d-flex gap-3 flex-nowrap justify-content-center">
              <div>React</div>
              <div>State Management</div>
              <div>REST API</div>
            </div>

            <div className="d-flex justify-content-center gap-4 ">
              <div>
                Code{" "}
                <a
                  href="https://github.com/subekshyakharel/Frontend-FinanceTracker"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div>
                Live Demo{" "}
                <a
                  href="https://frontend-finance-tracker.vercel.app/"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="img d-flex justify-content-center align-items-center">
            <img width={"100%"} src={financeTracker} alt="project_image" />
          </div>
          
        </div>

        <div className="projectSection1 px-4">
          <div className="img d-flex justify-content-center align-items-center">
            <img width={"100%"} className="border" src={libraryManagement} alt="project_image" />
          </div>
          <div className="description d-flex flex-column gap-4">
            <h5 className="fw-bold text-center">Library Management System</h5>
            <p className="text-center" style={{ margin: 0 }}>
           A comprehensive web application designed to streamline library operations, including book cataloging, user management, borrowing, and return tracking. The system offers an intuitive interface for both librarians and users, featuring real-time updates and efficient handling of book availability. It also includes a review and approval system managed by admins to ensure quality control and maintain accurate records. Additional features include user borrowing history, notifications for overdue books, and role-based access control. Built with modern web technologies to ensure scalability, security, and ease of use.
            </p>
            <div className="fw-bold d-flex gap-3 flex-nowrap justify-content-center">
              <div>React</div>
              <div>State Management</div>
              <div>REST API</div>
              <div>Node.js</div>
              <div>Database</div>
            </div>

            <div className="d-flex justify-content-center gap-4 ">
              <div>
                Code{" "}
                <a
                  href="https://github.com/subekshyakharel/Frontend-Library-Management-System"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              {/* <div>
                Live Demo{" "}
                <a
                  href="https://frontend-finance-tracker.vercel.app/"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
