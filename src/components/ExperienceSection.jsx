import { ExperienceCards } from "./ExperienceCards";

export function ExperienceSection() {
  return (
    <section className="py-24 px-4 sm:px-8 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-texts text-2xl sm:text-5xl font-bold tracking-tighter mb-6 sm:mb-20 text-slate-600 bg-sky-200 px-4 pb-1">
          /learning_path<span className="text-sky-400">_</span>
        </h2>

        <div className="space-y-4 border-l-4 border-slate-100 ml-2 sm:ml-4 pl-8 relative">
          
          <ExperienceCards
            year="2024"
            title="CS50x: Introduction to Computer Science"
            institution="Harvard University"
            description="Solid foundation in algorithms, data structures, memory management, and cyber security, while leveraging languages like C, Python, Javascript and SQL."
          />

          <ExperienceCards
            year="2023 - present"
            title="Systems Analysis and Development"
            institution="Estacio de Sa University"
            description="Associate Degree in Brazil's University. Focused on the entire software development lifecycle, from requirements analysis and system design to coding, testing, and database management."
          />

          <ExperienceCards
            year="2021"
            title="Back End Development and APIs"
            institution="freeCodeCamp"
            description="Fundamentals of back end, focused in building robust servers and RESTful APIs using Node.js and Express, focusing on data persistence with MongoDB and Mongoose."
          />
          
          <ExperienceCards
            year="2021"
            title="JavaScript Algorithms and Data Structures"
            institution="freeCodeCamp"
            description="Mastery of modern JavaScript fundamentals, algorithmic thinking, and data structures, including proficiency in Functional and Object-Oriented Programming and DOM manipulation."
          />

          <ExperienceCards
            year="2020"
            title="Responsive Web Design"
            institution="freeCodeCamp"
            description="Proficient in building professional, accessible, and user-friendly webpages using modern HTML and CSS, with expertise in responsive layout techniques, SEO best practices, and cross-device design."
          />

        </div>
      </div>
    </section>
  );
}