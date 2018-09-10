const gitHubUrl = 'https://api.github.com/';

function getContributors(repo, repoNumbers) {
    const repoUrl = gitHubUrl + 'orgs/' + repo + '/repos';
    console.log('repoURL:', repoUrl);
    const fetchedRepos = fetch(repoUrl)
        .then((response) => {
            return response.json();
        })
        .then((repos) => {
            for (let i = 0; i < repoNumbers; i++) {
                const {contributors_url, name} = repos[i];
                contributor_info(contributors_url, name);
            }
        })
        .catch((error) => {
            console.log("BAD!", error);
        });
}

const repoContribMap = new Map();

function contributor_info(contributor_url, contributors_name) {
    fetch(contributor_url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            let contrib = new Array();
            for (const {login} of result) {
                contrib.push(login);
            }
            repoContribMap.set(contributors_name, contrib);
            return result;
        })
        .catch((error) => {
            console.log("Error during fetch contributors", error);
        })
}

getContributors('nodejs', 3);
console.log("map:", repoContribMap);
