const constants = {
    HELP: 'Currently we support below mentioned commands, Please use without brackets, Also we provided the short alias if you do typo mistakes like me. 😅 ' +
        'Try education and edu. \n',

    GREETINGS: 'Welcome Stranger, My Name is Parul Garg, a Software Development Engineer. \nTry help command for get started to know my professional Details.\n',

    INTRODUCTION: 'Software Developer having 3+ years of experience in Product development, Data Science, building new tools using Open Source Tech, CI/CD Pipelines. Created multiple automated Products based on Machine Learning. Deployed multiple machine learning models in production. Awarded with Futuristic Award by CISO- Wipro for developing S.I.E.M(Security Information and Event Management) Tool based using Open Source.\n',

    CONTACT_DETAILS: 'Contact Details:' +
        '\n > Phone Number : +91-99151-78377' +
        '\n > email : parulg014@gmail.com' +
        '\n > linkedin : https://www.linkedin.com/in/parul-garg-4b0670113/' +
        '\n > Github : https://github.com/parulgarg123/' +
        '\n > Need to contact/Feedback : https://forms.gle/T5nfHDPjcKCxsNzb7' +
        '\n',

    Projects: [
        {
            'Title': 'PBR Routing',
            'TechUsed': 'Java, DynamoDB, REST API Structure, AWS Services',
            'BriefDescription': 'Created a new mechanism through which the tasks get routed to the concerned DAs with all the privacy checks and with low latency'
        },
        {
            'Title': 'Access Segregation Tool',
            'TechUsed': 'Java, dynamodb, Rest API’s, AWS services',
            'BriefDescription': 'Created a New Tool for access segregation so that there will be only single and atomic control to maintain and control the single entry and exit of the systems.',
        },
        {
            'Title': 'SOE Orchestration',
            'TechUsed': 'Java, dynamodb, Rest API’s, AWS services, Herd, Step Functions, Cloudwatch',
            'BriefDescription': 'Provided a new design for the labelling of data which introduces task based workflows instead of queue bases and customers can also create their own workflows.',
        },
        {
            'Title': 'Threat Intelligence Suite',
            'TechUsed': 'Python3, Mongodb',
            'BriefDescription': 'This Bot helps the Teams to identify and block the potential threats for the Enterprise networks across the globe.',
        },
        {
            'Title': 'NFR-D Version Compliance',
            'TechUsed': 'Python3, Mongodb, scrapping, mysql',
            'BriefDescription': 'This Bot helps/show the compliance status for Network, Firewall, and Router Devices from OEM’s recommended versions compared against internal to the management and concerned teams. So that they can take necessary action.',
        },
        {
            'Title': 'ELK (Elastic Search, Logstash and Kibana)',
            'TechUsed': 'Python3, Mongodb, Elasticsearch, logstash, kibana',
            'BriefDescription': 'Configured Elk Suite in such a way that it collects the security devices’ data/logs and creates the indices. It used the ' +
                ' ML-based approach to find the anomaly in the logs and trigger the automated emails and notifications to the IRC-SOC' +
                ' and Cyber Defense team so that they can take necessary actions on that.',
        },
        {
            'Title': 'Anomaly Detector',
            'TechUsed': 'Python3, Mongodb, D3.js, html, SVM',
            'BriefDescription': 'This Project helps the company to find anonymous or suspicious activity in the assets. It uses deep learning and ML ' +
                'approach to find the anomaly in-network and trigger the relevant report or notification to the concerned person, Teams and CISO to take the necessary action. So that malware, Trojan, wanna cry or any other types of viruses will not spread across the network.',
        },
        {
            'Title': 'Sentiment Intensity Analyzer',
            'TechUsed': 'Python3, Mongodb, NLP',
            'BriefDescription': 'This Bot helps the company to find the user sentiment behind the text or mail and it also analyzes user responses on ' +
                'the product or for the company. So that they can provide enhanced and efficient services in the future.',
        },
        {
            'Title': 'Security Scorecard',
            'TechUsed': 'Python3, Mongodb, PowerBi',
            'BriefDescription': 'This Bot helps VP’s, CIO’s, COO’s, CISO and many more to check the company ranking against other giants in the ' +
                'comparison of Security.',
        }
    ],

    EDUCATION: [
        {
            'Course': 'B.Tech - Graduation',
            'School': 'Chandigarh Group of Colleges, Chandigarh',
            'Board': 'Punjab Technical University',
            'Percentage': '86.54%',
            'Year': '2018'
        },
        {
            'Course': 'XII - High School',
            'School': 'Kendriya Vidyalaya No.3, Jalandhar Cantt',
            'Board': 'Central Board of Secondary Education',
            'Percentage': '81.20%',
            'Year': '2014'
        },
        {
            'Course': 'X - Secondary School',
            'School': 'NC Model Senior Secondary, Jalandhar Cantt',
            'Board': 'Punjab School Education Board',
            'Percentage': '81.23%',
            'Year': '2012'
        }
    ],

    EXPERIENCE: [
        {
            'Title': "Software Development Engineer",
            'Organization': 'Amazon',
            'Description': 'Working on Tier 1 systems to develop and enhance the services which help millions of customers per second (Internally and Externally) to get their packages and money reconciliations on the fly.',
            'Responsibilities': 'System Design(40%), Code implementation(40%), Operational Excellence(10%), Mentoring SDE/Interns(10%)',
            'TimeLines': 'December 19 - Present'
        },
        {
            'Title': "Associate Developer",
            'Organization': 'SAP Labs',
            'Description': 'Under CX, C/4 HANA B2B, Marketing Cloud Suite responsible for developing Extensibility to the Custom Fields, Views and Business Objects.',
            'Responsibilities': 'System Design(30%), Code implementation(50%), Operational Excellence(10%), Mentoring SDE/Interns(10%)',
            'TimeLines': 'July 19 - November 2019'
        },
        {
            'Title': "Project Engineer",
            'Organization': 'WIPRO Ltd.',
            'Description': 'Under Cyber Defense working in the Big Data team. Responsible for developing Machine learning-based Automations.',
            'Responsibilities': 'System Design(45%), Code implementation(50%), Mentoring SDE/Interns(5%)',
            'TimeLines': 'May 18 - June 2019'
        }

    ],

    CERTIFICATIONS: [
        'Data Science and Machine learning at Stanford University.',
        'End-to-End Machine Learning with Tensorflow.',
        'Data Science and Machine Learning Bootcamp.',
        'IBM Cloud Essentials by IBM.',
        'Analytics AA: Machine Learning.',
        'Elastic Search, Logstash, Kibana ELK.',
        'Participation of Ethical Hacking - a workshop held in IIT Delhi organized by Robosapiens.',
    ],

    TECH: [
        'Python, Java, Rest API, Django, DynamoDB, SQL, Mysql, MongoDB, S3, CloudWatch, Step Function, Kinesis, SQS, CI/CD.',
        'AWS, AWS Sage Maker, ELK (Elastic Search, Logstash and Kibana), Power BI, Grafana, Tableau.',
        'Deep Learning, Transfer Learning, Data Driven Engineering, Software Design, Test Automations, Software Development Life Cycle, Event driven Architecture.'
    ],

    INTERNSHIP: [
        {
            'Title': "Software Engineer - Intern",
            'Organization': 'RV Technologies',
            'Description': 'Part of a team that is responsible for Developing a Web Application name Estate Hub using Asp .net MVC which helps Clients to find the appropriate property in a particular region to buy or rent it.',
            'TimeLines': 'Jan 17 - May 2017',
            'TechStack': 'ASP .Net',
        },
        {
            'Title': "Software Engineer - Intern",
            'Organization': 'CS-SOFT Solutions',
            'Description': 'Developed a Web Application that automates the college functionalities like Fees, Attendance Management and many more.',
            'TimeLines': 'May 16 - July 2016',
            'TechStack': 'ASP .Net',
        }
    ],


    WHITELISTED_COMMANDS: [
        'intro - (Some Introduction)',
        'education / edu - (What I did which lands to the professional path)',
        'experience / exp - (Professional Experience)',
        'tech - (Tech Proficiency)',
        'projects / proj - (Professional/Industry level Projects)',
        'contact / info - (How you can contact me)',
        'certifications / cert - (Some Professional certification while on journey of professionalism)',
        'internships / intern - (School Internships)',
        'clear - (Clear the screen)',
    ],
};