export function scoreCandidate(c) {
  let skills = "";

  if (typeof c.skills === "string") {
    skills = c.skills.toLowerCase();
  } else if (Array.isArray(c.skills)) {
    skills = c.skills.join(', ').toLowerCase();
  } else {
    skills = "";
  }

  const experience = parseInt(c.experience || "0");
  const gender = (c.gender || "").toLowerCase();
  const location = (c.location || "").toLowerCase();

  let score = 0;
  let reasons = [];

  if (skills.includes("react") || skills.includes("python")) {
    score += 30;
    reasons.push("Knows React/Python");
  }

  if (experience > 2) {
    score += 20;
    reasons.push("Experienced");
  }

  if (["female", "nonbinary"].includes(gender)) {
    score += 20;
    reasons.push("Gender diversity");
  }

  if (location && !location.includes("usa")) {
    score += 20;
    reasons.push("Global talent");
  }

  return { score, reasons };
}
