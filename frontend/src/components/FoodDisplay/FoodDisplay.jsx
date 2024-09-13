import React, { useContext, useEffect } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  useEffect(() => {
    // Animate heading with a fade-in and scale effect on scroll
    gsap.fromTo(
      '#food-heading',
      { opacity: 0, y: -50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#food-heading',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true
        }
      }
    );

    // Animate food items with scale and rotation effects on scroll
    gsap.fromTo(
      '.food-display-list .food-item',
      { opacity: 0, y: 50, scale: 0.8, rotate: 10 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.food-display-list',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true
        }
      }
    );
  }, [food_list, category]);

  return (
    <div className='food-display' id='food-display'>
      <h2 id='food-heading'>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
                className='food-item'
              />
            );
          }
          return null; // Return null if the item does not match the category
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
