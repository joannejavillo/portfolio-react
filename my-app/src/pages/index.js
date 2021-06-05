import React from "react";

const About = () => {
    return (
        <div className="container p-3 my-4 border">
            <h1> About Me</h1>
            <div className="row">
                <div className="col-md-4">
                    <img src="./assets/images/profile.jpeg" alt="Jo-Anne Javillo" className = "img-fluid"/>
                </div>
                <div className="col-md-8">
                    <p>My name is Jo-Anne Javillo. Just finished full stack web
                        developer in University of Adelaide and working as pharmacy assistant.
                    </p>
                        <p> I did the bootcamp for 6 months and learned all about HTML, CSS, Bootstrap, Javascript,
                             JSON, node, MySQL and Mongodb, React.
                       </p>
                             <p>I am looking forward to apply all the things that I have learned in bootcamp.
                                Hoping to be able to honed my skills more, and to develop or collaborate to make an application
                                that will be of benefit to Pharmacy IT or IT industry.
                            </p>
                    <p> When not coding, I am into coffee and music, I won't last a day without it.
                            C'mon message me and let us collaborate!CHEERS!!!
                    </p>
                </div>
            </div>
        </div>

    );
}

export default About;