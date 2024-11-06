// script.js

// Resume Data
const resumeData = {
    name: "Ravi Kumar",
    profession: "Fresher",
    contact: {
      phone: "+91 8309901178",
      email: "nalliravikumar2003@gmail.com"
    },
    skills: ["JavaScript", "HTML", "CSS", "React", "Node.js"],
    project: [
      { role: "Conquer Bootstrap template with Responsive webpages" },
      { role: "Car Rental System Documentation to use per rental cars per days or hours" }
    ],
    education: [
      { degree: "B.Sc. in Chemistry", institution: "Andhra University", year: "2024" }
    ]
  };
  
  // Get container
  const resumeContainer = document.getElementById('resume');
  
  // Add Name
  const nameEl = document.createElement('h1');
  nameEl.textContent = resumeData.name;
  resumeContainer.appendChild(nameEl);
  
  // Add Profession
  const professionEl = document.createElement('h3');
  professionEl.textContent = resumeData.profession;
  resumeContainer.appendChild(professionEl);
  
  // Add Contact
  const contactSection = document.createElement('div');
  contactSection.classList.add('section');
  const contactTitle = document.createElement('h2');
  contactTitle.textContent = 'Contact Information';
  contactSection.appendChild(contactTitle);
  
  const phoneEl = document.createElement('p');
  phoneEl.textContent = `Phone: ${resumeData.contact.phone}`;
  contactSection.appendChild(phoneEl);
  
  const emailEl = document.createElement('p');
  emailEl.textContent = `Email: ${resumeData.contact.email}`;
  contactSection.appendChild(emailEl);
  
  resumeContainer.appendChild(contactSection);
  
  // Add Skills
  const skillsSection = document.createElement('div');
  skillsSection.classList.add('section');
  const skillsTitle = document.createElement('h2');
  skillsTitle.textContent = 'Skills';
  skillsSection.appendChild(skillsTitle);
  
  const skillsList = document.createElement('ul');
  resumeData.skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
  });
  skillsSection.appendChild(skillsList);
  
  resumeContainer.appendChild(skillsSection);
  
  // Add Experience
  const projectSection = document.createElement('div');
 projectSection.classList.add('section');
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = 'project';
  projectSection.appendChild(projectTitle);
  
  resumeData.project.forEach(job => {
    const jobEl = document.createElement('p');
    jobEl.textContent = `${job.role}`;
    projectSection.appendChild(jobEl);
  });
  
  resumeContainer.appendChild(projectSection);
  
  // Add Education
  const educationSection = document.createElement('div');
  educationSection.classList.add('section');
  const educationTitle = document.createElement('h2');
  educationTitle.textContent = 'Education';
  educationSection.appendChild(educationTitle);
  
  resumeData.education.forEach(edu => {
    const eduEl = document.createElement('p');
    eduEl.textContent = `${edu.degree} from ${edu.institution} (${edu.year})`;
    educationSection.appendChild(eduEl);
  });
  
  resumeContainer.appendChild(educationSection);
  