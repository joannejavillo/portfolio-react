import React from "react";

const Portfolio = () => {
    return (
        <div className="container p-3 my-4 border">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center"><strong> My Projects:</strong></h1>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <a href="https://frozen-taiga-34472.herokuapp.com/">
                            <img src="./assets/images/initpage.png" alt="SAS-SOS page" class="img-thumbnail" />
                            <p className="text-center"><strong>SAS -SOS </strong></p>
                        </a>
                        <p className="text-centre">  <a href="https://github.com/joannejavillo/sas-project"> <strong>Github Repo </strong></a> </p>
                    </div>
                    <div className="col-md-12">
                        <a href="https://arcane-waters-44478.herokuapp.com/">
                            <img src="./assets/images/DCODE.png" alt="DCODE" class="img-thumbnail" />
                            <p class="text-center"><strong>DCODE</strong></p>
                        </a>
                        <p className="text-centre">  <a href="https://github.com/bendemic90/group-project-2"> <strong>Github Repo </strong></a> </p>
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <a href="https://frozen-springs-04146.herokuapp.com/">
                            <img src="./assets/images/budgetpage.png" alt="Budget Tracker" class="img-thumbnail" />
                            <p className="text-center"><strong>Budget Tracker</strong></p>
                        </a>
                        <p className="text-centre">  <a href="https://github.com/joannejavillo/budget-tracker"> <strong>Github Repo </strong></a> </p>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://joannejavillo.github.io/employee-directory_react/">
                            <img src="./assets/images/mainpage-asc.png" alt="Employee Directory-React" class="img-thumbnail" />
                            <p className="text-center"><strong>Employee Directory</strong></p>
                        </a>
                        <p className="text-centre">  <a href="https://github.com/joannejavillo/employee-directory_react"> <strong>Github Repo </strong></a> </p>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://joannejavillo.github.io/password-generator/">
                            <img src="./assets/images/passwordgen.png" alt="Password Generator" class="img-thumbnail" />
                            <p className="text-center"><strong>Password Generator</strong></p>
                        </a>
                        <p className="text-centre">  <a href="https://github.com/joannejavillo/password-generator"> <strong>Github Repo </strong></a> </p>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://joannejavillo.github.io/javascript-the_timed_quiz/">
                            <img src="./assets/images/JS-TheTimedQuiz.png" alt="JS-TheTimedQuiz" class="img-thumbnail" />
                            <p className="text-center"><strong>JS:The Timed Quiz</strong></p>
                        </a>
                        <p className="text-centre">  <a href="https://github.com/joannejavillo/javascript-the_timed_quiz"> <strong>Github Repo </strong></a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Portfolio;