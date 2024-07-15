import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.png';
import Project4 from './assets/Project4.png';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Title Page',
    path: 'hero-container',
  },
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Projects',
    path: 'work',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Resume',
    path: 'resume',
  },

  {
    name: 'Recommendations',
    path: 'testimonial',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web Design & development',
    description:
      'Create custom designs for your website that are tailored to your brand and business goals.Build your website from scratch or work with an existing design to develop a functional website using the latest web technologies.',
  },
  {
    id: 2,
    name: ' Creative ',
    title: ' Graphics Design, UI & UX',
    description:
      ' create a user experience (UX) design that ensures your website is intuitive and easy to navigate, leading to increased user satisfaction and engagement.',
  },
  {
    id: 3,
    name: ' Digital Marketing ',
    title: ' Campaign Manager ',
    description:
      '  I can help you create and execute successful digital marketing campaigns to promote your brand and reach your target audience. services include: Strategy development, campaign planning and execution, audience targeting etc. ',
  },
  {
    id: 4,
    name: ' Advertising ',
    title: ' Paid & Organic ',
    description:
      '  I can work with you to develop a comprehensive paid and organic advertising strategy that aligns with your business goals and targets your ideal audience. ',
  },
  {
    id: 5,
    name: ' Innovation ',
    title: ' Innovation Management ',
    description:
      'As an innovation manager, I can work with you to develop and implement strategies to foster innovation within your organization',
  },
  {
    id: 6,
    name: ' Social Media ',
    title: ' Social Media Management ',
    description:
      'As a social media manager, I can help you create and execute successful social media strategies to build your brand, engage with your audience, and drive business results.',
  },
  {
    id: 7,
    name: ' SEO ',
    title: ' Search Engine Optimization ',
    description:
      'As an SEO specialist, I can work with you to improve your websites search engine rankings, increase organic traffic, and drive business results.',
  },
  {
    id: 8,
    name: ' Marketing ',
    title: ' Marketing Manager ',
    description:
      'As a marketing manager, I can work with you to develop and implement effective marketing strategies that help you reach your business goals. ',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Data manipulation',
    percentage: 85,
    description:
      'As a data analyst, my core skill is data manipulation, which involves cleaning, transforming, and analyzing data using tools such as SQL, Python, and R. I am able to work with large and complex data sets, identify and correct errors, and perform advanced transformations such as reshaping and merging data sources.',
  },

  {
    id: 2,
    name: 'Data visualization:',
    percentage: 80,
    description:
      ' I possess a strong skill set in data visualization, which is crucial for conveying insights and findings effectively. I am proficient in using a range of libraries in Python, including Matplotlib, Seaborn, and Plotly, to create interactive and customizable visualizations such as line charts, bar charts, scatter plots, and heatmaps.',
  },
  {
    id: 3,
    name: 'Statistical analysis',
    percentage: 90,
    description:
     ' My statistical analysis skills enable me to extract insights from data using methods like probability, hypothesis testing, regression, and machine learning algorithm. I am proficient in using statistical softwares such as Python, and R, and can analyze large, complex datasets to identify patterns, trends, and relationships.',
  },
  {
    id: 4,
    name: 'Machine learning',
    percentage: 75,
    description:
      'I have a strong skill set in machine learning, which is a subfield of artificial intelligence that enables computers to learn and make predictions from data. Experienced in using programming languages such as Python and R, and libraries such as Scikit-Learn, TensorFlow, and Keras, to develop and implement machine learning models ',
  },

  {
    id: 5,
    name: 'Data cleaning',
    percentage: 70,
    description:
      'I possess strong data cleaning skills, which is the process of identifying and correcting errors, inconsistencies, and inaccuracies in data. I am experienced in using tools such as Python, R, and SQL to clean and preprocess data, including removing missing values, transforming data types, and identifying and correcting errors.',
  },

  {
    id: 6,
    name: 'ETL',
    percentage: 60,
    description:
      'Strong ETL skills in extracting, transforming, and loading data from various sources into data warehouses. Proficient with ETL tools like Talend, Apache NiFi, and SSIS for handling data from databases, APIs, and flat files, ensuring it is transformed into a suitable format for analysis and successfully loaded into target systems.',
  },

  {
    id: 7,
    name: 'Data warehousing',
    percentage: 60,
    description:
      'I possess strong data warehousing skills, designing and building databases to manage large data sets. Experienced with SQL Server, Oracle, and PostgreSQL, I create and manage data warehouses, design data models, optimize performance, and ensure data integrity and security for handling complex datasets.',
  },
  {
    id: 8,
    name: 'Photoshop',
    percentage: 80,
    description:
      'I have a great understanding of design principles and am familiar with Photoshop interface. I also possess the ability to create wireframes and mockups using Figma. This combination ensures effective design solutions, strong visual communication, and user-friendly interfaces, allowing me to translate concepts into designs.',
  },
  {
    id: 6,
    name: 'Database management',
    percentage: 70,
    description:
      'As a data analyst, I possess strong database management skills, creating, maintaining, and optimizing databases to manage large data sets. Proficient in MySQL, Oracle, and SQL Server, I design, develop, and maintain databases, optimize performance, ensure data integrity and security, and troubleshoot issues effectively.',
  },
  {
    id: 6,
    name: 'Web Scraping',
    percentage: 75,
    description:
      'I have strong web scraping skills, extracting data using tools like BeautifulSoup, and Scrapy from websites, HTML pages, APIs, and PDFs. ',
  },
  {  
  id: 6,
    name: 'A/B testing',
    percentage: 90,
    description:
      "I am proficient in conducting A/B testing and hypothesis testing to optimize your digital product's performance and user experience.",
  },
  {  
    id: 6,
      name: 'Power BI',
      percentage: 90,
      description:
        'I create data reports and narratives using Power BI, leveraging its capabilities for effective data visualization and analysis.',
    }
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Tableau',
    title: 'HR Analytic Dashboard',
    description:
      'The HR analytics project done in Tableau is an interactive dashboard that provides key metrics related to employee attrition, active employees, and average age within an organization ',
    href: 'https://public.tableau.com/app/profile/euniceigbinedion/viz/HR_Dashboard_17192318307840/HRSummary',
  },
  {
    id: 2,
    img: Project2,
    category: 'Tableau',
    title: 'US Census Demography Dashboard',
    description:
      'The US Census Demography project done in Tableau is an interactive dashboard that presents various visualizations of the demographic data collected from the US Census Bureau.',
    href: 'https://public.tableau.com/app/profile/euniceigbinedion/viz/EunnylansDynamicSalesCustomerDashboard/CustomerDashboard',
  },
  {
    id: 5,
    img: Project4,
    category: 'Power BI',
    title: 'Unicorn Data Analytic Dashboard',
    description:
      'As a candidate for a DA position at Unicorn company, I have conducted an analysis of our sales data, and I am pleased to present my findings to the DA team lead. ',
    href: 'https://public.tableau.com/app/profile/nathaniel.obafemi/viz/capstonepoject/Unicorn_analytic_Dashboard',
  },
  {
    
    id: 2,
    img: Project3,
    category: 'Python',
    title: 'CO2 Emissions and Bunker Fuel Consumption in Spain',
    description:
      "The analysis focuses on Spain's position in the top 10 countries with the highest CO2 emissions and its significant contribution to bunker fuel consumption",
    href: 'https://github.com/Kunathly10/CO2-emission',
  },
  {
    id: 2,
    img: Project3,
    category: 'Python',
    title: 'Pillow Palooza Short-term Rental Market Analysis: Key Insights and Recommendations',
    description:
      "As the Data Analyst at Pillow Palooza, I have conducted an in-depth analysis of the short-term rental market in New York City. This analysis aims to provide insights and recommendations to the company leadership, including the CEO, VP of Data, Head of Finance, and Head of Marketing. ",
    href: 'https://github.com/Kunathly10/short-term-rental-market-analysis'
  },
  {
    id: 3,
    img: Project3,
    category: 'Python',
    title: 'ETL Process for Bank Market Cap Data',
    description:
      'This project involved extracting bank and market cap data from two JSON files, bank_market_cap_1.json and bank_market_cap_2.json. The data was then transformed using exchange rate data from exchange_rates.csv, and loaded into a separate CSV file..',
    href: 'https://github.com/Kunathly10/ETL_Project',
  },
  {
    id: 4,
    img: Project3,
    category: 'Python',
    title: 'United State Mass Shooting',
    description:
      'Mass shootings have devastating consequences and are a serious issue in the United State. To address this issue effectively, it is important to understand the trends. ',
    href: 'https://github.com/Kunathly10/Project_US-mass-shooting',
  },
  {
      id: 6,
    img: Project3,
    category: 'Python',
    title: 'A/B testing for GloBox Company',
    description:
      "Conducted an A/B test on an e-commerce website to determine whether a change to the website's layout would result in an increase in revenue.",
    href: 'https://github.com/Kunathly10/-A-B-testing-project-GloBox',
  }
  
];

export const cv = [
  {
    id: 1,
    title: 'upGrad KnowledgeHut, India',
    subtitle: 'Data Science',
    date: '2023 - 2024',
    description:
      'I am learning to improve on my skills by transitioning into a Data Scientist.',
    category: 'education'
  },
  {
    id: 1,
    title: 'Redi School, Germany',
    subtitle: 'Data Analyst',
    date: '2023 - 2023',
    description:
      'As a student of Data Analysis, I have learned a wide range of skills and techniques that will enable me to use data to make informed decisions and solve complex problems. I have also gained hands-on experience with data analysis software such as R, Python, and SQL to manipulate and analyze large datasets',
    category: 'education',
  },

  {
    id: 1,
    title: 'WBS Coding School, Germany',
    subtitle: 'Web Developer',
    date: '2022 - 2022',
    description:
      'As a web developer i learned how to  create efficient, scalable, and user-friendly web applications. Proficient in various programming languages, including HTML5, CSS3, JavaScript, and Python. Skilled in both front-end and back-end development and well-versed in modern frameworks and libraries such as React, Angular, and Node.js. Strong understanding of responsive design principles and cross-browser compatibility. Excellent problem-solving skills and a keen eye for detail.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Masters Degree in Science and Technology Studies',
    subtitle: 'Technical University of Munich, Germany',
    date: '2021 - 2024',
    description:
      'During my studies, I have gained a variety of skills relevant to the science field, gained  a comprehensive understanding of how science and technology intersect with society. Have explored critical perspectives on issues like sustainability, globalization, digital cultures, and the democratization of knowledge. Practical research skills are developed through projects that analyze case studies, engage with empirical data, and evaluate policy implications',
    category: 'education',
  },

  {
    id: 2,
    title: 'Masters in Business Administration, MBA',
    subtitle: 'University of Lagos, Nigeria',
    date: '2016 - 2018',
    description:
      'During my studies, I have gained a variety of skills relevant in the business world, such as leadership roles in the dynamic and competitive world of marketing and business. Deepened my understanding of consumer behavior, market research and analytics, branding strategies, digital marketing, and global marketing trends.',
    category: 'education',
  },

  {
    id: 3,
    title: 'Bachelor Degree in Ecoconomics & Statistics',
    subtitle: 'University of Benin, Nigeria',
    date: '2004 - 2008',
    description:
      'Successful completion of a project on "Econometric Analysis of the impact of real exchange rate on industrial output in Nigeria". The project aimed to assess how fluctuations in the real exchange rate affect the performance of the industrial sector in Nigeria. The project was a success, as the results showed a significant correlation between changes in the real exchange rate and fluctuations in industrial output in Nigeria. Variations in the real exchange rate were found to have a measurable impact on the production levels and competitiveness of the industrial sector',
    category: 'education',
  },
  {id: 4,
    title: 'Web Solutions and Communication, Remote',
    subtitle: 'Data | Business Anallyst ',
    date: '2024 - present',
    description:
      '•Designed and adopted data-driven strategies, resulting in a 15% increase in salesrevenue and a 10% improvement in customersatisfaction. •Collaborated with cross-functional teamsto streamline processes, reducing operational costs by 20% and increasing overall efficiency',
    category: 'experience'},
    
    {id: 5,
    title: 'Sixt, Germany',
    subtitle: 'Mobile Checkin ',
    date: '2023 - 2024',
    description:
      'Reserached on the company data need and analyzed them using Excel.',
    category: 'experience',
  },
  {
    id: 6,
    title: 'Regenate, Remote',
    subtitle: 'Frontend Developer',
    date: 'Jan 2022 - Jun 2023',
    description:
      'Conducted statistical analysis on 80% of environmental data to identify patterns and trends, resulting ting in an improved understanding of the local ecosystem. Cleaned and processed large environmental datasets (up to 100 GB) using software such as R or Python, improving data accuracy by 50%.',
    category: 'experience',
  },
  {
    id: 6,
    title: 'Web Solutions & Communications, Nigeria',
    subtitle: 'Marketing & Business Analysis',
    date: '2016 - 2019',
    description:
      '•Built a Tableau dashboard to visualize core business KPIs(e.g. Monthly Recurring Revenue), saving 13 hours per week of manual reporting work. •Deployed SQL for testing reports and ETL load jobs, optimizing data processing and reducing errors by 15%. •Developed and maintained reports, dashboards, and visualizationsto drive data-driven decision-making, resulting in a 20% improvement in operational efficiency.',
    category: 'experience',
  },
  {
    id: 7,
    title: 'Euro Mega, Nigeria',
    subtitle: 'Business Analyst',
    date: '2015-2016',
    description:
      'Successfully conducted environmental monitoring and testing to support a project which resulted in a 95% reduction in air pollutants. Collected and analyzed water samples which led to the identification and remediation of a contaminated site, resulting in an 80% reduction of hazardous waste.',
    category: 'experience',
  },
  {
    id: 7,
    title: 'Eko Supreme Resources, Nigeria',
    subtitle: 'Sales Analyst',
    date: '2015-2016',
    description:
      'Successfully conducted environmental monitoring and testing to support a project which resulted in a 95% reduction in air pollutants. Collected and analyzed water samples which led to the identification and remediation of a contaminated site, resulting in an 80% reduction of hazardous waste.',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Ozy Huli, Masterschool',
    author: 'Student Success Manager at Masterschool',
    description:
      '“Hi Nathaniel,   As you might see in the slack community channels, we aim to help students build a strong network from the start. When transitioning to a new career it can sometimes be challenging to build a new network, since it may take some time and energy. This is why we ask a few students to help us in building a strong sense of community before the start of the program..."',
    href: 'https://www.linkedin.com/in/sophie-riding/',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Sophie Riding',
    author: '',
    description:
      '"Nathaniel Obafemi has a deep understanding of the subject matter and is able to explain complex concepts in a clear and easily understandable manner. ....."',
    href: 'https://www.linkedin.com/in/sophie-riding/',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Williams Iwebema',
    author: 'Phd Student ',
    description:
      'Nathaniel Obafemi´s qualifications and previous educational background in Environmental science with a focus on data analysis make him a strong candidate for further study in the field of climate change and GIS.”',
    href: 'https://www.linkedin.com/in/oluseun-sanuade-9406b730/',
  },
];
