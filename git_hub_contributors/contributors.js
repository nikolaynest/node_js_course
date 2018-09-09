const gitHubUrl = 'https://api.github.com/';
const otherParams = {
    headers: {
        "content-type": "application/json; charset=UTF-8",
        "Accept": "application/vnd.github.v3+json"
    },
    method: "GET"
};

function getContributors(repo) {
    const repoUrl = gitHubUrl + 'orgs/' + repo + '/repos';
    console.log('repoURL:', repoUrl);
    const fetchedRepos = fetch(repoUrl, otherParams)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            // console.log("first result:", result);
            return result;
        })
        .then((repos) => {
            for (let i = 0; i < 3; i++) {
                // console.log(repos[i]);
                const {contributors_url} = repos[i];
                const {name} = repos[i];
                // console.log(contributors_url);
                contributor_info(contributors_url, name);
            }
        })
        .catch((error) => {
            console.log("BAD!", error);
        });
    // console.log("fetchedRepos:", fetchedRepos);
}

const repoContribMap = new Map();

function contributor_info(contributor_url, contributors_name) {
    fetch(contributor_url, otherParams)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            // console.log("result", result);

            // console.log("result values:", result.values());
            let contrib = new Array();
            for (const {login} of result) {
                // console.log(login);
                contrib.push(login);
            }
            repoContribMap.set(contributors_name, contrib);
            return result;
        })
        .catch((error) => {
            console.log("Error during fetch contributors", error);
        })
}

getContributors('nodejs');
console.log("map:", repoContribMap);
