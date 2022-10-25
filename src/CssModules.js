import React from "react";
import styles from "./CssModules.module.css";

const CssModules = () => (
    <div>
        <p className={styles.primary}>
            This is a react component using CSS Modules.
        </p>
    </div>
);

export default CssModules;