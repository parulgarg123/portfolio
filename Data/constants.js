const constants = {
    HELP: 'Currently we support below mentioned commands: \n',
    GREETINGS: 'Welcome into the world of Parul Garg \nTry hitting help command.\n',

    PROJECTS: "1. PBR Routing" +
        "\n   Tech Used : Java, DynamoDB, REST API Structure, AWS Services" +
        "\n   Brief Description : Created a new mechanism through which the tasks get routed to the concerned DAs with all the privacy checks and with low latency" +
        "\n\n2. Access Segregation Tool" +
        "\n  Tech Used : Java, dynamodb, Rest API’s, AWS services" +
        "\n  Brief Description : Created a New Tool for access segregation so that there will be only single and atomic control to maintain and control\n" +
        "the single entry and exit of the systems.",


    EDUCATION: 'educations',
    DETAILS: 'personal detail',
    INTRODUCTION: 'introduction',
    CONSTANT_DETAILS: 'Contact Details:' +
        '\n > Phone Number : +91-99151-78377' +
        '\n > email : parulg014@gmail.com' +
        '\n',
    Projects: [
        {
            'Title': 'PBR Routing',
            'TechUsed': 'Java, DynamoDB, REST API Structure, AWS Services',
            'BriefDescription': 'Created a new mechanism through which the tasks get routed to the concerned DAs with all the privacy checks and with low latency'
        }, {
            'Title': 'Access Segregation Tool',
            'TechUsed': 'Java, dynamodb, Rest API’s, AWS services',
            'BriefDescription': 'Created a New Tool for access segregation so that there will be only single and atomic control to maintain and control the single entry and exit of the systems.',
        }, {
            'Title': 'SOE Orchestration',
            'TechUsed': 'Java, dynamodb, Rest API’s, AWS services, Herd, Step Functions, Cloudwatch',
            'BriefDescription': 'Provided a new design for the labelling of data which introduces task based workflows instead of queue bases and customers can also create their own workflows.',
        }, {
            'Title': 'Threat Intelligence Suite',
            'TechUsed': 'Python3, Mongodb',
            'BriefDescription': 'This Bot helps the Teams to identify and block the potential threats for the Enterprise networks across the globe.',
        }, {
            'Title': 'NFR-D Version Compliance',
            'TechUsed': 'Python3, Mongodb, scrapping, mysql',
            'BriefDescription': 'This Bot helps/show the compliance status for Network, Firewall, and Router Devices from OEM’s recommended versions compared against internal to the management and concerned teams. So that they can take necessary action.',
        }, {
            'Title': 'ELK (Elastic Search, Logstash and Kibana)',
            'TechUsed': 'Python3, Mongodb, Elasticsearch, logstash, kibana',
            'BriefDescription': 'Configured Elk Suite in such a way that it collects the security devices’ data/logs and creates the indices. It used the ' +
                ' ML-based approach to find the anomaly in the logs and trigger the automated emails and notifications to the IRC-SOC' +
                ' and Cyber Defense team so that they can take necessary actions on that.',
        }, {
            'Title': 'Anomaly Detector',
            'TechUsed': 'Python3, Mongodb, D3.js, html, SVM',
            'BriefDescription': 'This Project helps the company to find anonymous or suspicious activity in the assets. It uses deep learning and ML ' +
                'approach to find the anomaly in-network and trigger the relevant report or notification to the concerned person, Teams and CISO to take the necessary action. So that malware, Trojan, wanna cry or any other types of viruses will not spread across the network.',
        }, {
            'Title': 'Sentiment Intensity Analyzer',
            'TechUsed': 'Python3, Mongodb, NLP',
            'BriefDescription': 'This Bot helps the company to find the user sentiment behind the text or mail and it also analyzes user responses on ' +
                'the product or for the company. So that they can provide enhanced and efficient services in the future.',
        }, {
            'Title': 'Security Scorecard',
            'TechUsed': 'Python3, Mongodb, PowerBi',
            'BriefDescription': 'This Bot helps VP’s, CIO’s, COO’s, CISO and many more to check the company ranking against other giants in the ' +
                'comparison of Security.',
        }
    ],
    EDUCATIONs: [
        {}
    ],

    WHITELISTED_COMMANDS: ['details', 'projects', 'education', 'intro', 'contact', 'clear'],
};