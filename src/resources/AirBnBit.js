import React from "react";

 const AirBnBit = () => (
    <div class="p2body">
        This project presents an alternative to the model of AirBnB. The twist is that all payments are in bitcoin.
        <br/><br/>
        Users are able to view available properties without having to register or even provide any information on themselves. If a user is interested in listing a place for rent as a host or in renting a place as a guest, they then register themselves. If registering as a potential host, they submit information on their place for evaluation. Someone will correspond with them by email to determine if the place will be listed, and at what rate. If agreement is reached, the site staff will perform the entry (this prevents scams or other malicious tampering with the site). A user wishing to rent simply chooses a place and submits a reservation request. A bitcoin payment system is utilized to collect the rent and then to remit the host portion to the property owner.
        <br/><br/>
        The site includes the use of HTML5, CSS3, Bootstrap, and JavaScript for the layout and client-side logic, Firebase for the log in operation, MySQL and Sequelize for the database, and Express and NodeJS for the server.
        <br/><br/>
        My involvement here extended over much of project. The bitcoin exchange was handled by another team member (who was the originator of the idea). My part included the initial file structure using the Model View Controller (MVC) paradigm, most of the HTML and CSS for the user interface and experience (not including the Firebase log in), part of the server-side routing, and much of the team communication (this project was done during the Christmas holidays and included travel by team members).
        <br/><br/>
        Click <a target="_blank" rel="noopener noreferrer" href="https://infinite-coast-96588.herokuapp.com/">here</a> to visit the site.
    </div>
 );
export default AirBnBit;