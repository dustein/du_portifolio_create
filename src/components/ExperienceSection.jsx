import { ExperienceCards } from "./ExperienceCards";
import aws_icon from '/aws.jpg';
import harvard_icon from '/harvard.jpg';
import freecodecamp_icon from '/freecodecamp.jpg';
import estacio_icon from '/estacio.png';

export function ExperienceSection() {
  return (
    <section className="py-10 sm:py-20 px-4 sm:px-8 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-texts text-3xl sm:text-5xl font-bold tracking-tighter mb-12 sm:mb-20 text-slate-600 bg-sky-100 px-4 p-2">
          /learning_path<span className="text-sky-500 animate-pulse">_</span>
        </h2>

        <div className="space-y-8 sm:space-y-12 border-l-4 border-slate-100 ml-2 sm:ml-4 pl-8 relative">
          
          <ExperienceCards
            year="2024"
            title="CS50P: Introduction to Programming with Python"
            icone={harvard_icon}
            institution="Harvard University"
            certificate="https://certificates.cs50.io/d08af7ae-190a-42ea-ae89-0847f4bac474.pdf?size=letter"
            description="Python fundamentals—from Functions, Conditionals, and Loops to Exceptions and OOP—while ensuring software quality through Regular Expressions, File I/O, Libraries, and Unit Testing with pytest."
          />

          <ExperienceCards
            year="2024"
            title="CS50x: Introduction to Computer Science"
            icone={harvard_icon}
            institution="Harvard University"
            certificate="https://certificates.cs50.io/5d75e7b7-64a0-4663-8a94-c714bfea0117.pdf?size=letter"
            description="Solid foundation in algorithms, data structures, memory management, and cyber security, while leveraging languages like C, Python, Javascript and SQL."
          />

          <ExperienceCards
            year="2023 - present"
            title="Systems Analysis and Development"
            icone={estacio_icon}
            institution="Faculdade Estácio de Sá"
            description="Associate Degree in Brazil's University. Focused on the entire software development lifecycle, from requirements analysis and system design to coding, testing, and database management."
          />

          <ExperienceCards
            year="2023"
            title="AWS Educate Introduction to Cloud 101"
            institution=" Amazon Web Services Training and Certification"
            icone={aws_icon}
            certificate="https://www.credly.com/badges/83acbbc4-dff9-4b47-aa94-f0c630f34b49/public_url"
            description="Acquired a foundational understanding of cloud computing concepts, including AWS core services, security, architecture, and pricing."
          />

          <ExperienceCards
            year="2021"
            title="Back End Development and APIs"
            institution="freeCodeCamp"
            icone={freecodecamp_icon}
            certificate="https://freecodecamp.org/certification/dustein/back-end-development-and-apis"
            description="Fundamentals of back end, focused in building robust servers and RESTful APIs using Node.js and Express, focusing on data persistence with MongoDB and Mongoose."
          />
          
          <ExperienceCards
            year="2021"
            title="JavaScript Algorithms and Data Structures"
            institution="freeCodeCamp"
            icone={freecodecamp_icon}
            certificate="https://freecodecamp.org/certification/dustein/javascript-algorithms-and-data-structures"
            description="Mastery of modern JavaScript fundamentals, algorithmic thinking, and data structures, including proficiency in Functional and Object-Oriented Programming and DOM manipulation."
          />

          <ExperienceCards
            year="2020"
            title="Responsive Web Design"
            institution="freeCodeCamp"
            icone={freecodecamp_icon}
            certificate="https://freecodecamp.org/certification/dustein/responsive-web-design"
            description="Proficient in building professional, accessible, and user-friendly webpages using modern HTML and CSS, with expertise in responsive layout techniques, SEO best practices, and cross-device design."
          />

        </div>
      </div>
    </section>
  );
}