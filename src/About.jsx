import TypedText from "./Typed"
function About () {
   return(<>
   <div className="About">
 <img className="imagea" src="https://i.pinimg.com/736x/55/33/5c/55335c708ac05d8f469894d08e2671fa.jpg" alt="" />
  <h1>&lt;Who<span className="extra">AmI?/&gt;</span></h1>
  
  <TypedText/>
  <p className="discription">I am a BTech student majoring in Computer Science with a strong passion for web development. I enjoy building dynamic and responsive web applications, constantly exploring new technologies and best practices in the field. My goal is to create user-friendly, efficient, and innovative digital experiences that make a real impact. As a web developer, I focus on both front-end and back-end development, ensuring that my projects are well-rounded and scalable.</p>

   </div>
   </>)
}
export default About