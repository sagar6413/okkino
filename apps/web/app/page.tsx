import { gql } from '../data-access/graphql-client';
export default async function page() {
  const result = await gql.GetUsers();
  console.log(
    result.users.map((user) => ({ name: user.name, email: user.email }))
  );
  return <div className="bg-slate-800">page</div>;
}
