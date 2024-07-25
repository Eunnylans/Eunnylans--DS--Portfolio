import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/Project4.png";
import Project5 from "./assets/Project5.png";

import Testimonial1 from "./assets/testimonial1.png";
import Testimonial2 from "./assets/testimonial2.png";
import Testimonial3 from "./assets/testimonial3.png";

export const links = [
  {
    name: "Title Page",
    path: "hero",
  },
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Projects",
    path: "work",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Resume",
    path: "resume",
  },

  {
    name: "Recommendations",
    path: "testimonial",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const services = [
  {
    id: 1,
    name: "Web Development",
    title: "Web Design & development",
    description:
      "Create custom designs for your website that are tailored to your brand and business goals.Build your website from scratch or work with an existing design to develop a functional website using the latest web technologies.",
  },
  {
    id: 2,
    name: " Creative ",
    title: " Graphics Design, UI & UX",
    description:
      " create a user experience (UX) design that ensures your website is intuitive and easy to navigate, leading to increased user satisfaction and engagement.",
  },
  {
    id: 3,
    name: " Digital Marketing ",
    title: " Campaign Manager ",
    description:
      "  I can help you create and execute successful digital marketing campaigns to promote your brand and reach your target audience. services include: Strategy development, campaign planning and execution, audience targeting etc. ",
  },
  {
    id: 4,
    name: " Advertising ",
    title: " Paid & Organic ",
    description:
      "  I can work with you to develop a comprehensive paid and organic advertising strategy that aligns with your business goals and targets your ideal audience. ",
  },
  {
    id: 5,
    name: " Innovation ",
    title: " Innovation Management ",
    description:
      "As an innovation manager, I can work with you to develop and implement strategies to foster innovation within your organization",
  },
  {
    id: 6,
    name: " Social Media ",
    title: " Social Media Management ",
    description:
      "As a social media manager, I can help you create and execute successful social media strategies to build your brand, engage with your audience, and drive business results.",
  },
  {
    id: 7,
    name: " SEO ",
    title: " Search Engine Optimization ",
    description:
      "As an SEO specialist, I can work with you to improve your websites search engine rankings, increase organic traffic, and drive business results.",
  },
  {
    id: 8,
    name: " Marketing ",
    title: " Marketing Manager ",
    description:
      "As a marketing manager, I can work with you to develop and implement effective marketing strategies that help you reach your business goals. ",
  },
];

export const skills = [
  {
    id: 1,
    name: "Data manipulation",
    percentage: 85,
    description:
      "As a data analyst, my core skill is data manipulation, which involves cleaning, transforming, and analyzing data using tools such as SQL, Python, and R. I am able to work with large and complex data sets, identify and correct errors, and perform advanced transformations such as reshaping and merging data sources.",
  },

  {
    id: 2,
    name: "Data visualization:",
    percentage: 80,
    description:
      " I possess a strong skill set in data visualization, which is crucial for conveying insights and findings effectively. I am proficient in using a range of libraries in Python, including Matplotlib, Seaborn, and Plotly, to create interactive and customizable visualizations such as line charts, bar charts, scatter plots, and heatmaps.",
  },
  {
    id: 3,
    name: "Statistical analysis",
    percentage: 90,
    description:
      " My statistical analysis skills enable me to extract insights from data using methods like probability, hypothesis testing, regression, and machine learning algorithm. I am proficient in using statistical softwares such as Python, and R, and can analyze large, complex datasets to identify patterns, trends, and relationships.",
  },
  {
    id: 4,
    name: "Machine learning",
    percentage: 75,
    description:
      "I have a strong skill set in machine learning, which is a subfield of artificial intelligence that enables computers to learn and make predictions from data. Experienced in using programming languages such as Python and R, and libraries such as Scikit-Learn, TensorFlow, and Keras, to develop and implement machine learning models ",
  },

  {
    id: 5,
    name: "Data cleaning",
    percentage: 70,
    description:
      "I possess strong data cleaning skills, which is the process of identifying and correcting errors, inconsistencies, and inaccuracies in data. I am experienced in using tools such as Python, R, and SQL to clean and preprocess data, including removing missing values, transforming data types, and identifying and correcting errors.",
  },

  {
    id: 6,
    name: "ETL",
    percentage: 60,
    description:
      "Strong ETL skills in extracting, transforming, and loading data from various sources into data warehouses. Proficient with ETL tools like Talend, Apache NiFi, and SSIS for handling data from databases, APIs, and flat files, ensuring it is transformed into a suitable format for analysis and successfully loaded into target systems.",
  },

  {
    id: 7,
    name: "Data warehousing",
    percentage: 60,
    description:
      "I possess strong data warehousing skills, designing and building databases to manage large data sets. Experienced with SQL Server, Oracle, and PostgreSQL, I create and manage data warehouses, design data models, optimize performance, and ensure data integrity and security for handling complex datasets.",
  },
  {
    id: 8,
    name: "Photoshop",
    percentage: 80,
    description:
      "I have a great understanding of design principles and am familiar with Photoshop interface. I also possess the ability to create wireframes and mockups using Figma. This combination ensures effective design solutions, strong visual communication, and user-friendly interfaces, allowing me to translate concepts into designs.",
  },
  {
    id: 6,
    name: "Database management",
    percentage: 70,
    description:
      "As a data analyst, I possess strong database management skills, creating, maintaining, and optimizing databases to manage large data sets. Proficient in MySQL, Oracle, and SQL Server, I design, develop, and maintain databases, optimize performance, ensure data integrity and security, and troubleshoot issues effectively.",
  },
  {
    id: 6,
    name: "Web Scraping",
    percentage: 75,
    description:
      "I have strong web scraping skills, extracting data using tools like BeautifulSoup, and Scrapy from websites, HTML pages, APIs, and PDFs. ",
  },
  {
    id: 6,
    name: "A/B testing",
    percentage: 90,
    description:
      "I am proficient in conducting A/B testing and hypothesis testing to optimize your digital product's performance and user experience.",
  },
  {
    id: 6,
    name: "Power BI",
    percentage: 90,
    description:
      "I create data reports and narratives using Power BI, leveraging its capabilities for effective data visualization and analysis.",
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: "Tableau",
    title: "HR Analytic Dashboard",
    description:
      "The HR analytics project done in Tableau is an interactive dashboard that provides key metrics related to employee attrition, active employees, and average age within an organization ",
    href: "https://public.tableau.com/app/profile/euniceigbinedion/viz/HR_Dashboard_17192318307840/HRSummary",
  },
  {
    id: 2,
    img: Project2,
    category: "Tableau",
    title: "Sales & Customer Dashboard",
    description:
      "This dashboard serves as a central hub for analyzing sales performance, understanding customer demographics, and identifying trends that drive business decisions.",
    href: "https://public.tableau.com/app/profile/euniceigbinedion/viz/EunnylansDynamicSalesCustomerDashboard/CustomerDashboard",
  },
  {
    id: 5,
    img: Project4,
    category: "Power BI",
    title: "Car Sales Dashboard",
    description:
      "This project integrates various data points, offers detailed analysis of sales metrics, customer demographics, and trends, aiding in strategic decision-making and performance optimization. ",
    href: "https://app.powerbi.com/groups/me/reports/0fbdbecc-06c2-4b19-930e-83b8f5db8841/a900e8dae109900b05a4?ctid=5d7b49e9-50d2-40dc-bab1-14a2d903542c&pbi_source=shareVisual&visual=047a1690285098b2d687&height=247.02&width=449.12&bookmarkGuid=95973f33-54e1-4f5c-b128-683d1c2de05c",
  },
  {
    id: 5,
    img: Project5,
    category: "Power BI",
    title: "Electric Vehicle Analysis Dashboard",
    description:
      "The Electric Vehicle (EV) Analysis project, is an interactive tool, this dashboard offers detailed analysis of EV sales, customer demographics, charging infrastructure, and market trends, supporting strategic decision-making and fostering growth in the EV sector. ",
    href: "https://app.powerbi.com/links/pFlpyYcJR6?ctid=5d7b49e9-50d2-40dc-bab1-14a2d903542c&pbi_source=linkShare",
  },
  {
    id: 2,
    img: Project3,
    category: "Python",
    title: "Intensity Analysis - Emotion Classification ",
    description:
      "This project focuses on predicting emotions from text data using a range of machine learning and deep learning models. It encompasses preprocessing steps, multiple vectorization techniques, and integrates a Streamlit web application for interactive prediction capabilities.",
    href: "https://github.com/Eunnylans/Intensity--Analysis",
  },
  {
    id: 2,
    img: Project3,
    category: "Python",
    title: "IPL Player Performance Analysis",
    description:
      "This project aims to analyze player performance in the Indian Premier League (IPL) using ball-by-ball dataset. The dataset includes various features such as match ID, etc. The goal is to develop a data-driven solution to identify and categorize top-performing batsmen in the IPL.",
    href: "https://github.com/Eunnylans/Cluster--Analysis--Player--Performance--Using--IPL--Ball--By--Ball--Dataset",
  },
  {
    id: 3,
    img: Project3,
    category: "Python",
    title: "ETL Process for Gun Violence Dataset",
    description:
      "This project involved extracting bank and market cap data from two JSON files, bank_market_cap_1.json and bank_market_cap_2.json. The data was then transformed using exchange rate data from exchange_rates.csv, and loaded into a separate CSV file..",
    href: "https://github.com/Eunnylans/ETL--Gun--Violence--Project",
  },
  {
    id: 4,
    img: Project3,
    category: "Python",
    title: "Exploratory Data Analysis (EDA) project",
    description:
      "This project aims to conduct a thorough analysis of the provided dataset. The focus is on extracting insights into demographics, such as the count of men and women, exploring the age distribution, examining geographic breakdowns, and investigating the intersection between cell phone and bank account ownership.",
    href: "https://github.com/Eunnylans/Exploratory--Data--Analysis--Project/tree/main",
  },
  {
    id: 6,
    img: Project3,
    category: "Python",
    title: "A/B testing for GloBox Company",
    description:
      "Conducted an A/B test on an e-commerce website to see if a layout change would increase revenue. We analysed user data, calculating conversion rates, average order value, and total revenue. The chi-squared test confirmed the significance (p-value < 0.05). We recommend adopting the new layout for all users.",
    href: "https://github.com/Eunnylans/GloBox--AB--Testing--Project",
  },
];

export const cv = [
  {
    id: 1,
    title: "upGrad KnowledgeHut, India",
    subtitle: "Data Science",
    date: "2023 - 2024",
    description:
      "I am learning to improve on my skills by transitioning into a Data Scientist.",
    category: "education",
  },
  {
    id: 1,
    title: "Redi School, Germany",
    subtitle: "Data Analyst",
    date: "2023 - 2023",
    description:
      "As a student of Data Analysis, I have learned a wide range of skills and techniques that will enable me to use data to make informed decisions and solve complex problems. I have also gained hands-on experience with data analysis software such as R, Python, and SQL to manipulate and analyze large datasets",
    category: "education",
  },

  {
    id: 1,
    title: "WBS Coding School, Germany",
    subtitle: "Web Developer",
    date: "2022 - 2022",
    description:
      "As a web developer i learned how to  create efficient, scalable, and user-friendly web applications. Proficient in various programming languages, including HTML5, CSS3, JavaScript, and Python. Skilled in both front-end and back-end development and well-versed in modern frameworks and libraries such as React, Angular, and Node.js. Strong understanding of responsive design principles and cross-browser compatibility. Excellent problem-solving skills and a keen eye for detail.",
    category: "education",
  },

  {
    id: 2,
    title: "Masters Degree in Science and Technology Studies",
    subtitle: "Technical University of Munich, Germany",
    date: "2021 - 2024",
    description:
      "During my studies, I have gained a variety of skills relevant to the science field, gained  a comprehensive understanding of how science and technology intersect with society. Have explored critical perspectives on issues like sustainability, globalization, digital cultures, and the democratization of knowledge. Practical research skills are developed through projects that analyze case studies, engage with empirical data, and evaluate policy implications",
    category: "education",
  },

  {
    id: 2,
    title: "Masters in Business Administration, MBA",
    subtitle: "University of Lagos, Nigeria",
    date: "2016 - 2018",
    description:
      "During my studies, I have gained a variety of skills relevant in the business world, such as leadership roles in the dynamic and competitive world of marketing and business. Deepened my understanding of consumer behavior, market research and analytics, branding strategies, digital marketing, and global marketing trends.",
    category: "education",
  },

  {
    id: 3,
    title: "Bachelor Degree in Ecoconomics & Statistics",
    subtitle: "University of Benin, Nigeria",
    date: "2004 - 2008",
    description:
      'Successful completion of a project on "Econometric Analysis of the impact of real exchange rate on industrial output in Nigeria". The project aimed to assess how fluctuations in the real exchange rate affect the performance of the industrial sector in Nigeria. The project was a success, as the results showed a significant correlation between changes in the real exchange rate and fluctuations in industrial output in Nigeria. Variations in the real exchange rate were found to have a measurable impact on the production levels and competitiveness of the industrial sector',
    category: "education",
  },
  {
    id: 4,
    title: "Web Solutions and Communication, Remote",
    subtitle: "Data Analyst ",
    date: "2024 - present",
    description:
      "I utilized advanced tools to analyzed diverse departmental datasets. I prepared detailed reports, dashboards, and visualizations for stakeholder decision-making. I cleaned and validated data to ensure accuracy. Identifying trends and correlations, I provided actionable insights for strategic and operational improvements. I evaluated policy effectiveness through data analysis for evidence-based policymaking. Developing forecasting models aids in proactive decision-making. I ensured compliance with regulatory requirements and confidentiality. Collaborating across teams, I delivered actionable insights. I recommended enhancements to data collection and analysis processes for increased efficiency",
    category: "experience",
  },

  {
    id: 5,
    title: "Sixt, Germany",
    subtitle: "Mobile Check in ",
    date: "2023 - 2024",
    description:
      "Handled customer bookings, checked availability, and facilitated reservations using mobile devices. Ensured a smooth and efficient check-in and check-out process, reducing wait times and enhancing customer satisfaction. Identified opportunities to offer additional services and products such as insurance packages, GPS devices, and car upgrades. Used customer data on behavior and preferences to tailor sales pitches and maximize revenue. Assisted in analyzing data to identify trends and support inventory management and marketing strategies. Maintained clear and prompt communication to keep customers informed and engaged about bookings, changes, or special offers.",
    category: "experience",
  },
  {
    id: 6,
    title: "Regenate, Remote",
    subtitle: "Frontend Developer",
    date: "Jan 2022 - Jun 2023",
    description:
      "Developed User Interfaces: Created and implemented user-friendly web interfaces using HTML, CSS, and JavaScript frameworks like React. Ensured that web applications were responsive and worked seamlessly across various devices and screen sizes. Optimized frontend performance by minimizing load times and improving code efficiency. Ensured that web applications worked consistently across different browsers and platforms. Worked closely with UX/UI designers to translate design mockups and wireframes into functional web interfaces. Collaborated with backend developers to integrate frontend components with server-side logic and databases. Tested and Debugged: Wrote unit tests and performed debugging to ensure the reliability and stability of frontend code.",
    category: "experience",
  },
  {
    id: 6,
    title: "Web Solutions & Communications, Nigeria",
    subtitle: "Sales & Marketing Analyst",
    date: "2016 - 2019",
    description:
      "Built an Excel dashboard for core business KPIs, saving 13 hours weekly in manual reporting. Deployed SQL to optimize data processing, reducing errors by 15%. Developed reports, dashboards, and visualizations for data-driven decision-making, achieving a 20% efficiency improvement. Analyzed market trends and sales data to identify opportunities. Evaluated marketing campaigns and strategies. Forecasted sales trends and market demand. Monitored competitor activities. Created comprehensive sales performance reports and presentations. Collaborated with sales and marketing teams on strategy alignment. Recommended sales-boosting strategies. Tracked key performance metrics. Assessed customer preferences. Supported pricing and product launches. Interpreted data for actionable insights. Managed databases with integrity. Presented findings to stakeholders. Ensured compliance with industry regulations. Facilitated communication across departments.",
    category: "experience",
  },
  {
    id: 7,
    title: "Euro Mega, Nigeria",
    subtitle: "Sales Services Analyst",
    date: "2015-2016",
    description:
      "Gathered and analyzed customer data to understand behavior, preferences, and satisfaction levels. Used these information to drive customer-centric strategies and improved customer loyalty. Monitored sales performance, tracked key performance indicators (KPIs), and analyzed revenue trends. Provided detailed reports and recommendations to improve sales strategies and achieve revenue targets. Monitored and analyzed competitors' activities, products, and market strategies. Provided insights and recommendations to stay ahead in the market. Ensured all business practices comply with relevant regulations and standards.",
    category: "experience",
  },
  {
    id: 7,
    title: "Eko Supreme Resources, Nigeria",
    subtitle: "Sales Administrator",
    date: "2010-2015",
    description:
      "Initiated and tracked orders to completion, increasing sales by 30%, Provided administrative and account management support to the distributor and sales supervisors, Acted as the primary contact point for trade inquiries, Ensured the region met and surpassed its monthly and yearly targets, Prepared customer receivable aging reports.",
    category: "experience",
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: "Irina Dragomirescu",
    author: "WBS Coding School Alumni",
    description:
      "I have had the pleasure of working with Eunice on numerous occasions. When it comes to our work and projects she never ceased to amaze me with her resourcefulness, great teamwork, unstoppable eagerness to help her colleagues and impressive coding skills.",
    href: "https://www.linkedin.com/in/irina-dragomirescu/",
  },

  {
    id: 3,
    img: Testimonial3,
    name: "Williams Iwebema",
    author: "PHD Student",
    description:
      "Her project results never fail to impress, showcasing her innovative thinking. I was privileged to work with her on several projects, where she performed excellently and maintained control throughout. Her ability to lead and execute tasks is truly commendable.",
    href: "https://www.linkedin.com/in/williamsiwebema/",
  },

  {
    id: 2,
    img: Testimonial2,
    name: "Enrique-Coscarelli",
    author: "WBS Coding School Instructor",
    description:
      "Eunice has been an incredible student, she would always amaze me with the outcomes of her projects. So much so that she was one of the winners for her final project along with her team mates. I am already so proud of her, I am sure she will do really well in the future.",
    href: "https://www.linkedin.com/in/enrique-coscarelli/",
  },

];
