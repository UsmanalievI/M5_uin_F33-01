import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classes from './Slidebar.module.css'

function Slidebar() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src='https://cdn.oneesports.gg/cdn-data/2024/03/MLBB_ALLSTAR_2024_exclusiveskins.jpg' alt='imagefromIlich' className={classes.images}/>
        <Carousel.Caption>
          <h3 className={classes.header} >First Event</h3>
          <p className={classes.lorem}>Очень интересный параграф можно даже не читать</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://i.ytimg.com/vi/aWmRid57WNM/maxresdefault.jpg' alt='imagefromIlich' className={classes.images}/>
        <Carousel.Caption>
          <h3 className={classes.header}>Second Event</h3>
          <p className={classes.lorem}>Очень интересный параграф можно даже не читать</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://cdn.oneesports.gg/cdn-data/2023/03/MLBB_ALLSTAR_teaser.webp' alt='imagefromIlich' className={classes.images}/>
        <Carousel.Caption>
          <h3 className={classes.header}>Third Event</h3>
          <p className={classes.lorem}>Очень интересный параграф можно даже не читать</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidebar;