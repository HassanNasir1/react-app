import RegisterCourse from '../component/Course';
import Header from '../component/Header';
import Footer from "../component/Footer";

const registerCourse = () => {
return (
    <>
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