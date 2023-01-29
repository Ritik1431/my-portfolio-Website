import React from 'react'
import './Portfolio.css'
import IMG1 from'../../Assets/portfolio1.jpg'
import IMG2 from'../../Assets/portfolio2.jpg'
import IMG3 from'../../Assets/portfolio3.jpg'
import IMG4 from'../../Assets/portfolio4.jpg'
import IMG5 from'../../Assets/portfolio5.png'
import IMG6 from'../../Assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
            <h3>This is a portfolio title</h3>
            <div className="portfolio_item-btn">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribble.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
            <h3>This is a portfolio title</h3>
            <div className="portfolio_item-btn">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribble.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
            <h3>This is a portfolio title</h3>
            <div className="portfolio_item-btn">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribble.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
            <h3>This is a portfolio title</h3>
            <div className="portfolio_item-btn">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribble.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
            <h3>This is a portfolio title</h3>
            <div className="portfolio_item-btn">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribble.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
            <h3>This is a portfolio title</h3>
            <div className="portfolio_item-btn">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribble.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
