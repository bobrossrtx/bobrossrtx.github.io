// https://api.github.com/users/bobrossrtx/repos

fetch("https://api.github.com/users/bobrossrtx/repos")
    .then(function (response) {
        return response.json();
    })
    .then(function (myApiRepos) {
        function github_repo_model() {
            let output = '';
            for(let i = 0; i < myApiRepos.length; i++) {
                if (myApiRepos[i]["description"] === null || myApiRepos[i]["description"] === "null") {
                    myApiRepos[i]["description"] = "(No description)";
                }
                output += `
<a class="repo-model-button" href="${myApiRepos[i]["html_url"]}" target="_blank">
    <div class="repo-model">
        <h2 id="repo-title" class="repo-title">${myApiRepos[i]["name"]} <h5 id="repo-breadcrumb" class="repo-breadcrumb">${myApiRepos[i]["full_name"]}</h5></h2>
        <p id="repo-desc" class="repo-desc">Description: ${myApiRepos[i][`description`]}</p>
    </div>
</a>
`
            }
            return output;
        }
        document.getElementById("repos").innerHTML = github_repo_model();
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })