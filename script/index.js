let tag = document.getElementById("tag-line");

let headings = document.querySelectorAll(".bg-main-content h2");

let collect = `${tag.textContent}\n`;
for (let heading of headings) {
    collect += `${heading.textContent}\n`;
}

alert(collect);



let h1 = document.getElementsByClassName("bg-main-content")[0];

let when_to_launch = h1.getElementsByClassName("box")[12];

let Child = when_to_launch.children;

collect = `${Child[0].textContent}\n`;

var loop;

for (loop = 1; loop < Child.length; loop++) {
    collect += `${Child[loop].textContent}\n`;
}

alert(collect);
