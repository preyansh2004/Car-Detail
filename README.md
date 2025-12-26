# 🚘 Luxury Car Dealership Website (Rolls-Royce Theme)

A fully responsive, feature-rich web application designed for a luxury car dealership. This project showcases Rolls-Royce models (Phantom, Ghost, Cullinan) using dynamic API data, interactive UI components, and a modern design aesthetic.

## 📖 Table of Contents
- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Credits](#credits)

## 🧐 About the Project
This project serves as a comprehensive digital showroom for luxury vehicles. It allows users to explore different car models, view detailed technical specifications sourced from an external database, locate dealerships, and learn about maintenance services. The application is built with a mobile-first approach using **Bootstrap 5**.

## ✨ Key Features
- **Dynamic Model Catalog**: Fetches real-time vehicle specifications (Engine, Horsepower, Dimensions) using the **CarQuery API**.
- **Interactive UI**:
  - Full-screen image carousels for vehicle showcases.
  - Hover effects on model cards and navigation elements.
  - Embedded YouTube videos for service demonstrations (Wiper blades, Brake checks, etc.).
- **Dealership Locator**: specialized cards displaying dealer info, hours, and services.
- **Contact Form**: Includes JavaScript-based validation for user inquiries.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens using Bootstrap's grid system.

## 🛠 Technologies Used
- **Frontend Framework**: [Bootstrap 5.3.2](https://getbootstrap.com/)
- **Scripting**: JavaScript (ES6), [jQuery 3.6.0](https://jquery.com/)
- **Icons**: [Font Awesome 6.5.0](https://fontawesome.com/)
- **API**: [CarQuery API](https://www.carqueryapi.com/) (for fetching car data)
- **Styling**: CSS3 with custom gradients and animations.

## 📂 Project Structure
The code provided in `paste.txt` should be split into the following file structure for the app to work correctly:

/project-root
│
├── index.html # (or home.html) Main landing page with carousels
├── dealers.html # List of dealership locations
├── models.html # Grid view of available car models
├── details.html # Specific car details page (fetches data via API)
├── service.html # Service center information with video embeds
├── contactUs.html # Contact form page
│
├── css/
│ ├── home.css
│ ├── dealers.css
│ ├── models.css
│ ├── service.css
│ └── contactUs.css
│
└── js/
└── contactUs.js # Form validation logic


## 🚀 Setup & Installation
1.  **Clone the repository** or download the source code.
2.  **Organize the files** according to the structure above (separating the CSS and HTML from the single text file).
3.  **Open `home.html`** in any modern web browser (Chrome, Firefox, Edge).
    *   *Note: An internet connection is required to load Bootstrap/FontAwesome via CDN and to fetch data from the CarQuery API.*


## 📄 License
This project is open-source and available for educational purposes.
