import React from 'react';

import { HeadingProps } from './Heading.types';
import styles from './Heading.module.css';

const Heading: React.FC<HeadingProps> = ({ heading, subHeading }) => {

    return (
        <div className={styles.headingContainer}>
            <div>
                <p className={styles.heading}>{heading}</p>
            </div>
            <div>
                <p className={styles.subHeading}>{subHeading}</p>
            </div>
        </div>
    )
}

export default Heading