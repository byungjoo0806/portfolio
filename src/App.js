import './App.css'
import Profile from './contents/profile'
import Introduce from './contents/introduce'
import Projects from './contents/projects'
import Skills from './contents/skills'
import Footer from './contents/footer'
import Education from './contents/education'
import Sidebar from './contents/sidebar'

function App() {
    return (
        <div className="w-screen h-screen bg-gradient-to-b to-white from-gray-50 flex justify-center">
            <Sidebar />
            <div className="w-full md:w-[1100px] p-3 md:p-[30px] box-border flex flex-col">
                {/* profile */}
                <Profile />
                {/* introduce */}
                <Introduce />

                {/* Project Experience */}
                <Projects />

                {/* Skills */}
                <Skills />

                {/* Education */}
                <Education />

                {/* Certifications */}
                {/* <Certifications /> */}

                {/* footer */}
                <Footer />
            </div>
        </div>
    )
}

export default App
