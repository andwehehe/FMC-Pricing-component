import styles from './Header.module.css';

function Header({ selectedPlan, setSelectedPlan, isChecked, setIsChecked, handleCheckboxChange }) {
  
  return(
     <header>
      <h1 className={styles.headerTitle}>Our Pricing</h1>
      <div className={styles.pricingToggle}>

        <label htmlFor="annually" className={styles.labelAnnually}>Annually</label>
        <input
          type="radio"
          name="pricing-toggle"
          id="annually"
          className={`${styles.radioToggle} ${styles.radioAnnually}`}
          checked={selectedPlan === "annually"}
          onChange={() => {setSelectedPlan("annually"), setIsChecked(!isChecked)}}
        />

        <label className={styles.toggleSwitch}>
          <input 
            type='checkbox' 
            className={styles.toggleCheckbox}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className={styles.toggleBall}></span>
        </label>

        <label htmlFor="monthly" className={styles.labelMonthly}>Monthly</label>
        <input
          type="radio"
          name="pricing-toggle"
          id="monthly"
          className={`${styles.radioToggle} ${styles.radioMonthly}`}
          checked={selectedPlan === "monthly"}
          onChange={() => {setSelectedPlan("monthly"), setIsChecked(!isChecked)}}
        />

      </div>
    </header>
  );
}

export default Header