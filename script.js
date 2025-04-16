document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById("output");
    const typedCommand = document.getElementById("typed-command");
// Function to simulate typing effect
function typeText(targetElement, text, speed = 50, callback) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      targetElement.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}
    const bootMessages = [
        "--------------------------------------------©©© TYLER HENSON ©©©--------------------------------------------",
        "Initializing system...",
        "Loading personal files...",
        "Authentication complete.",
        "C:\\> Ready."
    ];

    function printLine(text, delay = 100) {
        return new Promise(resolve => {
            setTimeout(() => {
                let line = document.createElement("div");
                line.textContent = text;
                output.appendChild(line);
                window.scrollTo(0, document.body.scrollHeight);
                resolve();
            }, delay);
        });
    }

    async function bootUp() {
        for (let msg of bootMessages) {
            await printLine(msg, 500);
        }
        showMenu();
    }

    function showMenu() {
        let commands = [
            "about_me",
            "portfolio",
            "contact",
            "mystery",
            "shutdown"
        ];
        printLine("C:\\> Click a command to continue:");

        commands.forEach(cmd => {
            let cmdElement = document.createElement("div");
            cmdElement.innerHTML = `C:\\> <span class='clickable' id="${cmd}">${cmd}</span>`;
            output.appendChild(cmdElement);

            // Add click event listener to each clickable command
            document.getElementById(cmd).addEventListener('click', () => {
                executeCommand(cmd);
            });
        });
    }

    function executeCommand(command) {
        typedCommand.innerHTML = command;
        setTimeout(() => {
            printLine(`C:\\> ${command}`);
            handleCommand(command);
            typedCommand.innerHTML = "";
        }, 500);
    }

    function handleCommand(command) {
        
        switch (command) {
            case "about_me":
                printLine("Loading user profile...");
                printLine("------------------------------");
                printLine("NAME: TYLER HENSON");
                printLine("OCCUPATION: GRAPHIC DESIGNER");
                printLine("LOCATION: EDMONTON, AB");
                printLine("BIO: Welcome to my portfolio! I’m thrilled you’re here! As a hobbyist graphic designer, I’ve been engaged in the world of design almost as long as I’ve been online. I’d love the opportunity to chat with you about your graphic design needs and how I can bring your vision to life. Feel free to explore some of the projects I’ve worked on, and let's create something amazing together!");
                printLine("------------------------------");
                break;

           case "portfolio":
    printLine("C:\\Projects\\>");
    
    // Create a container for the project links
    let container = document.createElement("div");
    container.style.marginTop = "10px";
    
    // Helper function to create a project link element
    function createProjectLink(text, url) {
        let span = document.createElement("span");
        span.className = "clickable";
        span.textContent = text;
        span.style.marginRight = "10px";
        span.addEventListener("click", function() {
            window.open(url, "_blank");
        });
        return span;
    }
    
    // Create the project links
    let project1 = createProjectLink("MYDIGITALNIGHTMARES", "https://www.behance.net/gallery/213212425/MY-DIGITAL-NIGHTMARES-Exploring-Digital-Horror");
    let project2 = createProjectLink("TOBACCO", "https://www.behance.net/gallery/175328791/THEPROPHAT-TOBACCO");
    let project3 = createProjectLink("Secret Project", "https://www.youtube.com/c/theprophatlp");
    
    // Append text and links to container
    container.appendChild(document.createTextNode("[ "));
    container.appendChild(project1);
    container.appendChild(document.createTextNode(" ]"));
    
    // Optionally add a line break between projects
    container.appendChild(document.createElement("br"));
    
    container.appendChild(document.createTextNode("[ "));
    container.appendChild(project2);
    container.appendChild(document.createTextNode(" ]"));
    
    container.appendChild(document.createElement("br"));
    
    container.appendChild(document.createTextNode("[ "));
    container.appendChild(project3);
    container.appendChild(document.createTextNode(" ]"));
    
    // Append container to the output div
    output.appendChild(container);
    break;

            case "contact":
                printLine("Contact Me:");
                printLine("Email: contact@tylerhensondesigns.com");
                printLine("Twitter: @MDN_404");
                printLine("Behance: https://www.behance.net/tylerhensondesigns");
                break;
            case "mystery":
                printLine("Decrypting hidden message...");
                setTimeout(() => {
                    printLine("C:\\> ERROR: FILE CORRUPTED.");
                }, 1000);
                break;
            case "shutdown":
                printLine("Shutting down...");
                setTimeout(() => {
                    document.body.innerHTML = "<h1 style='color:red; text-align:center;'>FATAL ERROR: SYSTEM FAILURE</h1>";
                }, 2000);
                break;
            default:
                printLine("C:\\> ERROR: Unknown command.");
                break;
        }
    }

    bootUp();
});
