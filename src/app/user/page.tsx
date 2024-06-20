// src/app/user/[username]/page.tsx

import { useRouter } from 'next/router';

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <h1>User Profile Page</h1>
      <p>Profile of {username}</p>
    </div>
  );
}
