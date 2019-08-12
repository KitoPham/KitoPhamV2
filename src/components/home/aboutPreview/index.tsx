import React from "react"
import { strings } from "./strings"
import styles from "./styles.scss"

export const AboutPreview = () => (
  <div>
    <div className={styles.greetings}>{strings.greeting}</div>
    <div className={styles.snippet}>{strings.bioSnippet}</div>
  </div>
)
