# Foodient - Food Donation Management System

Foodient is a full-stack web application that enables donors to seamlessly register and contribute surplus food. NGOs can view and manage these donations to help reduce food waste and support community welfare.

---

## Features

- User Registration and Login with JWT Authentication
- Add and view personal food donations
- Secure REST API (Spring Boot)
- Responsive Angular frontend
- PostgreSQL database integration
- Clean modular code using modern frameworks

---

## Tech Stack

| Layer        | Technology        | Version       |
|--------------|-------------------|---------------|
| Frontend     | Angular           | 17+           |
| Backend      | Spring Boot       | 3.2+          |
| ORM          | Hibernate (JPA)   | Jakarta 3+    |
| Database     | PostgreSQL        | 14+           |
| Auth         | JWT               | 0.9.1         |
| Build Tool   | Maven             | 3.8+          |
| Language     | Java              | 17            |

---

## Project Structure

foodient-system/
├── backend/ # Spring Boot backend
└── frontend/ # Angular frontend


---

## Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/foodient-system.git
cd foodient-system


2. Backend Setup (Spring Boot)
Prerequisites:
Java 17+
Maven 3.8+
PostgreSQL 14+

Configuration:
Update backend/src/main/resources/application.properties with your PostgreSQL credentials:

spring.datasource.url=jdbc:postgresql://localhost:5432/foodient
spring.datasource.username=your_pg_username
spring.datasource.password=your_pg_password

Run the Application
cd backend
mvn clean install
mvn spring-boot:run
Spring Boot will start at: http://localhost:8080

3. Frontend Setup (Angular)
Prerequisites:
Node.js 18+
Angular CLI 17+

▶️ Run the Angular Frontend

cd frontend
npm install
ng serve
Frontend will run at: http://localhost:4200