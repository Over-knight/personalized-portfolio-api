require ('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HELLO, WORLD');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON http://localhost:${4000}');
});

// app.get('/about', (req, res) => {
//     res.send('this is the about page');
// });

// app.get('/projects', (req, res) => {
//     res.send('this is the project page');
// })

// app.get('/contacts', (req, res) => {
//     res.send('this is the contact page');
// });

// // const PORT = Process.env.PORT || 4000;

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Overnight#1',
    database: 'my_database'
    // express.jsserver.env suppose dey here
});


connection.connect((err) => {
    if(err) {
        console.error('Error connecting to Mysql:', err);
        return;
    }
    console.log('Connected to Mysql database');
});

app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query;', err);
            res.status(500).send('Error fetchimg data from database');
            return;
        }
        res.json(results);
    });  
});

// app.use(express.json());

// app.post('/users', (req, res) => {
//     const { name, email } = req.body;
//     const query = 'INSERT INTO users (name, email) VALUES (joshua, josh@gmail.com)';
//     connection.query(query, [name, email], (err, results) => {
//         if (err) {
//             console.error('error executing query:', err);
//             res.status(500).send('error inserting data into database');
//             return;
//         }
//         res.status(201). send('User addded successfully');
//     });
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// //javascript but not functional, giving errors because I'm using MySQL codes there
//projects
// const projects = [ 
//     {
//         title: 'Overnights projects',
//     description: 'showcasing Overnight',
//     technologies: ['javascript', 'Node js', 'Mysql'],
//     // image: img src = './images/\',
//     githublink: 'https:github',
//     livelink: ''
//     },
// ];

// //skills
// const skills = [
//     {
//         name: 'JavaScript',
//         proficiency: 'Intermediate',
//         category: 'Backend',
//     },
// ];

// //Experience
// const Experience = [
//     {
//         company: 'Nithub Unilag',
//         position: 'Software Engineer',
//         StartDate: '2022-03-16',
//         endDate: '2023-06-21',
//         description: 'Worked as an intern',
//     },
// ];

// // Education
// const Education = [
//     {
//         institution: 'University of Lagos',
//         degree: 'Bachelor of science',
//         fieldofstudy: 'Chemistry',
//         startdate: '2021-02-09',
//         endDate: '2027-01-15',
//     },
// ];

// // contact
// const contact = [
//     {
//         email: 'iraborvd@gmail.com',
//         phone: '+2347086419386',
//         linkedln: '',
//         github: '',

//     },
// ];

// //about me
// const about = [
//     {
//         summary: 'i am a very passionate software developer with more that 3 years of experience in web and software developement',
//         interests: ['working on big projects(coding)', 'Reading', 'playing chess'],
    
//     },
// ];

// const projects = ({projects}) => (
    

// );

// function displayprojects(projects) {
//     const projectscontainer = document.getElementById('projects');

//     project.forEach((projects) => {
//         const projectElement = document.createElement('div');
//         projectElement.innerHTML = 
//         <h3>${project.title}</h3>
//         <p>${project.description}</p>
//         <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
//         <img src="${project.image}" alt="${project.title}" />
//         <a href="${project.githubLink}" target="_blank">GitHub</a>
//         <a href="${project.liveLink}" target="_blank">Live Demo</a>
//        // giving all sorts of errors
//     });
// }

//const mysql = require('mysql2');
// const express = require ('express');
// const app = express();

// const connection = mysql.createConnection({
    // host: 'localhost',
    // user: 'root'
    // password: 'Overnight#1'
// })

// app.get('/projects', (req, res) => {
//     const query = 'SELECT * FROM projects';
//     connection.query(query, (err, results) => {
//         if (err) {
//             console.error('Error executing query;', err);
//             res.status(500).send('Error fetchimg data from database');
//             return;
//         }
//         res.json(results);
//     });  
// });

app.get('/skills', (req, res) => {
    const query = 'SELECT * FROM skills';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query;', err);
            res.status(500).send('Error fetchimg data from database');
            return;
        }
        res.json(results);
    });  
});

app.get('/experience', (req, res) => {
    const query = 'SELECT * FROM experience';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query;', err);
            res.status(500).send('Error fetchimg data from database');
            return;
        }
        res.json(results);
    });  
});

app.get('/education', (req, res) => {
    const query = 'SELECT * FROM education';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query;', err);
            res.status(500).send('Error fetchimg data from database');
            return;
        }
        res.json(results);
    });  
});

app.get('/contact', (req, res) => {
    const query = 'SELECT * FROM contact';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query;', err);
            res.status(500).send('Error fetchimg data from database');
            return;
        }
        res.json(results);
    });  
});

app.get('/about', (req, res) => {
    const query = 'SELECT * FROM about';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query;', err);
            res.status(500).send('Error fetchimg data from database');
            return;
        }
        res.json(results);
    });  
});

app.get('/projects', (req, res) => {
    const query= `
    SELECT p.id, p.title, p.description, GROUP_CONCAT(t.name)
    AS technologies
    FROM projects P
    JOIN project_technologies pt on p.id = pt.project_id
    JOIN technologies t on pt.technology_id = t.id 
    GROUP by p.id
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('error fetching data from database');
            return;
        }
        res.json(results);
    });

});

// if i was ever using react which i'm not


// import React, { useEffect, useState } from 'react';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     // Fetch projects from the API
//     fetch('http://localhost:4000/projects')
//       .then((response) => response.json())
//       .then((data) => setProjects(data))
//       .catch((error) => console.error('Error fetching projects:', error));
//   }, []);

//   return (
//     <div>
//       <h1>My Projects</h1>
//       {projects.map((project) => (
//         <div key={project.id}>
//           <h2>{project.title}</h2>
//           <p>{project.description}</p>
//           <p>Technologies: {project.technologies}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;


// already did the read from crude
const getAllProjects  = () => {
    return new Promise((resolve, reject) => {
        const query= `
        SELECT p.id, p.title, p.description, GROUP_CONCAT(t.name)
        AS technologies
        FROM projects P
        JOIN project_technologies pt on p.id = pt.project_id
        JOIN technologies t on pt.technology_id = t.id 
        GROUP by p.id
        `;
    
        connection.query(query, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

module.exports = { getAllProjects };
module.exports = {getAllProjects, createProject, updateProject, deleteProject};

const express = require('express');
const {getAllProjects} = require('./models/projectModel');

// enable cors
// cors allows your code to go through to your backend when your front and backend are on different domians
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

//routr to fetch all projects
app.get('/projects',async (req, res) => {
    try{
        const projects = await getAllProjects();
        res.json(projects);
    } catch (err) {
        console.error('Error fetching projects:', err);
        res.status(500).send('Error fetching data from database');
    };
});

// CRUD operations
// create, read, Update, delete
const createProject = (title, description) => {
    return new Promise((resolve, reject) => {
        const query= 'INSERT INTO PROJECTS (title, description) VALUES (distribution api, helps me out with distribution)';
        connection.query(query, [title, description], (err, results) => {
            if(err) reject(err);
            resolve(results.insertId)
        });
    });
};

const {createProject} = require('./models/projectModel');
app.use(express.json());
app.post('/projects', async (req, res) =>{
    const {title, description} = req.body;
    try{
        const projectId = await createProject(title, description);
        res.status(201).json({id: projectId, title, description});
    } catch(err) {
        console.error('Error creating project:', err);
        res.status(500).send('Error creating project');
    
    }
});

//update
const updateProject = (id, title, description) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO PROJECTS (title, description) VALUES (voice api, help distributing voice)';
      connection.query(query, [title, description, id], (err, results) => {
        if (err) {reject(err);
            return;
        }
        resolve(results.affectedRows); // Return the number of affected rows
      });
    });
  };

  const { updateProject } = require('./models/projectModel');

app.put('/projects/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const affectedRows = await updateProject(id, title, description);
    if (affectedRows > 0) {
      res.json({ id, title, description });
    } else {
      res.status(404).send('Project not found');
    }
  } catch (err) {
    console.error('Error updating project:', err);
    res.status(500).send('Error updating project');
  }
});

// delete
// In projectModel.js
const deleteProject = (id) => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM projects WHERE id = ?';
      connection.query(query, [id], (err, results) => {
        if (err){ reject(err);
            return;
        } 
        resolve(results.affectedRows); // Return the number of affected rows
      });
    });
  };

const { deleteProject } = require('./models/projectModel');
  app.delete('/projects/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await deleteProject(id);
    if (affectedRows > 0) {
      res.send('Project deleted successfully');
    } else {
      res.status(404).send('Project not found');
    }
  } catch (err) {
    console.error('Error deleting project:', err);
    res.status(500).send('Error deleting project');
  }
});