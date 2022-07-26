export default function WebsiteLink({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-colt hover:text-[#826e62] font-bold"
    >
      WEBSITE
    </a>
  );
}
