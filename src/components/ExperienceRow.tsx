import { Role } from "@/data/roles";

export default function ExperienceRow(role: Role) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[1.75fr_1fr_1fr] gap-10 not-last:border-b border-salley-secondary py-6">
      <header>
        <h3 className="text-2xl font-light tracking-tighter">
          {role.employer}, {role.location}
        </h3>
        <p className="text-salley-primary/80">
          {role.startDate} - {role.endDate ?? "Present"}
        </p>
      </header>
      <p className="text-salley-primary/80 text-lg">{role.title}</p>
      <ul className="flex lg:justify-end items-center gap-2">
        {role.skills?.map((skill, index) => (
          <li
            key={index}
            className="bg-salley-primary/10 border border-salley-primary/50 rounded-2xl px-[1em] py-[.1em]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
