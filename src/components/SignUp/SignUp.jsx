import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import blossomFlower from '../../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Sign Up">
        <h1 className={styles.title}>Get Started Now</h1>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="signup-name">Name</label>
              <input
                id="signup-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="signup-email">Email address</label>
              <input
                id="signup-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <label className={styles.agreement}>
            <input name="terms" type="checkbox" required />
            <span>I agree to the <span className={styles.terms}>terms &amp; policy</span></span>
          </label>
          <button className={styles.submit} type="submit">Signup</button>
        </form>
      </section>
      <section className={styles.right} aria-label="Blossom image">
        <img
          className={styles.blossom}
          src={blossomFlower}
          alt="Pink and yellow blossoms with green leaves"
          width="828"
          height="936"
        />
      </section>
    </main>
  )
}

export default SignUp
