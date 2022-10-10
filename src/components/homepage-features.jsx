import React from 'react';
import clsx from 'clsx';
import styles from '../css/homepage-features.module.css';

const FeatureList = [
  {
    title: 'What is a Space War',
    img: require('/static/img/moon.png').default,
    description: (
      <>
        Space warfare is the fight conducted between nations in outer space without boundaries. 
        It's a dangerous war zone where resources are scarce and death is common. However, space warfare has its advantages: 
        it's an area that is out of our reach and inaccessible to most of us. Therefore, it might be a place where peace can flourish.
      </>
    ),
  },
  {
    title: 'Space War Economics',
    img: require('/static/img/space-travel.png').default,
    description: (
      <>
        Space wars are fought between nations over natural resources, political control and military dominance. 
        Though wars have occurred in space before, most involve orbiting satellites- not planets. These engagements range from minor collisions to full-fledged battles that claim lives and destroy property. 
        During the 1980s, 3% of world Gross Domestic Product (GDP) was spent on defense- that's compared to only 2% spent on defense by the United States. As a result, it's difficult for any nation to defend itself in space without a lot of money. 
      </>
    ),
  },
  {
    title: 'Space War Brutality',
    img: require('/static/img/explosion.png').default,
    description: (
      <>
        Space warfare can be brutal since both sides must expend resources fighting. 
        Both sides lose military equipment, tanks and other weapons in space while also losing soldiers and pilots. 
        In addition, both sides lose their food supply since they can't return to the ground after traveling through space. 
        Because of this, most military conflicts end up being a waste of precious resources for both sides.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
