import { Link, useNavigate, NavLink } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer.js';
import { UserContext } from "../context/UserContext";


import './Home.css'
import '../App.css'
import {deleteArticle, getArticles} from "../services/articleService";

export default function Home() {


  const navigate = useNavigate()


  const { user } = useContext(UserContext);
  return (
    <>
    <div className="home fade-in">
      <Carousel className="carousel-class">

        <Carousel.Item>
          <div className="img-container">
            <img src="../img/B1.jpg" alt='B1' />
          </div>
          <Carousel.Caption>
            <h3>Classic Burger</h3>
            <p>Beef Patty w/ Cheese, Tomato, Lettuce, Onions, Sauce #2, Brioche Bun</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="img-container">
            <img src="../img/B8.jpg" alt='B8' />
          </div>
          <Carousel.Caption>
            <h3>PB Bacon Burger</h3>
            <p>Beef Patty w/ Cheese, Peanut Butter, Maple Syrup, Bacon, Brioche Bun</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="img-container">
            <img src="../img/B5.jpg" alt='B5' />
          </div>
          <Carousel.Caption>
            <h3>Surf & Turf</h3>
            <p>Beef Patty w/ Cheese, Garlic Buttered Shrimps w/ Crabfat Sauce, Lettuce</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      <div className="about-part">
        <div className="about-tab left-about-tab">
          <h1>About Us</h1>
          <p>Nestled in the heart of Marikina, Two’s serves up the perfect combination of flavor, quality, and comfort. Our burgers are crafted with the finest locally sourced ingredients, from juicy, perfectly seasoned patties to freshly baked buns. Masarap dito man promise.</p>
          <iframe title="twosmap" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=twos&zoom=13&maptype=roadmap"></iframe>
        </div>

        <div className="about-tab right-about-tab">
          <NavLink to={user ? "/menu" : "/login"}>
            <div className="view-menu right-tabs">
              <h1>View Menu</h1>
              <p>Gutom ka man? Click here to view our menu and order for delivery!</p>
            </div>
          </NavLink>

          <NavLink to={user ? "/reservation" : "/login"}>
            <div className="view-reservation right-tabs">
              <h1>Reserve Tables</h1>
              <p>Planning to drop by? Click Here to reserve a seat!</p>
            </div>
          </NavLink>

          <NavLink to={user ? "/feedback" : "/login"}>
            <div className="view-feedback right-tabs">
              <h1>Customer Reviews</h1>
              <p>Click here to see what others say about us or leave a review.</p>
            </div>
          </NavLink>
        </div>
      </div>

    </div>

    <Footer />

    </>
  )
}
