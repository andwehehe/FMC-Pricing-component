import styles from "./SubsPlan.module.css";
import { useState, useEffect } from "react";

function SubsPlan({ selectedPlan }) {

  const [ subsPlan, setSubsPlan ] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/FMC-Pricing-component/data/priceInfo.json");
        const data = await res.json();
        setSubsPlan(data);
      } catch(error) {
        console.error(error);
      }
    }

    loadData();
  }, [])
  
  return(
    <main className={styles.mainContent}>

      {
        subsPlan.map(plan => {
          const { plan: planType, storage, numberOfUsers, sharableData, key, pricing } = plan;
          const { monthly, annually } = pricing;

          return(
            <article
              className={`${styles.card} ${styles[key]}`}
              key={key}
            >
              <h2 className={styles.title}>{planType}</h2>
              <p className={styles.price}>
                <span className={styles.dollarSign}>$</span>
                {selectedPlan === "monthly" ? monthly : annually}
              </p>

              <div className={styles.benefits}>
                <hr />
                <p className={styles.storage}>{storage} Storage</p>
                <hr />
                <p className={styles.allowedUsers}>{numberOfUsers} Users Allowed</p>
                <hr />
                <p className={styles.sharableData}>Sent up to {sharableData}</p>
                <hr />
              </div>

              <button 
                type="button"
                className={styles.discoverBtn}
              >LEARN MORE</button>

            </article>
          );
        })
      }

    </main>
  );
}

export default SubsPlan