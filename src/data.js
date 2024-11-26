export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob@example.com",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 6,
    name: "Emily Wilson",
    email: "emily@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Frank Harris",
    email: "frank@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 8,
    name: "Grace Lee",
    email: "grace@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 9,
    name: "Hannah Walker",
    email: "hannah@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 10,
    name: "Ian Taylor",
    email: "ian@example.com",
    role: "Admin",
    status: "Active",
  },
];


export const roles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
];

export const permissions = ['Read', 'Write', 'Delete', 'Execute'];