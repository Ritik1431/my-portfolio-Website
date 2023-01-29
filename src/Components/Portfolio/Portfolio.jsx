import React from 'react'
import './Portfolio.css'
import IMG1 from'../../Assets/portfolio1.jpg'
import IMG2 from'../../Assets/portfolio2.jpg'
import IMG3 from'../../Assets/portfolio3.jpg'
import IMG4 from'../../Assets/portfolio4.jpg'
import IMG5 from'../../Assets/portfolio5.png'
import IMG6 from'../../Assets/portfolio6.jpg'

const data = [
{
  id : 1,
  image : IMG1,
  title : 'Dashboard using ms-excell',
  github : 'https://github.com',
  demo : 'https://dribble.com'
},
{
  id : 2,
  image : IMG2,
  title : 'Dashboard using ms-excell',
  github : 'https://github.com',
  demo : 'https://dribble.com'
},
{
  id : 3,
  image : IMG3,
  title : 'Dashboard using ms-excell',
  github : 'https://github.com',
  demo : 'https://dribble.com'
},
{
  id : 4,
  image : IMG4,
  title : 'Dashboard using ms-excell',
  github : 'https://github.com',
  demo : 'https://dribble.com'
},
{
  id : 5,
  image : IMG5,
  title : 'Dashboard using ms-excell',
  github : 'https://github.com',
  demo : 'https://dribble.com'
},
{
  id : 6,
  image : IMG6,
  title : 'Dashboard using ms-excell',
  github : 'https://github.com',
  demo : 'https://dribble.com'
}
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
        data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className="portfolio_item-btn">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </div>
        </article>
            )
        }
        )
      }
      </div>
    </section>
  )
}

export default Portfolio
