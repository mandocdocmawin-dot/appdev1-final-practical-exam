import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import { Input } from '@/components/ui/input.jsx'
import blossomFlower from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'
import styles from './Login.module.css'

function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Login">
        <h1 className={styles.title}>Welcome back!</h1>
        <p className={styles.subtitle}>Enter your Credentials to access your account</p>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="login-email">Email address</label>
              <Input
                className={styles.input}
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.field}>
              <div className={styles.passwordLabel}>
                <label htmlFor="login-password">Password</label>
                <a href="#forgot-password">forgot password</a>
              </div>
              <Input
                className={styles.input}
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <label className={styles.agreement}>
            <input name="remember" type="checkbox" />
            <span>Remember for 30 days</span>
          </label>
          <button className={styles.submit} type="submit">Login</button>
        </form>
        <div className={styles.bottom}>
          <div className={styles.divider}><span>Or</span></div>
          <div className={styles.socialButtons}>
            <button className={styles.socialButton} type="button">
              <img src={googleLogo} alt="" width="24" height="24" />
              <span>Sign in with Google</span>
            </button>
            <button className={styles.socialButton} type="button">
              <img src={appleLogo} alt="" width="24" height="24" />
              <span>Sign in with Apple</span>
            </button>
          </div>
          <p className={styles.account}>Don’t have an account? <a href="#signup">Sign Up</a></p>
        </div>
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

export default Login
