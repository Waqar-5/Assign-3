import Header from "./components/Header/page";
import About from "./components/About/page";
import Portfolio from "./components/Portfolio/page";
import Contact from "./components/Contact/page";



export default function Home() {
  return (    
  <main>
    <img src="" alt="" />
<Header/>
<h1 className="p-2 m-40 ml-12 rounded-full border-2 border-yellow-600 border-b-2 bg-yellow-500 hover:bg-yellow-900 text-6xl text-center">Do Different and Be Different...!</h1>

<About/>
<Portfolio/>
<Contact></Contact>

      </main>
    
  );
}
