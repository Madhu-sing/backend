const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Data for demonstration
const courses = [
    { id: 1, title: "D.Pharma", description: "Diploma in Pharmacy", img: "images/pharmacy_course/.Pharm.D (Doctor of Pharmacy)11.jpg" },
    { id: 2, title: "B.Pharma", description: "Bachelor of Pharmacy", img: "images/pharmacy_course/B. Pharm (Bachelor of Pharmacy).jpg" },
    { id: 3, title: "M.Pharma", description: "Master of Pharmacy", img: "images/pharmacy_course/M. Pharm (Master of Pharmacy).jpg" }
];

const testimonials = [
    { id: 1, name: "Mohit Singh", img: "images/pic.jpeg", feedback: "I secured admission to a reputed university in Russia for MBBS.", description: "Education Consultant by Ramesh is the best choice for students dreaming of studying abroad. They helped me secure admission to a top-ranked university for MBBS in Ukraine, and their step-by-step guidance made the entire process stress-free. I’m grateful for their support and highly recommend them to other students." },
    { id: 2, name: "Manya Singh", img: "images/pic99.jpeg", feedback: "Their guidance helped me join a top university in Ukraine.", description: "The team at Education Consultant by Ramesh provided exceptional support during my application for a Pharmacy program in Canada. They helped me shortlist universities, prepare my statement of purpose, and handle visa formalities. Their constant encouragement and professionalism gave me confidence throughout the process. I can’t thank them enough for helping me achieve my dream" },
    { id: 3, name: "Pranav Dongaria", img: "images/pic6.jpeg", feedback: "Exceptional support for a Pharmacy program in Canada.", description: "I was confused about how to apply for MBBS abroad, but Education Consultant by Ramesh made the 	process so simple. Their team guided me in choosing the right university in Russia, completing my documentation, and securing my visa. Today, I am studying in one of the best medical universities, and it’s all thanks to their expert guidance. Highly recommended for anyone looking to study MBBS abroad" }
];

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Education Consultants Backend API');
});

// Fetch all courses
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

// Fetch all testimonials
app.get('/api/testimonials', (req, res) => {
    res.json(testimonials);
});

// Add a new testimonial
app.post('/api/testimonials', (req, res) => {
    const newTestimonial = { id: testimonials.length + 1, ...req.body };
    testimonials.push(newTestimonial);
    res.json({ message: 'Testimonial added', testimonial: newTestimonial });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
