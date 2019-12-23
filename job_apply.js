function fillValues(labelText,inputsList){
    for (let input of inputsList) {
        if(input.type === "text"){
            if(labelText==='linkedin'){
                input.value="https://www.linkedin.com/in/ayush-usf"
            }
            else if(labelText==='how did you find'){
                input.value="Linkedin"
            }
        }
    }
}

if(window.location.host.includes("greenhouse")){
    document.getElementById('first_name').value="Ayush";
    document.getElementById('last_name').value="Arora";
    document.getElementById('email').value="ayusharora009@gmail.com";
    document.getElementById('phone').value="4156546586";
    document.getElementById('job_application_location').value="San Francisco, California, United States";

    const custom_div = document.getElementById('custom_fields').childNodes;
    if(custom_div.length){
        for (let element of custom_div) {
            if(element.tagName === "DIV"){
                if(element.getElementsByTagName('label').length){
                    const label = element.getElementsByTagName('label')[0];
                    const labelText = label.textContent.toLowerCase();
                    const inputsList = label.getElementsByTagName("input");
                    if(labelText.includes('linkedin') && inputsList.length){
                        fillValues('linkedin',inputsList);
                    }
                    else if(labelText.includes('how did you find') && inputsList.length){
                        fillValues('how did you find',inputsList);
                    }

                }
            }
        }
    }
}
else if(window.location.host.includes("brassring")){
    document.getElementById('profile_1_0_firstname_txt_0').value="Ayush";
    document.getElementById('profile_3_0_lastname_txt_0').value="Arora";
    document.getElementById('profile_4_0_email_eml_0').value="ayusharora009@gmail.com";
    document.getElementById('profile_5_0_address1_txt_0').value="150 Font Blvd, 2C";
    document.getElementById('profile_11_0_homephone_txt_0').value="4156546586";
    document.getElementById('profile_7_0_city_txt_0').value="San Francisco";
    document.getElementById('profile_8_0_zip_txt_0').value="94132";
    document.getElementById('profile_9_0_country_slt_0_0-input').value="United States";
    document.getElementById('profile_10_0_state_slt_0_0-input').value="California";
    document.getElementById('profile_15_0_homepage_txt_0').value="http://github.com/aroraayush";

    document.getElementById('empname0').value="Roadcast Tech. Solutions Pvt. Ltd";
    document.getElementById('jobtitle0').value="Software Developer";
    document.getElementById('startyear0').value="2018";
    document.getElementById('endyear0').value="2019";
    document.querySelectorAll('#responsibilitiesControl')[0].value=`•	Built real-time employee tracking system with Google Maps & Traccar, improving customer operations up to 20%
•	Developed APIs, shell scripts, cron jobs & microservices in NodeJS & Php, to enhance the core products’ efficiency
•	Implemented Lead Generation for Toyota Showrooms, elevating employee performance & customer satisfaction by 10%
`;
    document.getElementById('empname1').value="Newgen Software Technologies Limited";
    document.getElementById('jobtitle1').value="Software Engineer";
    document.getElementById('startyear1').value="2017";
    document.getElementById('endyear1').value="2018";
    document.querySelectorAll('#responsibilitiesControl')[1].value=`•	Implemented Mortgage Advisory for Bank of Ireland, reducing operational costs while improving efficiency by 15%
•	Developed components of SPA with Angular 1.x, leading to 30% faster page load time w.r.t their existing system
•	Devised MSSQL procedures to process billions of records & yield results on DB side, reduced server overhead by 10%
`;
    document.getElementById('empname2').value="Simba Logistics Private Limited";
    document.getElementById('jobtitle2').value="Full Stack Developer";
    document.getElementById('startyear2').value="2016";
    document.getElementById('endyear2').value="2017";
    document.querySelectorAll('#responsibilitiesControl')[2].value=`•	Developed robust and scalable REST API with NodeJS to handle operations on data of millions of package deliveries
•	Incorporated TDD with CD using Strider, reducing development time by 10%, leading to ZERO-downtime deployment
•	Created customer panel; components of ops team panel, improving ops team effectiveness in query resolution up to 15%
`;
    document.getElementById('education_0_0_schoolname_slt_0-input').value="Manav Rachna International University";
    document.getElementById('gradyear0').value="2016";
    document.getElementById('education_0_0_degree_slt_0-input').value="Bachelor's degree"
    document.getElementById('edumajor0').value="Computer Science";

    document.getElementById('education_1_0_schoolname_slt_0-input-input').value="UNIVERSITY OF SAN FRANCISCO";
    document.getElementById('gradyear1').value="2021";
    document.getElementById('chkrecent1').selected="selected";
    document.getElementById('edumajor1').value="Computer Science";
    document.getElementById('education_1_0_degree_slt_0-input-input').value="Master's degree";
}
