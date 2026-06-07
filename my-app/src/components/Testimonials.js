import React, { useEffect, useState } from 'react';
import './panel.css';

const items = [
  {name:'Sophie R', title:'CTO, FinFlow', text:'ACME accelerated our cloud migration and improved security posture.'},
  {name:'Mark D', title:'VP Product, Alto', text:'The platform is reliable and the team is a pleasure to work with.'},
  {name:'Priya S', title:'Head of Engineering, Nova', text:'Great UX and enterprise-ready controls out of the box.'}
];

export default function Testimonials(){
  const [i,setI] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=> setI(n => (n+1)%items.length), 5000);
    return ()=> clearInterval(t);
  },[]);

  return (
    <section className="testimonials">
      <h3>What our customers say</h3>
      <div className="test-card">
        <div className="quote">“{items[i].text}”</div>
        <div className="who">{items[i].name} — <span>{items[i].title}</span></div>
      </div>
    </section>
  );
}
