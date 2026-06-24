export const users = [
  { id: 1, name: "Amina Patel", email: "amina.patel@wcms.gov", role: "Super Admin", department: "Information Technology", status: "Active", initials: "AP", color: "indigo", lastActive: "2 min ago" },
  { id: 2, name: "Liam Botha", email: "liam.botha@wcms.gov", role: "Department Admin", department: "Public Works", status: "Active", initials: "LB", color: "cyan", lastActive: "18 min ago" },
  { id: 3, name: "Nandi Mokoena", email: "nandi.mokoena@wcms.gov", role: "Content Manager", department: "Communications", status: "Active", initials: "NM", color: "violet", lastActive: "1 hr ago" },
  { id: 4, name: "Ethan Williams", email: "ethan.williams@wcms.gov", role: "Auditor", department: "Internal Audit", status: "Inactive", initials: "EW", color: "orange", lastActive: "3 days ago" },
  { id: 5, name: "Thandi Dlamini", email: "thandi.dlamini@wcms.gov", role: "Site Manager", department: "Community Services", status: "Active", initials: "TD", color: "rose", lastActive: "4 hr ago" },
];

export const activities = [
  { icon: "user", title: "New user account created", detail: "Nandi Mokoena joined Communications", time: "8 minutes ago", color: "blue" },
  { icon: "shield", title: "Role permissions updated", detail: "Department Admin · 4 permissions changed", time: "32 minutes ago", color: "violet" },
  { icon: "building", title: "Department details updated", detail: "Public Works contact information", time: "1 hour ago", color: "orange" },
  { icon: "login", title: "Successful administrator sign-in", detail: "Amina Patel · Cape Town, ZA", time: "2 hours ago", color: "green" },
];

export const departments = [
  { name: "Information Technology", code: "IT", manager: "Amina Patel", members: 42, status: "Active" },
  { name: "Public Works", code: "PW", manager: "Liam Botha", members: 186, status: "Active" },
  { name: "Communications", code: "COMMS", manager: "Nandi Mokoena", members: 28, status: "Active" },
  { name: "Community Services", code: "CS", manager: "Thandi Dlamini", members: 94, status: "Active" },
  { name: "Internal Audit", code: "IA", manager: "Ethan Williams", members: 16, status: "Review" },
];
