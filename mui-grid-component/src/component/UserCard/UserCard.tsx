import React from 'react'

import { UserCardProps } from './UserCard.types'
import styles from './UserCard.module.css'

const UserCard: React.FC<UserCardProps> = ({ data }) => {
    const { name, address, age, gender, img } = data;

    return (
        <div className={styles.container}>
            <div>
                <img
                    src={img}
                    alt="user-image"
                    className={styles.img}
                />
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.info}>Name: {name}</p>
                <p className={styles.info}>Address: {address}</p>
                <p className={styles.info}>Age: {age}</p>
                <p className={styles.info}>Gender: {gender}</p>
            </div>
        </div>
    )
}

export default UserCard