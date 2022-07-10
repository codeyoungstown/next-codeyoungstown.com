import Layout from "../components/Layout";

export default function JobsForm() {
  return (
    <Layout>
      <h1 className="text-3xl p-2">
        Add a listing to be featured on the Jobs Board
      </h1>

      <form
        className="p-4 flex-row"
        action="mailto:contact@codeyoungstown.com?subject=New Job Listing"
        target="__blank"
        method="post"
        encType="text/plain"
      >
        <div>
          <label htmlFor="name">Your Name: &nbsp;</label> <br />
          <input
            className="bg-CYgray
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
            type="text"
            id="name"
            name="name"
            required
          />{" "}
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="email">Your Email: &nbsp;</label> <br />
          <input
            className="bg-CYgray
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
            type="email"
            id="email"
            name="email"
            required
          />{" "}
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title: &nbsp;</label> <br />
          <input
            className="bg-CYgray
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
            type="text"
            id="jobTitle"
            name="jobTitle"
            required
          />{" "}
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="company">Company: &nbsp;</label> <br />
          <input
            className="bg-CYgray
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
            type="text"
            id="company"
            name="company"
            required
          />{" "}
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="location">
            Location (City, State OR Remote): &nbsp;
          </label>{" "}
          <br />
          <input
            className="bg-CYgray
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
            type="text"
            id="location"
            name="location"
            required
          />{" "}
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="salaryRange">Salary Range (optional): &nbsp;</label>{" "}
          <br />
          <input
            className="bg-CYgray
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
            type="text"
            id="salaryRange"
            name="salaryRange"
          />{" "}
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="listingLink">
            Listing link or contact email (optional): &nbsp;
          </label>{" "}
          <br />
          <input
            className="bg-CYgray
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
            type="text"
            id="listingLink"
            name="listingLink"
          />{" "}
          <br />
          <br />
        </div>
        <div>
          <button
            className="p-4 outline rounded-full border-0 border-white hover:bg-gray-700"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
}
