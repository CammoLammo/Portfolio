import ProjectEntry from "./ProjectEntry";
import medicineImg from "../images/medicine-box.png";
import birthdayTVImg from "../images/birthday-tv.png";
import birthdaySheetsImg from "../images/birthday-sheets.png";
import spotifyImg from "../images/spotify-songs.png";
import portfolioImg from "../images/portfolio.png";

export default function Projects() {
    return (
        <div className="">
            <p className="text-3xl font-bold text-left pt-4 pb-4 text-white">
                Projects
            </p>
            <ProjectEntry
                title={"Party Room TV Display"}
                description={`A web page to be displayed on the TVs in the party rooms at Jungle Gym Willetton. The page
                    uses a React frontend and a Node.js backend to integrate with the Acuity Booking API to update the display.
                    The page shows the name of the birthday child and provides countdown timers to keep the parties on schedule.
                    The website is hosted on Vercel and the TVs use a web browser app to display the pages with some Google Home
                    automations to turn them on in the mornings.`}
                skills={[
                    "React",
                    "Node.js",
                    "JavaScript",
                    "CSS",
                    "HTML",
                    "Vercel",
                    "REST API",
                ]}
                image={birthdayTVImg}
            />
            <ProjectEntry
                title={"Spotify Song Data Analysis"}
                description={`Data analysis lifecycle using a data set of Spotify songs. This project included a
                    written R report and a Shiny Application for data exploration. First data was cleaned and transformed
                    then classification models were built to predict song popularity. Finally clusterring was used
                    to group the songs into similar categories.`}
                skills={[
                    "R",
                    "Shiny App",
                    "Data Analysis",
                    "Classification",
                    "Clustering",
                ]}
                image={spotifyImg}
            />

            <ProjectEntry
                title={"Birthday Sheet Generator"}
                description={`An Electron desktop app that generates filled sheets containing birthday party 
                    information for Jungle Gym Willetton. The app uses the Electron framework built on JavaScript,
                    CSS and HTML with a Node.js backend. Booking data is accessed through the Acuity Booking API
                    and is used to fill a pdf template to be printed for use every week.`}
                skills={[
                    "Electron",
                    "JavaScript",
                    "CSS",
                    "HTML",
                    "Node.js",
                    "REST API",
                ]}
                image={birthdaySheetsImg}
            />
            <ProjectEntry
                title={"Smart Medicine Box"}
                description={`A smart medicine box that gives users reminders and measures medication dosage. 
                    The box uses a Raspberry Pi as the controller for the system and has a web dashboard to 
                    set up and monitor the conditions of the box. The medicine box logic is written in Python 
                    and the web dashboard is built using a Vue.js frontend. A MySQL database is used to store the data.`}
                skills={[
                    "Raspberry Pi",
                    "Python",
                    "Vue.js",
                    "MySQL",
                    "Hardware Integration",
                    "Electrical Engineering",
                    "Internet of Things",
                ]}
                image={medicineImg}
            />

            <ProjectEntry
                title={"Portfolio Website"}
                description={`The website you are on right now! This portfolio website uses React with TailwindCSS 
                    for the styling. It showcases my skills and projects while giving a little insight into who I am.
                    The website is hosted on Vercel and the background effect is achieved using the tsParticles library.`}
                skills={[
                    "React",
                    "TailwindCSS",
                    "JavaScript",
                    "HTML",
                    "Vercel",
                    "tsParticles",
                ]}
                image={portfolioImg}
            />
        </div>
    );
}
