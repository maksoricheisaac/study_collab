import React from 'react';
import { BookOpen, Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    title: "Introduction à JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", // JavaScript logo
    category: "Programmation",
    instructor: "John Doe",
    duration: "8h",
    students: "1200",
    rating: "4.5",
  },
  {
    title: "Maîtriser React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React logo
    category: "Développement Web",
    instructor: "Jane Smith",
    duration: "10h",
    students: "950",
    rating: "4.8",
  },
  {
    title: "Bases de Python",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", // Python logo
    category: "Programmation",
    instructor: "Alice Johnson",
    duration: "6h",
    students: "850",
    rating: "4.6",
  },
  {
    title: "Conception UX/UI",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/ISO_9241_pictogram.svg", // UX/UI icon
    category: "Design",
    instructor: "Mark Brown",
    duration: "5h",
    students: "1100",
    rating: "4.7",
  },
  {
    title: "Développement Mobile avec Flutter",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png", // Flutter logo
    category: "Développement Mobile",
    instructor: "Emily Davis",
    duration: "12h",
    students: "800",
    rating: "4.9",
  },
  {
    title: "Analyse de données avec Excel",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Microsoft_Excel_2013_logo.svg", // Excel logo
    category: "Data Science",
    instructor: "Michael Scott",
    duration: "4h",
    students: "1300",
    rating: "4.4",
  },
];

export default function Courses() {
  return (
    <section className="py-16 bg-gray-50" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slide-in">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Cours Populaires
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des cours conçus par des experts pour votre réussite
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover-lift">
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  src={course.image}
                  alt={course.title}
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-gray-600">{course.instructor}</p>
                
                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center hover-scale">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center hover-scale">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center hover-scale">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    {course.rating}
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Accéder au cours
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 gradient-border rounded-lg">
            Voir tous les cours
          </button>
        </div>
      </div>
    </section>
  );
}
