import React from 'react'
import Heading from '../../components/UI/Heading/Heading'
import SubHeading from '../../components/UI/SubHeading/SubHeading'
import styles from "./Tracks.module.css"
import { track_titles, track_topics } from '../../data'

const Tracks = () => {
    return (
        <div>
            <Heading text="tracks" />
            <div className={styles.section}>
                <SubHeading text="Themes and topics" />
                {track_titles.map((title, index) => {
                    const middleIndex = Math.ceil(track_topics[title].length / 2);
                    const firstHalf = track_topics[title].slice().splice(0, middleIndex);
                    const secondHalf = track_topics[title].slice().splice(-middleIndex);

                    return <div className={styles.track} key={index}>
                        <h2><i>Track {index + 1}:</i> {title}</h2>
                        <div>
                            <ul>
                                {firstHalf.map((topic, index) => <li key={index}>{topic}</li>)}
                            </ul>
                            <ul>
                                {secondHalf.map((topic, index) => <li key={index}>{topic}</li>)}
                            </ul>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Tracks