import Layout from "../components/Layout";

export default function JobsForm() {
  return (
    <Layout>
      <h1 className="text-3xl p-2">
        Add a listing to be featured on the Jobs Board
      </h1>

      <form
        className="text-blue"
        action="mailto:ryanlalchand@gmail.com"
        method="post"
      >
        <div>
          <label htmlFor="name">Your Name: &nbsp;</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Your Email: &nbsp;</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title: &nbsp;</label>
          <input type="text" id="jobTitle" name="jobTitle" required />
        </div>
        <div>
          <label htmlFor="company">Company: &nbsp;</label>
          <input type="text" id="company" name="company" required />
        </div>
        <div>
          <label htmlFor="location">
            Location (City, State OR Remote): &nbsp;
          </label>
          <input type="text" id="location" name="location" required />
        </div>
        <div>
          <label htmlFor="salaryRange">Salary Range (optional): &nbsp;</label>
          <input type="text" id="salaryRange" name="salaryRange" />
        </div>
        <div>
          <label htmlFor="listingLink">
            Listing link or contact email (optional): &nbsp;
          </label>
          <input type="text" id="listingLink" name="listingLink" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Layout>
  );
}

// Card design for each company with consulting badge
