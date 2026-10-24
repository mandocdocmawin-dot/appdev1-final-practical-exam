import '@fontsource/poppins/500.css'
import blossomFlower from '../../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Sign Up">
        <h1 className={styles.title}>Get Started Now</h1>
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
