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
    // password: ''
// })

app.get('/projects', (req, res) => {
    const query = 'SELECT * FROM projects';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query;', err);
            res.status(500).send('Error fetchimg data from database');
            return;
        }
        res.json(results);
    });  
});

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