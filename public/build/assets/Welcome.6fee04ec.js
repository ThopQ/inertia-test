import{l as u,b as o,d as n,g as p,u as t,H as c,e as s,j as f,t as l,m as _,w as b,p as v,F as i,q as g}from"./app.ec4098db.js";const w={class:"h-screen w-screen grid place-content-center"},y={class:"rounded-xl shadow-lg p-16"},h=s("button",{type:"submit"},"Senden",-1),V={__name:"Welcome",props:{members:Array},setup(m){const r=u({email:null});return(d,a)=>(o(),n(i,null,[p(t(c),{title:"Welcome"}),s("div",w,[s("div",y,[f(l(t(r).email)+" ",1),s("form",{onSubmit:a[1]||(a[1]=_(e=>t(r).post(d.route("members.store")),["prevent"]))},[b(s("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>t(r).email=e),type:"email"},null,512),[[v,t(r).email]]),h],32),(o(!0),n(i,null,g(m.members,e=>(o(),n("p",{key:e.id},l(e.email),1))),128))])])],64))}};export{V as default};
