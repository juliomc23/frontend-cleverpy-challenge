type Props = {};

const Login = (props: Props) => {
  return (
    <section>
      <form>
        <div className="input-group">
          <input
            required
            type="email"
            name="email"
            autoComplete="off"
            className="input"
          />
          <label className="user-label">First Name</label>
        </div>
        <div className="input-group">
          <input
            required
            type="password"
            name="password"
            autoComplete="off"
            className="input"
          />
          <label className="user-label">First Name</label>
        </div>
      </form>
    </section>
  );
};

export default Login;
