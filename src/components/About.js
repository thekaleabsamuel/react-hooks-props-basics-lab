import React from "react";
import Links from "./Links"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
        {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;


// import React from "react";
// import Links from "./Links"

// function About(props) {
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//         {props.bio && props.bio.length > 1 ?<p>{props.bio}</p> : null}
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       <Links github={props.links.github} linkedin={props.links.linkedin} />
//     </div>
//   );
// }

// export default About;

// export default About;


// import React from "react";
// import Links from "./Links";

// function About(props) {
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       <Links github={props.links.github} linkedin={props.links.linkedin} />
//     </div>
//   );
// }

// export default About;

// import React from "react";
// import Links from "./Links";

// function About({ bio, links }) {

//   console.log(links)
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       {/* {props.bio ? <p>{props.bio}</p> : null} */}
//       {/* This shorthand with && can be used when the false condition is to
//       do nothing. */}
//       {bio && <p>{bio}</p>}
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       {/* add your <Links /> component here */}
//       <Links links={links} />
//     </div>
//   );
// }

// export default About;