const requirements = [
    "Be friendly, welcoming, and enthusiastic.",
    "Describe something that the creator likes about Scratch.",
    "Invite New Scratchers to comment on the project to introduce themselves and ask questions. (Example: Feel free to comment if you have any questions)",
    "Include a brief introduction to Scratch.",
    "Link to the Scratch Wiki (https://en.scratch-wiki.info/) and the New Scratchers forum (https://scratch.mit.edu/discuss/6/) by pasting these links in the notes and credits.",
    "Make the project look appealing and include a backdrop or a couple of sprites."
];

function loadBuilder() {

    const container = document.getElementById("checkboxes");

    if (!container) return;

    requirements.forEach((requirement, index) => {

        container.innerHTML += `
            <label>
                <input type="checkbox" id="req${index}">
                ${requirement}
            </label>
            <br>
        `;

    });
}

function generateLink() {

    let code = "";

    requirements.forEach((_, index) => {

        let checked =
            document.getElementById(`req${index}`).checked;

        // checked = missing requirement
        code += checked ? "1" : "0";

    });


    let link =
        window.location.origin +
        "/r.html#" +
        code;


    document.getElementById("result").innerHTML =
        `
        <a href="${link}" target="_blank">
            ${link}
        </a>
        `;
}





function loadReview() {

    const list = document.getElementById("missing");

    if (!list) return;


    let code = window.location.hash.substring(1);


    if (!code) return;


    requirements.forEach((requirement, index) => {

        if (code[index] === "1") {

            let item = document.createElement("li");

            item.textContent = requirement;

            list.appendChild(item);

        }

    });

}


loadBuilder();
loadReview();
