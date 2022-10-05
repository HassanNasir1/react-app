import Table from '../component/Table'

const headings = [
    "Name", "Email", "Type", "Action"
]

const schema = ["name", "email", "userType"]

const user = [
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      userType: "Member",
    },
    // More people...
  ];

const Home = () => {
    return <Table headings={headings} data={user} schema={schema}  />
}

export default Home;