export function HeroProductMocks() {
  return (
    <div className="bk-banner__art" aria-hidden="true">
      <div className="bk-hero-mark">
        <svg viewBox="0 0 400 400" fill="none">
          <path
            fill="#0057ff"
            d="M80 60h80a40 40 0 0 1 40 40L140 200l60 100a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V100A40 40 0 0 1 80 60Z"
          />
          <path
            fill="#8ac9f4"
            d="M320 60h-80a40 40 0 0 0-40 40l60 100-60 100a40 40 0 0 0 40 40h80a40 40 0 0 0 40-40V100a40 40 0 0 0-40-40Z"
          />
        </svg>
      </div>
      <div className="bk-hero-products">
        <EmployeeApp />
        <EmployerDashboard />
        <AdminDashboard />
      </div>
      <div className="bk-hero-chips">
        <span className="bk-hero-chip bk-hero-chip--a">Payroll-linked recovery</span>
        <span className="bk-hero-chip bk-hero-chip--b">₹0 employer capital</span>
        <span className="bk-hero-chip bk-hero-chip--c">HR approves first</span>
      </div>
      <span className="bk-hero-orb bk-hero-orb--a" />
      <span className="bk-hero-orb bk-hero-orb--b" />
    </div>
  );
}

function EmployeeApp() {
  return (
    <div className="mp-phone">
      <span className="mp-phone__btn mp-phone__btn--l" />
      <span className="mp-phone__btn mp-phone__btn--r" />
      <div className="mp-phone__glass">
        <span className="mp-phone__island" />
        <div className="mp-app">
          <div className="mp-app__status">
            <span>9:41</span>
            <span className="mp-app__sys">
              <i />
              <i />
              <i />
              <b />
            </span>
          </div>
          <header className="mp-app__head">
            <div>
              <p>Good morning</p>
              <strong>Priya Mehta</strong>
            </div>
            <span className="mp-app__avatar">PM</span>
          </header>
          <div className="mp-app__card">
            <span>Available to request</span>
            <b>₹4,200</b>
            <div className="mp-app__meter">
              <span style={{ width: "35%" }} />
            </div>
            <em>₹4,200 of ₹12,000 earned this cycle</em>
            <div className="mp-app__cta">Request now</div>
          </div>
          <div className="mp-app__row">
            <div>
              <span>Next payday</span>
              <strong>22 Aug</strong>
            </div>
            <div>
              <span>Days left</span>
              <strong>7</strong>
            </div>
          </div>
          <p className="mp-app__label">Recent activity</p>
          <ul className="mp-app__list">
            <li>
              <span className="mp-dot mp-dot--ok" />
              <div>
                <strong>Approved</strong>
                <small>08 Aug · Acme Foods</small>
              </div>
              <b>₹2,800</b>
            </li>
            <li>
              <span className="mp-dot mp-dot--blue" />
              <div>
                <strong>Recovered</strong>
                <small>31 Jul · Payroll</small>
              </div>
              <b>₹3,500</b>
            </li>
            <li>
              <span className="mp-dot mp-dot--wait" />
              <div>
                <strong>Pending</strong>
                <small>Today · Awaiting approval</small>
              </div>
              <b>₹4,200</b>
            </li>
          </ul>
          <nav className="mp-app__tabs">
            <span className="is-on">Home</span>
            <span>History</span>
            <span>Wallet</span>
            <span>Profile</span>
          </nav>
          <span className="mp-app__home" />
        </div>
      </div>
    </div>
  );
}

function EmployerDashboard() {
  return (
    <div className="mp-win mp-win--employer">
      <div className="mp-win__chrome">
        <span />
        <span />
        <span />
        <div className="mp-win__url">app.mobpae.com/employer</div>
      </div>
      <div className="mp-win__shell">
        <aside className="mp-win__side">
          <strong>MobPae</strong>
          <span className="is-on">Overview</span>
          <span>Requests</span>
          <span>Employees</span>
          <span>Payroll</span>
          <span>Reports</span>
        </aside>
        <div className="mp-win__main">
          <div className="mp-win__top">
            <div>
              <p>Acme Foods Pvt Ltd</p>
              <h3>Approvals</h3>
            </div>
            <div className="mp-win__tools">
              <span className="mp-win__search">Search employees</span>
              <span className="mp-win__user">HR</span>
            </div>
          </div>
          <div className="mp-win__stats">
            <div>
              <span>Pending</span>
              <strong>4</strong>
            </div>
            <div>
              <span>Approved</span>
              <strong>12</strong>
            </div>
            <div>
              <span>This cycle</span>
              <strong>₹1.26L</strong>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="mp-av">AS</i> A. Sharma
                </td>
                <td>₹4,200</td>
                <td>
                  <em className="mp-st mp-st--wait">Pending</em>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="mp-av">RI</i> R. Iyer
                </td>
                <td>₹2,800</td>
                <td>
                  <em className="mp-st mp-st--ok">Approved</em>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="mp-av">SK</i> S. Khan
                </td>
                <td>₹6,000</td>
                <td>
                  <em className="mp-st mp-st--ok">Approved</em>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="mp-av">NP</i> N. Patel
                </td>
                <td>₹3,100</td>
                <td>
                  <em className="mp-st mp-st--wait">Pending</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="mp-win mp-win--admin">
      <div className="mp-win__chrome mp-win__chrome--dark">
        <span />
        <span />
        <span />
        <div className="mp-win__url">admin.mobpae.com/disbursals</div>
      </div>
      <div className="mp-win__shell mp-win__shell--dark">
        <aside className="mp-win__side mp-win__side--dark">
          <strong>Admin</strong>
          <span className="is-on">Disbursals</span>
          <span>KYC queue</span>
          <span>Lenders</span>
          <span>Settlements</span>
        </aside>
        <div className="mp-win__main mp-win__main--dark">
          <div className="mp-win__top">
            <div>
              <p>Operations</p>
              <h3>Ready to send</h3>
            </div>
            <span className="mp-win__live">Live</span>
          </div>
          <div className="mp-win__stats mp-win__stats--dark">
            <div>
              <span>KYC</span>
              <strong>6</strong>
            </div>
            <div>
              <span>To disburse</span>
              <strong>₹1.8L</strong>
            </div>
            <div>
              <span>Settled</span>
              <strong>92%</strong>
            </div>
          </div>
          <div className="mp-ops">
            <div>
              <b>PRI-2041</b>
              <span>Bank verified</span>
              <em>Ready</em>
            </div>
            <div>
              <b>PRI-2038</b>
              <span>Fee check</span>
              <em>Review</em>
            </div>
            <div>
              <b>PRI-2033</b>
              <span>UPI / IMPS</span>
              <em>Sent</em>
            </div>
            <div>
              <b>PRI-2029</b>
              <span>KYC match</span>
              <em>Hold</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
