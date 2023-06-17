import styles from './staticLayouts.module.css'
function staticLayouts() {
  return (
    <div className={styles.staticLayouts}>
      <header className="App-header">
        <h1>Welcome to Friends App</h1>
        <section>
          <p>We are here to make friends online</p>
        </section>
      </header>
    </div>
  );
}

export default staticLayouts;
