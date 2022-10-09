import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Thing About Space War',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Quisque nec metus auctor, facilisis ipsum ac, blandit mauris. 
        Nam pharetra auctor arcu vitae posuere. 
        Phasellus eu malesuada purus. Donec id finibus purus. 
      </>
    ),
  },
  {
    title: 'Other Thing About Space War',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Cras fringilla ornare ex, quis luctus dolor molestie non. Cras eget hendrerit odio. Aenean suscipit odio enim, in imperdiet diam egestas ac. 
        Cras consectetur, nisl eget commodo ullamcorper, libero augue ultricies leo, id blandit dui dui et ipsum. 
        Nulla ultrices, enim suscipit venenatis efficitur, dui libero aliquam risus, sit amet hendrerit dui felis sed nisl. 
      </>
    ),
  },
  {
    title: 'Other Other Thing About Space War',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Donec sed volutpat elit. Nunc in lorem eget turpis aliquam congue. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        In iaculis justo ut ipsum pretium vulputate. 
        In eleifend tristique nulla, non vulputate nisl mattis sed.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
