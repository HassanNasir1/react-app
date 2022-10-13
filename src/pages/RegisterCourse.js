import RegisterCourse from '../component/Course';
import Header from '../component/Header';
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const navigation = [
  { name: 'Login', href: '/', current: false },
  { name: 'Register', href: '/register', current: false },
  { name: 'Admin', href: '/admin', current: false },
  { name: 'Course', href: '/course', current: true },
  { name: 'Register Course', href: '/course/register', current: true },
  { name: 'Quiz', href: '/quiz', current: false },
]


const registerCourse = () => {
return (
    <>
    <Navbar navigation={navigation} />
    <Header
        heading={"Course Registration"}
        tagline={
          "lorem ipsum is a placeholder text commonly content"
        }
      />
    
    <RegisterCourse />
    <Footer />

    </>
)
}
export default registerCourse;