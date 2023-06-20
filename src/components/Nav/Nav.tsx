import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar bg-base-100 shadow-sm border-solid border-2 border-black mb-2 rounded-lg">
      <Link to="/">
        <img src="/images/logo.png" alt="logo" className=" w-16" />
      </Link>
    </div>
  );
}
