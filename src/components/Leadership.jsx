import { motion } from "framer-motion";

const leadershipData = [
  {
    role: "Technical Lead",
    organization: "Training & Placement Cell, UIET",
    duration: "2024 – 2026",
    impacts: [
      "Directed the POD platform and managed the student placement database.",
      "Coordinated 50+ placement drives with 60+ recruiters.",
      "Streamlined technical workflows, improving data accuracy and accessibility.",
    ],
    metrics: [
      { value: "50+", label: "Placement Drives" },
      { value: "60+", label: "Recruiters" },
    ],
  },
  {
    role: "Head",
    organization: "Annual Sports Meet, UIET",
    duration: "2025",
    impacts: [
      "Organized a university-level sports meet with 500+ participants.",
      "Managed volunteer coordination and event logistics.",
      "Oversaw database and registration systems for participants.",
    ],
    metrics: [
      { value: "500+", label: "Participants" },
      { value: "100+", label: "Volunteers" },
    ],
  },
  {
    role: "NSS Volunteer",
    organization: "National Service Scheme (NSS)",
    duration: "2023 – 2025",
    impacts: [
    "Actively participated in community development and social awareness programs.",
    "Contributed to cleanliness drives, social outreach, and volunteer-led initiatives.",
    "Worked collaboratively in team-based activities promoting civic responsibility and leadership.",
    ],
    metrics: [
    { value: "Multiple", label: "Social Drives" },
    { value: "Team", label: "Volunteer Work" },
    ],
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-28 px-6">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-indigo-500">
          Leadership & Impact
        </h2>

        <div className="space-y-10">
          {leadershipData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl p-8 shadow-md"
              style={{ backgroundColor: "var(--card)" }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    {item.role}
                  </h3>
                  <p className="text-indigo-500 font-medium">
                    {item.organization}
                  </p>
                </div>

                <span
                  className="text-sm mt-2 md:mt-0"
                  style={{ color: "var(--muted)" }}
                >
                  {item.duration}
                </span>
              </div>

              {/* Impact Points */}
              <ul
                className="list-disc pl-5 space-y-2 mb-6"
                style={{ color: "var(--muted)" }}
              >
                {item.impacts.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Metrics */}
              <div className="flex gap-8 mt-4">
                {item.metrics.map((metric, i) => (
                  <div key={i}>
                    <h4 className="text-2xl font-bold text-indigo-500">
                      {metric.value}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: "var(--muted)" }}
                    >
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
