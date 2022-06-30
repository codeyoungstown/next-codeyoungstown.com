// Card design for each job listing with job description, contact person, salary range (optional), location (remote?), listing link

import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}

// Card design for each company with consulting badge
