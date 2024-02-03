import React from "react";

const Work = () => {
  return (
    <div>
      <main id="work">
        <h1 className="lg-heading">
          My
          <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
            <a href="https://tanveer19.github.io/1.1-MyBookList/">
              <img src="img/projects/project1.jpg" alt="project1" />
            </a>
            <a
              href="https://tanveer19.github.io/1.1-MyBookList/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Book List App using JS, local
              storage
            </a>
            <a
              href="https://github.com/tanveer19/BookList"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github Link
            </a>
          </div>

          <div className="item">
            <a href="https://tanveer19.github.io/1.4-simple-weight-converter">
              <img src="img/projects/project2.jpg" alt="project1" />
            </a>
            <a
              href="https://tanveer19.github.io/1.4-simple-weight-converter/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Weight Convert using vanilla JS
            </a>
            <a
              href="https://github.com/tanveer19/1.4-simple-weight-converter"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github Link
            </a>
          </div>
          <div className="item">
            <a href="https://tanveer19.github.io/1.3-Quick-Autocomplete-App-With-JS/">
              <img src="img/projects/project3.jpg" alt="project1" />
            </a>
            <a
              href="https://tanveer19.github.io/1.3-Quick-Autocomplete-App-With-JS/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Search USA states by autocomplete
              using vanilla JS.
            </a>
            <a
              href="https://github.com/tanveer19/1.3-Quick-Autocomplete-App-With-JS"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github Link
            </a>
          </div>
          <div className="item">
            <a href="https://tanveer19.github.io/0.3.Traffic">
              <img src="img/projects/project4.jpg" alt="project1" />
            </a>
            <a
              href="https://tanveer19.github.io/0.3.Traffic/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Responsive site with color/layout
              changer
            </a>
            <a href="https://github.com/tanveer19/traffic" className="btn-dark">
              <i className="fab fa-github"></i> Github Link
            </a>
          </div>
          <div className="item">
            <a href="https://tanveer19.github.io/0.1.plab">
              <img src="img/projects/project5.jpg" alt="project1" />
            </a>
            <a
              href="https://tanveer19.github.io/0.1.plab/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Responsive site using Bootstrap
            </a>
            <a href="https://github.com/tanveer19/plab" className="btn-dark">
              <i className="fab fa-github"></i> Github Link
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
