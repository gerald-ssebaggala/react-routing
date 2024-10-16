import { Link } from "react-router-dom";

interface UserProps {
  id: number;
  name: string;
  website: string;
  company: Company;
  email: string;
}

interface Company {
  bs?: string;
  catchPhrase?: string;
  name: string;
}

export default function User({ id, name, website, email, company }: UserProps) {
  return (
    <div className="user-card" key={id}>
      <h3 className="user-name">
        {name}
      </h3>
      <div className="user-content">
        <span className="company-name">{company.name}</span>
        <span className="website">{website}</span>
        <span className="email">{email}</span>
      </div>
      <Link to="" className="view-btn">
        View
      </Link>
    </div>
  );
}
