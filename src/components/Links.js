// import React from "react";

// function links ({ linkedin, github}) {
//     return ( <div>
//         <h3>Links</h3>
//         <a href = {github}>{github}</a>
//         <a href = {linkedin}>{linkedin}</a>
// </div>
//     );
// }

// export default links;





// // import React from "react";

// // function Links(props) {
// //   return (
// //     <div>
// //       <h3>Links</h3>
// //       <a href={props.github}>{props.github}</a>
// //       <a href={props.linkedin}>{props.linkedin}</a>
// //     </div>
// //   );
// // }

// // export default Links;


import React from "react";

function Links({ linkedin, github }) {
    return (
        <div>
            <h3>Links</h3>
            <a href={github}>{github}</a>
            <a href={linkedin}>{linkedin}</a>
        </div>
    );
}

export default Links;
