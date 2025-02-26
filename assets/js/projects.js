let projects = [];

async function loadProjects() {
  const response = await fetch("../../data/projects.json");
  projects = await response.json();
  displayProjects("all");
}

function displayProjects(category) {
  const container = document.getElementById("container-projects");
  container.innerHTML = "";
  projects.forEach((project) => {
    if (category === "all" || project.category === category) {
      const projectCard = `
            <div
                class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"
              >
                <div class="portfolio-content h-100">
                  <img
                    src="${project.image}"
                    class="img-fluid"
                    alt="${project.name + " Image"}"
                  />
                  <div class="portfolio-info">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                    <a
                      href="${project.image}"
                      title="${project.name}"
                      data-gallery="portfolio-gallery-branding"
                      class="glightbox preview-link"
                      ><i class="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="${project.link}"
                      title="More Details"
                      class="details-link"
                      ><i class="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
            `;

      container.innerHTML += projectCard;
      document.dispatchEvent(new Event("imagesLoaded"));
    }
  });
}

function filterProjects(category) {
  displayProjects(category);
}

loadProjects();

const filterAll = document.getElementById("filterButtonAll");
const filterWeb = document.getElementById("filterButtonWeb");
const filterAndroid = document.getElementById("filterButtonAndroid");
const filterDesktop = document.getElementById("filterButtonDesktop");
const filterLib = document.getElementById("filterButtonLib");

filterAll.addEventListener("click", filterProjects("all"));
filterWeb.addEventListener("click", () => {
  filterProjects("web");
  loadProjects();
});
filterDesktop.addEventListener("click", filterProjects("desktop"));
filterLib.addEventListener("click", filterProjects("library"));
filterAndroid.addEventListener("click", filterProjects("mobile"));
