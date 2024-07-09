import React from "react"
import { Redirect } from "react-router-dom"

// // Authentication related pages
import List from "../pages/Authentication/main"
import Contact from "../pages/Authentication/dashboard/contact"
import Experience from "../pages/Authentication/dashboard/experience"
import Aboutme from "../pages/Authentication/dashboard/aboutme/index"
import Projects from "../pages/Authentication/dashboard/projects"

// Admin Dashboard
import AdminDashboard from "../admin/dashboard/index"


const authProtectedRoutes = [
  // Admin Routes

  { path: "/about-me" , component: Aboutme },
  { path: "/contact" , component: Contact},
  { path: "/experience" , component: Experience},
  { path: "/projects" , component: Projects },

  { path: "/dashboard", component: AdminDashboard },

  // { path: "/", exact: true, component: () => <Redirect to="/login" /> },
  { path: "/", exact: true, component: () => <Redirect to="/resume" /> },
]

const publicRoutes = [
  { path: "/resume" , component: List},

]

export { authProtectedRoutes, publicRoutes }
