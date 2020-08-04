const Config = {
    name: "clark",
    scale: 1,
    Links: [
        [
            "shared drives",
            [
                ["pvusd instrumental music", "https://drive.google.com/drive/folders/0AFYl8OE5jOc4Uk9PVA"],
                ["gtv", "https://drive.google.com/drive/folders/0AN5IvmkSfh89Uk9PVA"]
            ]
        ],
        [
            "daily sites",
            [
                ["infinite campus - attendance and grades", "https://ic.pvschools.net/"],
                ["google classroom - virtual learning platform", "https://www.classroom.google.com"],
                ["gmail", "https://www.mail.google.com"],
                ["google meet - virtual meetings", "https://wwww.meet.google.com"],
                ["evernote - lesson planning and notes", "https://www.evernote.com/"]
            ]
        ],
        [
            "planning",
            [
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"]
            ]
        ],
        [
            "greenway",
            [
                ["minor behavior form", "https://docs.google.com/forms/d/1GFrl_qV0JUPh4A3lUid9RkRvvH2DIOGp2rP9P7s2L9g/viewform?ts=5f20f778&edit_requested=true"],
                ["staff directory", "https://docs.google.com/spreadsheets/d/1u6mBfl6CDg--tE_8vJ1dQ323XNTYv560U10PEaW6Dcw/edit?ts=5f285432#gid=0"],
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
