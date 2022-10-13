let dataProject = [];

function AddProject(event) {
    event.preventDefault();

    let title = document.getElementById("input-title").value;
    let start = document.getElementById("start-date").value;
    let end = document.getElementById("end-date").value;
    let description = document.getElementById("project-description").value;
    let technologies = document.getElementById("tech-list").value;
    let image = document.getElementById("upload-image").files[0];

    image = URL.createObjectURL(image);

    let project = {
        title,
        start,
        end,
        description,
        technologies,
        image,
    };

    dataProject.push(project);
    console.log(dataProject);

    RenderProject();
}

function RenderProject() {
    document.getElementById("grid-container").innerHTML = ``;
    
    for (let index = 0; index < dataProject.lenght; index++) {
        console.log(dataProject[index])

        document.getElementById("grid-container").innerHTML += `
            <div class="card-project">
                <img src="${dataProject[index].image}">
                <h2>Dumbways Mobile App - 2022</h2>
                <h3>durasi: ${dataProject[index].start} - ${dataProject[index].end}</h3>
                <p>${dataProject[index].description}</p>
                <div class="card-icon">
                    <ul>
                        <li><a href="#"><i class="fa-brands fa-google-play"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-android"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-java"></i></a></li>
                    </ul>
                </div>
                <div class="card-button">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        `;
        }
    }

    // onsubmit="addBlog(event); this.reset(); return false;"