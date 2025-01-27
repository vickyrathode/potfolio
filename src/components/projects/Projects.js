// import React, { useState } from 'react';

// const Projects = () => {
//   // Manually defined project data with images
//   const [projects] = useState([
//     {
//       id: 1,
//       name: 'AVrestaurant',
//       description: 'A restaurant website project utilizing HTML and CSS to create a responsive and visually appealing design.',
//       image: '/images/avrestaurant.png', // Replace with actual image paths
//       link: 'https://github.com/vickyrathode/AVrestaurant',
//     },
//     {
//       id: 2,
//       name: 'Anime',
//       description: 'A web development project focusing on animations and interactive UI elements using CSS and HTML.',
//       image: '/images/anime.png', // Replace with actual image paths
//       link: 'https://github.com/vickyrathode/anime',
//     },
//     {
//       id: 3,
//       name: 'Calculator',
//       description: 'A simple calculator application built with HTML and CSS, demonstrating basic arithmetic operations.',
//       image: '/images/calculator.png', // Replace with actual image paths
//       link: 'https://github.com/vickyrathode/calculator',
//     },
//     {
//       id: 4,
//       name: 'News Zone',
//       description: 'A news website project that aggregates and displays news articles, showcasing skills in web development.',
//       image: '/images/news-zone.png', // Replace with actual image paths
//       link: 'https://github.com/vickyrathode/news-zone',
//     },
//     {
//       id: 5,
//       name: 'Cricket',
//       description: 'A cricket-related project, possibly involving statistics or game simulations, developed using web technologies.',
//       image: '/images/cricket.png', // Replace with actual image paths
//       link: 'https://github.com/vickyrathode/cricket',
//     },
//     {
//       id: 6,
//       name: 'Portfolio Website',
//       description: 'A personal portfolio website to showcase my projects, skills, and contact details.',
//       image: '/images/portfolio.png', // Replace with actual image paths
//       link: 'https://github.com/vickyrathode/portfolio-website',
//     },
//   ]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 3; // Only 3 projects per page (1 row)

//   // Calculate the projects to display
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

//   // Handle pagination
//   const handleNext = () => {
//     if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <section id="projects" className="py-16 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {currentProjects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white p-6 rounded shadow-md hover:shadow-lg transition"
//             >
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-bold">{project.name}</h3>
//               <p className="mt-2">{project.description}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 mt-4 inline-block"
//               >
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 flex justify-center space-x-4">
//           <button
//             onClick={handlePrev}
//             disabled={currentPage === 1}
//             className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50`}
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
//             className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50`}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React, { useState } from 'react';
import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.webp";
import Project4 from "../../assets/project4.png";
import Project5 from "../../assets/project5.jpg";
import Project6 from "../../assets/project6.png";
import Project7 from "../../assets/project6.jpg";

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      name: 'Restaurant Booking',
      description: 'A web application for managing restaurant bookings, allowing customers to reserve tables seamlessly.',
      image: Project1,
      link: 'https://github.com/vickyrathode/AVrestaurant',
    },
    {
      id: 2,
      name: 'Ecommerce',
      description: 'An ecommerce platform with advanced features for managing products, orders, and customers.',
      image: Project2,
      link: 'https://github.com/vickyrathode/eco',
    },
    {
      id: 3,
      name: 'Image Generator',
      description: 'A tool to generate AI-powered images based on user prompts, showcasing advanced AI integration.',
      image: Project3,
      link: 'https://github.com/vickyrathode/imageGEN',
    },
    {
      id: 4,
      name: 'Order Panel',
      description: 'A streamlined order management system for tracking and processing customer orders efficiently.',
      image: Project4,
      link: 'https://github.com/vickyrathode/order_panel',
    },
    {
      id: 5,
      name: 'Weather (API)',
      description: 'A weather application that fetches real-time weather data using a public API for any location.',
      image: Project5,
      link: 'https://github.com/vickyrathode/weather',
    },
    {
      id: 6,
      name: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects, skills, and contact details in a visually appealing way.',
      image: Project6,
      link: 'https://github.com/vickyrathode/potfolio',
    },
    {
      id: 7,
      name: 'Shopping',
      description: 'A comprehensive shopping platform with features for browsing, adding items to the cart, and checkout.',
      image: Project7,
      link: 'https://github.com/vickyrathode/shoppings',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handleNext = () => {
    if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
